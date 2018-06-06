webpackJsonp([19941843114688],{513:function(a,t){a.exports={data:{site:{siteMetadata:{startDate:"2018-06-06",lessons:8,noClass:[4]}},markdownRemark:{html:'<p>This week we will have an introduction to HTML, the HTML template and what block elements are and how to use them.</p>\n<p><span class="more"></span></p>\n<h2>What is HTML?</h2>\n<p>HTML or Hyper Text Markup Language is the building blocks of all web pages. HTML uses tags to create element that are filled with content like text and images. The elements are instructions to the web browser how to display the content on the screen.</p>\n<p>Another way to think about it is HTML is a series of start and stop commands for the web browser. The browser then renders that content to the specs of HTML.</p>\n<h2>The Three Buckets</h2>\n<p>Modern web development uses the three bucket approach. Each bucket adds another layer to the display of the page.</p>\n<ul class="buckets">\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n<ul>\n<li>HTML is the building blocks or scaffolding of the page.</li>\n<li>CSS or Cascading Style Sheets is the presentation or the look and feel of the page.</li>\n<li>JavaScript is the action layer of the page. We will not cover any JavaScript in this class.</li>\n</ul>\n<h2>The Tag</h2>\n<p>There are over 80 different HTML tags that can be used. They all have the same basic format. Most tags have an opening and a closing tag.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>All tags have brackets around them <code class="language-text">&lt;</code> and <code class="language-text">&gt;</code> that are used by the browser to know what is a tag and what is content. Right after the opening bracket <code class="language-text">&lt;</code> is the tag name like h1 or p then the closing bracket <code class="language-text">&gt;</code>.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>If the tag has a closing tag it will match the opening tag but have an <code class="language-text">/</code> after the opening bracket. This is the indication to the browser to close the tag that was opened. With out it the browser would never know when to stop.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>There are a few number of tags that do not have a closing tag because they do not wrap any content. Older versions of HTML required that all tags be opened and closed. This is no longer the case although you may still see a self-closing tag <code class="language-text">&lt;tag /&gt;</code> in code examples.</p>\n<h2>Attributes</h2>\n<p>Sometimes a tag will need additional information to perform correctly. Adding an attribute to the tag allows the developer to set the correct information on each tag.</p>\n<ul>\n<li>Attributes will always go on the opening tag after the tag name. There must be space between the tag name and the attribute name.</li>\n<li>Attributes do not need to be closed. In other words when you close a tag you close its entire attribute.</li>\n<li>If an attribute has a value the value must be quoted and you should use the double quote "</li>\n<li>If an attribute has a value there must be an equal sign = between the attribute name and the value.</li>\n<li>The order of the attribute does not matter.</li>\n<li>The number of attributes that are used has decreased with newer versions of HTML.</li>\n</ul>\n<h3>One Attribute</h3>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span> <span class="token attr-name">attribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h3>Two Attributes</h3>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span> <span class="token attr-name">attribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">attribute</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2>Block-level vs inline</h2>\n<p>Most all tags fall in to one of two types of tags, inline or block. Understanding how an element displays will help you choose the correct tag to use.</p>\n<p>Block-level elements will</p>\n<ul>\n<li>Fill the full width of the parent element</li>\n<li>Force the content to its own line</li>\n<li>Allows for padding and margin to be set on the top and bottom.</li>\n</ul>\n<h3>Examples</h3>\n<p><code class="language-text">&lt;p&gt;</code>, <code class="language-text">&lt;div&gt;</code>, <code class="language-text">&lt;header&gt;</code>, <code class="language-text">&lt;nav&gt;</code>, <code class="language-text">&lt;ul&gt;</code>, <code class="language-text">&lt;li&gt;</code>, and <code class="language-text">&lt;h1&gt;</code>.</p>\n<p>Inline will</p>\n<ul>\n<li>Only take up the space of the content</li>\n<li>Wont force the content two its own line i.e. stay "inline"</li>\n<li>Can\'t have padding on the top and bottom</li>\n<li>Can\'t have a width or height set\nExamples\n<code class="language-text">&lt;a&gt;</code>, <code class="language-text">&lt;span&gt;</code>, <code class="language-text">&lt;strong&gt;</code>, <code class="language-text">&lt;em&gt;</code> and <code class="language-text">&lt;code&gt;</code>.</li>\n</ul>\n<p>The block examples are structural elements, while the inline elements are text-based. This is an easy way to remember which is which.</p>\n<p>Generally speaking, you can put any block element inside another block element. You can also put any inline element inside a block element, as well as any inline element inside any other inline element. But you cannot put a block element inside an inline element. The paragraph tags also must be the inner most block element or in other words you cannot have a paragraph tag nested in a paragraph tag.</p>\n<h2>Nesting Elements</h2>\n<p>If we think about html as the building blocks of a webpage we will have to nest elements within in each other to build the page correctly.</p>\n<p>Think about it this way. If we were to build a house we might start to build the ground floor. We might add a kitchen, bathroom and living room all with in the ground floor. We would not finish the floor until all the rooms are done.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">House\n    Floor\n        Kitchen\n        Bathroom\n        Living room\n    Floor\n        Bed Room\n        Bed Room\n        Bathroom</code></pre>\n      </div>\n<p>If this was HTML it might look something like this</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>house</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>floor</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kitchen</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kitchen</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bathroom</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bathroom</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>living</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>living</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>floor</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>floor</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bed</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bed</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bed</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bed</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bathroom</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bathroom</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>floor</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>house</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>You can see we open the house tag but do not close it until both floors are done.</p>\n<p>First in, last out. The first tag you open is the last tag you close.</p>',frontmatter:{lesson:"Introduction",title:"Lesson 1",lessonId:1,downloads:{Download_Stater_File:{file:{publicURL:"/static/HTML-[YOUR_NAME]-4499ff838273d2fa107dda8c523876ec.zip"}},Homework_Files:null}}},allMarkdownRemark:{edges:[{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"Introduction"},fields:{slug:"/1/index.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/editors.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"HTML Editors"},fields:{slug:"/1/editors.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/template.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"Building a HTML template"},fields:{slug:"/1/template.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/block.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"Block Elements"},fields:{slug:"/1/block.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/classwork.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"Classwork"},fields:{slug:"/1/classwork.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/1/homework.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 1",lesson:"Homework"},fields:{slug:"/1/homework.html"}}}]}},pathContext:{slug:"/1/index.html",title:"Lesson 1"}}}});
//# sourceMappingURL=path---1-index-html-7aeaa04e8fc9a31b3f38.js.map