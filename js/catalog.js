// Catalog
var toc = document.getElementById('toc')

if (toc != null) {
  window.addEventListener("scroll", scrollcatelogHandler);
  var tocPosition = toc.offsetTop;
  var signature = document.getElementById("signature");
  var height_header = signature ? signature.offsetHeight : 0;

  function scrollcatelogHandler(e) {
    var event = e || window.event,
      target = event.target || event.srcElement;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > tocPosition - 60) {
      toc.classList.add("toc-fixed");
    } else {
      toc.classList.remove("toc-fixed");
    }
  }
}