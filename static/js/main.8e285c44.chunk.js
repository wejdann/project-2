(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),i=(a(38),a(15)),o=a(2),s=a(3),u=a(5),h=a(4),p=a(6),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,this.props.element.title),r.a.createElement("img",{src:this.props.element.urlToImage}),r.a.createElement("p",null,this.props.element.description),r.a.createElement("h6",null,this.props.element.author),r.a.createElement("button",{onClick:function(){return e.props.ReadArticleFunc(e.props.element)}},"Read Later"))}}]),t}(n.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return void 0!==this.props.allArticles&&(t=this.props.allArticles.map((function(t,a){return r.a.createElement(d,{key:a,element:t,ReadArticleFunc:e.props.ReadArticleFunc})}))),r.a.createElement("div",null,r.a.createElement("h1",null,t))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).EditArticles=function(e,t){e.preventDefault(),console.log("edit b22"),a.props.EditArticles(e,t)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null," ",r.a.createElement("button",{onClick:function(){return e.props.ClearAllArticles()}},"Clear All")),r.a.createElement("h2",null," ",r.a.createElement("button",null,"Clear")),this.props.ReadArticle_2.map((function(t,a){return r.a.createElement("div",null,r.a.createElement("h4",null,t.title),r.a.createElement("img",{src:t.urlToImage}),r.a.createElement("p",null,t.description),r.a.createElement("h6",null,t.author),r.a.createElement("button",{onClick:function(){return e.props.DeleteArticles()}},"Delete"),r.a.createElement("button",{onClick:e.EditArticles},"Edit"),r.a.createElement("input",{type:"text",placeholder:"You can Edit the title",value:e.props.newTitle,onChange:function(t){return e.EditArticles(t,a)}}),r.a.createElement("input",{type:"checkbox",checked:e.props.CheckMe,onChange:e.handleCheck}))})))}}]),t}(n.Component),A=a(17),b=a.n(A),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).HandelChangeTitle=function(e){a.setState({title:e.target.value})},a.HandelChangeUrlToImage=function(e){a.setState({urlToImage:e.target.value})},a.HandelChangeDeesc=function(e){a.setState({description:e.target.value})},a.HandelChangeAuthor=function(e){a.setState({author:e.target.value})},a.onAddButtonClick=function(e){e.preventDefault(),console.log("About to add an article");var t={title:a.state.title,urlToImage:a.state.urlToImage,description:a.state.description,author:a.state.author};a.props.addNewArticle(t)},a.state={title:"",urlToImage:"",description:"",author:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.HandelChangeTitle,placeholder:"Please write the title here"}),r.a.createElement("hr",null),r.a.createElement("textarea",{type:"text",onChange:this.HandelChangeUrlToImage,placeholder:"Please put the url of pic here"})," ",r.a.createElement("hr",null),r.a.createElement("textarea",{type:"text",onChange:this.HandelChangeDeesc,placeholder:"Please write the description here"})," ",r.a.createElement("hr",null),r.a.createElement("input",{type:"text",onChange:this.HandelChangeAuthor,placeholder:"Please write your name  here"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onAddButtonClick},"Add New Article ")))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hi frome contact"))}}]),t}(n.Component),C=a(13),g=a(11),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(C.b,{to:"/"}," Articles ")," ||"," ",r.a.createElement(C.b,{to:"/MyArticles"}," My Articles ")," ||"," ",r.a.createElement(C.b,{to:"/AddArticles"}," Add Articles ")," ||"," ",r.a.createElement(C.b,{to:"/contact"}," Contact Us "),r.a.createElement("div",null,r.a.createElement(g.a,{exact:!0,path:"/",component:function(){return r.a.createElement(m,{allArticles:e.props.allArticles,ReadArticleFunc:e.props.ReadArticleFunc})}}),r.a.createElement(g.a,{path:"/MyArticles",render:function(){return r.a.createElement(E,{ReadArticle_2:e.props.ReadArticle_2,DeleteArticles:e.props.DeleteArticles,EditArticles:e.props.EditArticles,ClearAllArticles:e.props.ClearAllArticles})}}),r.a.createElement(g.a,{path:"/AddArticles",component:function(){return r.a.createElement(f,{addNewArticle:e.props.addNewArticle})}}),r.a.createElement(g.a,{path:"/contact",component:v}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).ReadLater=function(e){a.setState({Use_articles:[e].concat(Object(i.a)(a.state.Use_articles))})},a.HandelToDelete=function(e){var t=Object(i.a)(a.state.Use_articles);t.splice(e,1),a.setState({Use_articles:t})},a.HandelToEdit=function(e,t){console.log("edit me")},a.HandelToClearAll=function(){alert("Are you sure to delete all");var e=Object(i.a)(a.state.Use_articles);e=[],a.setState({Use_articles:e})},a.handleCheck=function(e){a.setState({CheckMe:e.target.checked})},a.addNewArticle=function(e){a.setState({articles:[].concat(Object(i.a)(a.state.articles),[e])})},a.state={articles:[],Use_articles:[],newTitle:"",CheckMe:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;b()({method:"get",url:"https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"}).then((function(t){e.setState({articles:t.data.articles})})).catch((function(e){}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{allArticles:this.state.articles,ReadArticleFunc:this.ReadLater,ReadArticle_2:this.state.Use_articles,DeleteArticles:this.HandelToDelete,EditArticles:this.HandelToEdit,ClearAllArticles:this.HandelToClearAll,addNewArticle:this.addNewArticle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.8e285c44.chunk.js.map