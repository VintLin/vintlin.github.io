/* Blog micro-interactions */
(function () {
  'use strict';

  var MAIN_SELECTOR = '#main-content';
  var TAB_SELECTOR = 'a.js-content-tab';
  var SWITCH_CLASS = 'is-switching';
  var ENTER_CLASS = 'is-entering';
  var POST_ENTER_CLASS = 'post-enter';
  var POST_VISIBLE_CLASS = 'post-entered';
  var isNavigating = false;

  function sleep(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function isModifiedClick(event) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  }

  function normalizePath(pathname) {
    return pathname.replace(/\/+$/, '') || '/';
  }

  function animatePostPreviews(scope) {
    var root = scope || document;
    var previews = root.querySelectorAll('.post-preview');

    if (!previews.length) {
      return;
    }

    Array.prototype.forEach.call(previews, function (item, index) {
      item.classList.remove(POST_ENTER_CLASS, POST_VISIBLE_CLASS);
      item.style.setProperty('--post-enter-delay', Math.min(index, 10) * 55 + 'ms');
      item.classList.add(POST_ENTER_CLASS);
    });

    requestAnimationFrame(function () {
      Array.prototype.forEach.call(previews, function (item) {
        item.classList.add(POST_VISIBLE_CLASS);
      });
    });
  }

  function updateNavActive(url) {
    var links = document.querySelectorAll(TAB_SELECTOR);
    Array.prototype.forEach.call(links, function (link) {
      if (!link.href) {
        return;
      }
      var samePath = new URL(link.href).pathname === url.pathname;
      if (samePath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function reinitPageBehaviors(pathname) {
    if (/\/archive\/?$/.test(pathname) && typeof window.initArchiveTagFilter === 'function') {
      window.initArchiveTagFilter();
    }
  }

  async function swapMainContent(url, pushState) {
    var main = document.querySelector(MAIN_SELECTOR);
    if (!main || isNavigating) {
      return;
    }

    isNavigating = true;

    try {
      main.classList.add(SWITCH_CLASS);
      await sleep(120);

      var response = await fetch(url.href, {
        headers: {
          'X-Requested-With': 'fetch'
        },
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error('Fetch failed: ' + response.status);
      }

      var html = await response.text();
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var nextMain = doc.querySelector(MAIN_SELECTOR);

      if (!nextMain) {
        throw new Error('Missing main content in response');
      }

      main.innerHTML = nextMain.innerHTML;
      document.title = doc.title || document.title;

      if (pushState) {
        window.history.pushState({ url: url.href }, '', url.href);
      }

      updateNavActive(url);
      reinitPageBehaviors(url.pathname);
      animatePostPreviews(main);

      main.classList.remove(SWITCH_CLASS);
      main.classList.add(ENTER_CLASS);
      window.setTimeout(function () {
        main.classList.remove(ENTER_CLASS);
      }, 320);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      window.location.href = url.href;
    } finally {
      isNavigating = false;
    }
  }

  function initContentTabs() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest(TAB_SELECTOR);
      if (!link || isModifiedClick(event) || link.target === '_blank' || link.hasAttribute('download')) {
        return;
      }
      if (!link.href) {
        return;
      }

      var nextUrl = new URL(link.href, window.location.href);
      var currentUrl = new URL(window.location.href);

      if (nextUrl.origin !== currentUrl.origin) {
        return;
      }

      if (normalizePath(nextUrl.pathname) === normalizePath(currentUrl.pathname)) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      swapMainContent(nextUrl, true);
    });

    window.addEventListener('popstate', function () {
      swapMainContent(new URL(window.location.href), false);
    });
  }

  // Theme toggle: enable transition only after first paint
  if (document.body) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add('theme-ready');
      });
    });
  }

  animatePostPreviews(document);
  initContentTabs();
})();
