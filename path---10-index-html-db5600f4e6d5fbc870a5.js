webpackJsonp([0x701bb3c07673],{517:function(e,t){e.exports={data:{site:{siteMetadata:{startDate:"2018-06-06",lessons:8,noClass:[4]}},markdownRemark:{html:'<p>How to set up your own HTML website including how to choose where to host and how to upload.</p>\n<p><span class="more"></span></p>\n<h2>Building a full site</h2>\n<p><a href="classwork/" target="_blank" class="btn">View Classwork</a></p>\n<p><strong>The magic of the index.html</strong></p>\n<p>When building a site that is hosted on a web server there needs to be a default file to serve. In most cases this is <strong>index.html</strong>. When you have a folder and put only one file in that folder it should be index.html since it will be served by just requesting the site or any subfolder of that site.</p>\n<p>For example you may go to a site named <a href="http://www.svahtml.com">http://www.svahtml.com</a> but you just ask for the site you never say what file you want. The server knows to give you the default file, index.html. to make life easy it just gives you it and the file is never displayed in the URL. But what happens when you go to a sub folder like? Again you are not saying what file you want so the server needs to give you the default file which is index.html.</p>\n<img height="36" src="images/image04.png" width="624">\n<p>So far we have two files in two folders each named <strong>index.html</strong>. For every folder that we have on the site it will have it\'s own index.html. As you might imagine there could be a lot of index.htmls.</p>\n<p>Because of this we need to be very careful about the file we are working on. One way to help keep track of the file that you are editing it is very useful to update the for each page on your site. It might be something like this.</p>\n<ul>\n<li>For you homepage - Site Name | Home</li>\n<li>A sub folder for your gallery might be - Site Name | Gallery</li>\n</ul>\n<p>This way you can look at the markup to know what page you are on.</p>\n<p>It should also be noted that you can not replace one index with an other since all the links where set for that page and the content would be wrong.</p>\n<h2>Your site might be something like this</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">Homepage\n- News\n- Sport\n- Weather\n- Gallery</code></pre>\n      </div>\n<p>Every subsection on your site should be broken into its own folder.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">/index.html\n/news/index.html\n/sports/index.html\n/weather/index.html\n/gallery/index.html</code></pre>\n      </div>\n<p>We have 5 index.html files.</p>\n<h2>But what if we have to have more than one file In a folder?</h2>\n<p>In that case any other file can be named whatever you want. It would be linked to from the index.html using the link tag <strong>(href=”filename.html”)</strong>.</p>\n<h2>For example</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">/news/index.html\n/news/yesterday.html\n/news/breakingnews.html\n/news/fun-stories.html</code></pre>\n      </div>\n<p>In this example we have four files all in the <strong>/news/</strong> folder.</p>\n<img height="354" src="images/image00.png" width="624">\n<p>When you have your files on a web server you are able to use absolute paths to make the paths from one section or folder to another.</p>\n<p>If you wanted to link from the news page to the weather page there are two ways to do this.</p>\n<ol>\n<li>Use a relative path. <strong>../weather/</strong></li>\n<li>Use an absolute path <strong>/weather/</strong></li>\n</ol>\n<p>The reason option 2 is better is because it will be the same path for all files on the site regardless of where you are.</p>\n<h2>Dev Local</h2>\n<p>The big problem with this way is it will not work when viewing your files from a local directory.</p>\n<p>If you want to still develop locally you will need to set up a local server. One great one is MAMP. it is very easy to setup and use and will allow you to have the same setup as your web server.</p>\n<img height="345" src="images/image01.png" width="427">\n<p>You just need to set the “Document Root” by clicking the Preferences button then clicking Apache.</p>\n<img height="349" src="images/image05.png" width="432">\n<p>Then set the folder of your project and click OK.</p>\n<p>Once that is done you need to click Start Servers. It may ask you to enter your username and password. In almost all cases this will be the same as when you logged in to the computer.</p>\n<p>if everything works your app will have two green lights</p>\n<img height="348" src="images/image03.png" width="430">\n<p>Then you need to go to <a href="http://localhost:8888/">http://localhost:8888/</a></p>\n<p>This will act as a real web server but you can continue to develop locally.</p>',frontmatter:{lesson:"Understanding the Index.html",title:"Lesson 10",lessonId:10,downloads:{Download_Stater_File:{file:{publicURL:"/static/week10-df9df642265c751ddae9072963dac822.zip"}},Homework_Files:null}}},allMarkdownRemark:{edges:[{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/10/hosting.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 10",lesson:"Setting up your own website"},fields:{slug:"/10/hosting.html"}}},{node:{id:"/Users/dhahn/dev/html-class-g/src/pages/10/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Lesson 10",lesson:"Understanding the Index.html"},fields:{slug:"/10/index.html"}}}]}},pathContext:{slug:"/10/index.html",title:"Lesson 10"}}}});
//# sourceMappingURL=path---10-index-html-db5600f4e6d5fbc870a5.js.map