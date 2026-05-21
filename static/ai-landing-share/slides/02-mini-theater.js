window.DeckSlideParts=window.DeckSlideParts||[];
window.DeckSlideParts.push({id:'02-mini-theater',html:String.raw`<section class="slide light mini-theater-slide" data-bg="quiet" data-mini-theater data-theater-active="1" aria-label="AI 只能回答，不能操作的小剧场">
  <div class="mini-theater">
    <section class="mini-theater__person" aria-label="使用者状态">
      <img data-theater-person="1" loading="lazy" decoding="async" src="images/page-02/person-confused-keyboard.webp" alt="疑惑地看向电脑的人物">
      <img data-theater-person="2" loading="lazy" decoding="async" src="images/page-02/person-focused-keyboard.webp" alt="认真看向电脑的人物">
      <img data-theater-person="3" loading="lazy" decoding="async" src="images/page-02/person-frustrated.webp" alt="抓狂的人物">
      <img data-theater-person="4" loading="lazy" decoding="async" src="images/page-02/person-thinking.webp" alt="思考中的人物">
      <div class="mini-theater__thought mini-theater__thought--emphasis">如果 AI 能直接操作我的电脑就好了</div>
    </section>
    <section class="mini-theater-window" aria-label="AI 聊天窗口">
      <div class="mini-theater-window__bar" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="mini-theater-window__body">
        <div class="mini-chat-scene" data-theater-scene="1" aria-label="连续提问">
          <div class="chat-bubble chat-bubble--user">如何使用 Excel 公式？</div>
          <div class="chat-bubble chat-bubble--user">如何安装这个软件？</div>
          <div class="chat-bubble chat-bubble--user">如何修复电脑问题？</div>
          <div class="chat-bubble chat-bubble--user">如何设置网络环境？</div>
          <div class="chat-bubble chat-bubble--ai chat-bubble--thinking" aria-label="AI 正在思考">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="mini-chat-scene" data-theater-scene="2" aria-label="长答案">
          <div class="chat-bubble chat-bubble--ai chat-bubble--long chat-bubble--stream">
            <template data-stream-source><span class="stream-line"><strong>首先</strong>，确认你的 Excel 版本，区分是 Microsoft 365、Office 2021，还是 WPS，因为函数名称、动态数组和菜单位置可能不同。</span><span class="stream-line"><strong>其次</strong>，把目标拆成输入、计算规则和输出三部分，例如“按姓名查找部门”“按日期汇总金额”“根据条件自动分类”。</span><span class="stream-line"><strong>之后</strong>，先用一个最小样例测试公式，不要直接套到整张表，避免错误被复制到所有单元格。</span><span class="stream-line"><strong>第一步</strong>，检查原始数据是否有空格、合并单元格、文本型数字、日期格式混乱等问题。</span><span class="stream-line"><strong>第二步</strong>，如果是查找类需求，优先尝试 XLOOKUP；旧版本可以使用 VLOOKUP 或 INDEX + MATCH。</span><span class="stream-line"><strong>第三步</strong>，如果是汇总类需求，优先使用 SUMIFS、COUNTIFS、FILTER 或数据透视表。</span><span class="stream-line"><strong>第四步</strong>，如果公式返回错误，先看错误类型：#N/A 多半是匹配不到，#VALUE! 多半是类型不一致，#REF! 多半是引用区域失效。</span><span class="stream-line"><strong>第五步</strong>，安装软件时先确认系统版本、芯片架构、管理员权限和安装包来源，避免下载到不匹配的安装器。</span><span class="stream-line"><strong>第六步</strong>，网络环境问题先检查代理、DNS、VPN、系统证书和防火墙规则，再判断是不是软件自身配置错误。</span><span class="stream-line"><strong>最后</strong>，把每次尝试、报错截图和改动记录下来，方便继续排查。</span></template>
            <div class="stream-answer" data-stream-output></div>
          </div>
        </div>
        <div class="mini-chat-scene mini-chat-scene--error" data-theater-scene="3" aria-label="报错弹窗">
          <div class="error-dialog" role="presentation">
            <div class="error-dialog__title">操作失败</div>
            <div class="error-dialog__code">ERROR 0x80070005</div>
            <p>无法访问目标目录。当前账户没有足够权限，安装程序已中止。</p>
            <button type="button" tabindex="-1">确定</button>
          </div>
        </div>
        <div class="mini-chat-scene" data-theater-scene="4" aria-label="能力边界">
          <div class="chat-bubble chat-bubble--user">你不能直接帮我操作吗？</div>
          <div class="chat-bubble chat-bubble--ai chat-bubble--long chat-bubble--stream">
            <template data-stream-source><span class="stream-line">抱歉，我没有这个能力。</span></template>
            <div class="stream-answer stream-answer--short" data-stream-output></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="mini-theater-progress" aria-hidden="true">
    <span></span><span></span><span></span><span></span>
  </div>
</section>
`});
