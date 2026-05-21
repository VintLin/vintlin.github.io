window.DeckSlideParts=window.DeckSlideParts||[];
window.DeckSlideParts.push({id:'21-tools-recommend-chapter',html:String.raw`<section class="slide dark" data-bg="visual" data-animate="summary-cards">
  <div class="chrome">
    <div>Summary · Tool Recommendations</div>
    <div data-page-index></div>
  </div>
  <div class="frame standard-page tools-rec-cover" aria-label="工具推荐章节页">
    <div class="tools-rec-cover__label" data-anim>总结 · 工具推荐</div>
    <h2 class="tools-rec-cover__title" data-anim>工具推荐。</h2>
    <div class="tools-rec-cover__columns">
      <section class="tools-rec-cover__column" data-anim="card" aria-label="Agent 推荐">
        <div class="tools-rec-cover__heading"><i data-lucide="bot" aria-hidden="true"></i><span>Agent</span></div>
        <div class="tools-rec-cover__stack">
	          <a class="tools-rec-cover__item tools-rec-cover__item--agent" href="https://openai.com/codex/" target="_blank" rel="noreferrer">
	            <img loading="lazy" decoding="async" class="tools-rec-cover__logo" src="images/shared/tool-icons/codex.webp" alt="Codex 图标">
	            <div>
	              <div class="tools-rec-cover__name tools-rec-cover__name--en">Codex</div>
	              <div class="tools-rec-cover__desc">适合在代码仓库中阅读、修改、验证和交付工程任务。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item tools-rec-cover__item--agent" href="https://claude.com/download" target="_blank" rel="noreferrer">
	            <img loading="lazy" decoding="async" class="tools-rec-cover__logo" src="images/shared/tool-icons/claudecode.webp" alt="Claude Code 图标">
	            <div>
	              <div class="tools-rec-cover__name tools-rec-cover__name--en">Claude Code</div>
	              <div class="tools-rec-cover__desc">适合在终端中处理代码理解、修改和项目内自动化任务。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item tools-rec-cover__item--agent" href="https://copilot.tencent.com/work/" target="_blank" rel="noreferrer">
	            <img loading="lazy" decoding="async" class="tools-rec-cover__logo" src="images/shared/tool-icons/workbuddy.webp" alt="WorkBuddy 图标">
	            <div>
	              <div class="tools-rec-cover__name tools-rec-cover__name--en">WorkBuddy</div>
	              <div class="tools-rec-cover__desc">适合把文件、网页、命令行和工作流放在同一任务上下文里执行。</div>
	            </div>
	          </a>
	        </div>
	      </section>
      <section class="tools-rec-cover__column" data-anim="card" aria-label="国学 Skill 推荐">
        <div class="tools-rec-cover__heading"><i data-lucide="briefcase-business" aria-hidden="true"></i><span>国学 Skill</span></div>
	        <div class="tools-rec-cover__stack">
	          <a class="tools-rec-cover__item" href="downloads/skills/pdf-compare.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="files" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">PDF 差异对比</span><span class="tools-rec-cover__original">pdf-compare</span></div>
	              <div class="tools-rec-cover__desc">对比两个 PDF 版本，生成带标注的视觉差异报告。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item" href="downloads/skills/pdf-analysis.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="scan-text" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">PDF 字体分析</span><span class="tools-rec-cover__original">pdf-analysis</span></div>
	              <div class="tools-rec-cover__desc">扫描 PDF 字体、字号、颜色和空格。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item" href="downloads/skills/pdf-merge.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="combine" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">PDF 智能合并</span><span class="tools-rec-cover__original">pdf-merge</span></div>
	              <div class="tools-rec-cover__desc">按页面相似度匹配，将修订版页面合并回原始 PDF。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item" href="downloads/skills/audio-find.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="search" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">音频文件查找</span><span class="tools-rec-cover__original">audio-find</span></div>
	              <div class="tools-rec-cover__desc">从 Excel 音频清单查找、复制、重命名并汇总本地音频文件。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item" href="downloads/skills/audio-text-compare.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="audio-lines" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">音频文本校对</span><span class="tools-rec-cover__original">audio-text-compare</span></div>
	              <div class="tools-rec-cover__desc">转写音频，对照源文本，并生成 Excel 差异报告。</div>
	            </div>
	          </a>
	          <a class="tools-rec-cover__item" href="downloads/skills/action-browser.zip" download>
	            <span class="tools-rec-cover__icon"><i data-lucide="mouse-pointer-click" aria-hidden="true"></i></span>
	            <div>
	              <div><span class="tools-rec-cover__name">浏览器操作</span><span class="tools-rec-cover__original">action-browser</span></div>
	              <div class="tools-rec-cover__desc">通过真实浏览器完成打开、点击、填写、滚动和结构化提取。</div>
	            </div>
	          </a>
        </div>
      </section>
      <section class="tools-rec-cover__column" data-anim="card" aria-label="通用 Skill 推荐">
        <div class="tools-rec-cover__heading"><i data-lucide="sparkles" aria-hidden="true"></i><span>通用 Skill</span></div>
        <div class="tools-rec-cover__stack">
          <a class="tools-rec-cover__item" href="downloads/skills/find-skills.zip" download>
            <span class="tools-rec-cover__icon"><i data-lucide="search-check" aria-hidden="true"></i></span>
            <span>
              <span class="tools-rec-cover__name">Find Skills</span>
              <span class="tools-rec-cover__desc">查找和筛选可复用 Skill。</span>
            </span>
          </a>
          <a class="tools-rec-cover__item" href="downloads/skills/skill-creator.zip" download>
            <span class="tools-rec-cover__icon"><i data-lucide="file-plus-2" aria-hidden="true"></i></span>
            <span>
              <span class="tools-rec-cover__name">Skill Creator</span>
              <span class="tools-rec-cover__desc">把稳定流程封装成 Skill。</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  </div>
  <div class="foot">
    <div data-page-title>Tool Recommendations</div>
    <div>Agent / Skill / Workflow</div>
  </div>
</section>
`});
