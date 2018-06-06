webpackJsonp([80728383184856],{554:function(a,n){a.exports={data:{site:{siteMetadata:{startDate:"2018-06-06",lessons:8,noClass:[4]}},markdownRemark:{html:'<iframe height=\'528\' scrolling=\'no\' title=\'Flex Layout (Week 6)\' src=\'//codepen.io/danhahn/embed/owmERe/?height=528&theme-id=light&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/danhahn/pen/owmERe/\'>Flex Layout (Week 6)</a> by Dan Hahn (<a href=\'https://codepen.io/danhahn\'>@danhahn</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2>Set Up</h2>\n<p>We have the same markup as the <code class="language-text">Float</code> layout.</p>\n<p>But rather than using the brittle <code class="language-text">float</code> we can use a more modern <code class="language-text">display: flex</code>.</p>\n<div class="gatsby-highlight" data-language="markup">\n      <pre class="language-markup"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>Nav<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>Side Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>In this example we have two <code class="language-text">display: flex;</code> Going on at the same time. The design is to have a "sticky" footer, a footer that is at the bottom of the page regardless of the content on the page this is our first <code class="language-text">flex</code>; The other is the <code class="language-text">&lt;section&gt;</code>, we use this to create a "row" that contains our <code class="language-text">&lt;nav&gt;</code> <code class="language-text">&lt;article&gt;</code> and <code class="language-text">&lt;aside&gt;</code>.</p>\n<p>If you are comfortable using <code class="language-text">flex</code> the "row" style should straight forward. We define <code class="language-text">display: flex;</code> on <code class="language-text">&lt;section&gt;</code> to define a row. To define the "columns" we need define a <code class="language-text">flex-basis</code> on the <code class="language-text">&lt;nav&gt;</code> and <code class="language-text">&lt;aside&gt;</code> which are basically the "width" of the columns. To give the remainder of the space to the <code class="language-text">&lt;article&gt;</code> we define <code class="language-text">flex: 1</code>.</p>\n<p>Getting the "sticky" footer to work is a little more complex. First we need to ensure that page is as tall as the viewport we need to set <code class="language-text">&lt;html&gt;</code> and <code class="language-text">&lt;body&gt;</code> to have a height of <code class="language-text">100%</code>. This will allow us to set the height of the <code class="language-text">.wrapper</code> to <code class="language-text">100vh</code>. The <code class="language-text">vh</code> is a view height, it gets is size form the viewport. In our case it it taking up the full screen so we have it set to <code class="language-text">100vh</code>. We also use <code class="language-text">min-height</code> to ensure it takes the full screen size but can grow inf the content needs it to.</p>\n<p>Next we need to add a <code class="language-text">display: flex;</code> to the <code class="language-text">.wrapper</code>. Since the default for a <em>"flexbox"</em> is <code class="language-text">flex-direction: row;</code> it will stack the content next to each other. Since we want the content to stack on top of one another we need to set the <code class="language-text">flex-direction: column</code>; It may seem like there is no change but it is now a "flexbox" and this will allow us to take the remainder of the space in the column and give it our <code class="language-text">&lt;section&gt;</code>. We need to add <code class="language-text">flex: 1</code> to the <code class="language-text">&lt;section&gt;</code>, it is now a <em>flex parent</em> and <em>flex child</em> at the same time.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">html,\nbody</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> 16px arial<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">header</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> slategray<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">section</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">nav</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> plum<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">article</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">aside</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 100px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">footer</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Responsive</h2>\n<p><code class="language-text">@media</code> is a conditional styles that can be applied only when the conditions are meet. In this example it is looking at the <code class="language-text">max-width</code>. So if the screen width is <code class="language-text">600px</code> or less these additional style are added to the file. It is important to understand that the selectors in the media query have no more weight than any other selector. To ensure the styles at in the <code class="language-text">@media</code> query are applied they need to be defined after the <em>"default"</em> styles.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">section</span> <span class="token punctuation">{</span>\n    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">nav,\n  aside</span> <span class="token punctuation">{</span>\n    <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">@media</code> queries are different in that they wrap the selector. When working with media queries ensure that all <code class="language-text">{}</code> have a pair. Failing to properly close a media query could have adverse affects on any style after the missing <code class="language-text">}</code>.</p>',frontmatter:{lesson:"Flex Layout",title:"Lesson 6",lessonId:6,downloads:null}},allMarkdownRemark:{edges:[{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/6/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 6",lesson:"Float Layout"},fields:{slug:"/6/index.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/6/clear-fix.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 6",lesson:"Clear fix"},fields:{slug:"/6/clear-fix.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/6/flex.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 6",lesson:"Intro to Flex box"},fields:{slug:"/6/flex.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/6/flex-layout.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 6",lesson:"Flex Layout"},fields:{slug:"/6/flex-layout.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/6/homework.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 6",lesson:"Homework"},fields:{slug:"/6/homework.html"}}}]}},pathContext:{slug:"/6/flex-layout.html",title:"Lesson 6"}}}});
//# sourceMappingURL=path---6-flex-layout-html-990f04d47e2032725436.js.map