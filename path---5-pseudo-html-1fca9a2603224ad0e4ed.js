webpackJsonp([92525233763703],{550:function(s,n){s.exports={data:{site:{siteMetadata:{startDate:"2018-06-06",lessons:8,noClass:[4]}},markdownRemark:{html:'<p>Pseudo class selectors are CSS selectors with a colon preceding them.</p>\n<h2>Link related pseudo class selectors</h2>\n<p><code class="language-text">:link</code> - Perhaps the most confusion-causing link-related pseudo selector. Aren\'t all <code class="language-text">&lt;a&gt;</code>\'s links? Well not if they don\'t have an href attribute. This selects only those that do, thus is essentially the same as a[href]. This selector will become a lot more useful should any-element linking become reality.</p>\n<p><code class="language-text">:visited</code> - Selects links that have already been visited by the current browser.</p>\n<p><code class="language-text">:hover</code> - When the mouse cursor rolls over a link, that link is in it\'s hover state and this will select it.</p>\n<p><code class="language-text">:active</code> - Selects when the link while it is being activated (being clicked on or otherwise activated). For example, for the "pressed" state of a button-style link or to make all links feel more button-like.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">a</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> maroon<span class="token punctuation">;</span>\n  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">a:link</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> teal<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">a:visited</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> orangered<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">a:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>\n  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">a:active</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> forestgreen<span class="token punctuation">;</span>\n  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>While the order does not matter in most cases, here the selector weights are all the same so having <code class="language-text">:active</code> last means it will override <code class="language-text">:hover</code> and display when clicked.</p>\n<h2>Form pseudo class</h2>\n<p><code class="language-text">:focus</code> - Applied when a curser is placed within a form element.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">input</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid gray<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> width 1s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">input:focus</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n  <span class="token property">border-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> lightyellow<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Note:</strong> <code class="language-text">:hover</code> can be applied to any element.</p>',frontmatter:{lesson:"Pseudo class",title:"Lesson 5",lessonId:5,downloads:null}},allMarkdownRemark:{edges:[{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/5/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 5",lesson:"CSS Box Model"},fields:{slug:"/5/index.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/5/pseudo.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 5",lesson:"Pseudo class"},fields:{slug:"/5/pseudo.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/5/floats.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 5",lesson:"Floats"},fields:{slug:"/5/floats.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/5/clear-fix.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 5",lesson:"Clear fix"},fields:{slug:"/5/clear-fix.html"}}}]}},pathContext:{slug:"/5/pseudo.html",title:"Lesson 5"}}}});
//# sourceMappingURL=path---5-pseudo-html-1fca9a2603224ad0e4ed.js.map