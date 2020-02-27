(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(29),c=a.n(l),i=(a(38),a(14)),o=a(2),s=a(3),u=a(5),p=a(4),m=a(6),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return(n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:" card-columns-row"},n.a.createElement("div",{class:"card bg-light shadow"},n.a.createElement("h5",{class:"card-title"},this.props.element.title),n.a.createElement("img",{class:"card-img-top",src:this.props.element.urlToImage,alt:"Card image cap"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text text-center "},this.props.element.description),n.a.createElement("label",null,"written by ",n.a.createElement("h6",null,this.props.element.author))," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{class:"form-control input-lg ",id:"formGroupExampleInput",onClick:function(){return e.props.ReadArticleFunc(e.props.element)}},"Read Later"))))))}}]),t}(r.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return void 0!==this.props.allArticles&&(t=this.props.allArticles.map((function(t,a){return n.a.createElement(d,{key:a,element:t,ReadArticleFunc:e.props.ReadArticleFunc})}))),n.a.createElement("div",null,n.a.createElement("h1",null,t))}}]),t}(r.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).EditArticles=function(e,t){e.preventDefault(),a.props.EditArticles(e,t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return(n.a.createElement("div",{class:"container"},n.a.createElement("h1",null,n.a.createElement("button",{class:"btn btn-secondary",onClick:function(){return e.props.ClearAllArticles()}},"Clear All")),this.props.ReadArticle_2.map((function(t,a){return n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"card bg-light shadow"},n.a.createElement("h5",{class:"card-title"},t.title),n.a.createElement("img",{class:"card-img-top",src:t.urlToImage,alt:"Card image cap"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text text-center "},t.description),n.a.createElement("label",null,"written by ",n.a.createElement("h6",null,t.author))," ",n.a.createElement("br",null),n.a.createElement("button",{class:"btn btn-secondary",onClick:function(){return e.props.DeleteArticles()}},"Delete"),n.a.createElement("br",null),n.a.createElement("label",{for:"formGroupExampleInput"},"Rename Title :"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",class:"form-control input-lg ",id:"formGroupExampleInput",placeholder:"Write the new title",value:e.props.newTitle,onChange:function(t){return e.EditArticles(t,a)}}))))}))))}}]),t}(r.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).HandelChangeTitle=function(e){a.setState({title:e.target.value})},a.HandelChangeUrlToImage=function(e){a.setState({urlToImage:e.target.value})},a.HandelChangeDeesc=function(e){a.setState({description:e.target.value})},a.HandelChangeAuthor=function(e){a.setState({author:e.target.value})},a.onAddButtonClick=function(e){e.preventDefault();var t={title:a.state.title,urlToImage:a.state.urlToImage,description:a.state.description,author:a.state.author};a.props.addNewArticle(t),alert("successfully added to articles page")},a.state={title:"",urlToImage:"",description:"",author:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{class:"container"},n.a.createElement("div",{class:"form-group"},n.a.createElement("br",null),n.a.createElement("label",{for:"formGroupExampleInput"},"Article Title :"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",class:"form-control input-lg ",id:"formGroupExampleInput",onChange:this.HandelChangeTitle,placeholder:"Please write the title here"}),n.a.createElement("br",null),n.a.createElement("label",{for:"formGroupExampleInput"},"Article Picture :"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",class:"form-control input-lg ",id:"formGroupExampleInput",onChange:this.HandelChangeUrlToImage,placeholder:"Please put the url of pic here"}),n.a.createElement("br",null),n.a.createElement("label",{for:"formGroupExampleInput"},"Article Description :"),n.a.createElement("br",null),n.a.createElement("textarea",{type:"text",class:"form-control input-lg ",id:"formGroupExampleInput",onChange:this.HandelChangeDeesc,placeholder:"Please write the description here"}),n.a.createElement("br",null),n.a.createElement("label",{for:"formGroupExampleInput"},"Author Name"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",class:"form-control input-lg ",id:"formGroupExampleInput",onChange:this.HandelChangeAuthor,placeholder:"Please write your name  here"}),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("button",{class:"btn btn-secondary",onClick:this.onAddButtonClick},"Add New Article "))))}}]),t}(r.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{class:"container"},n.a.createElement("p",null,"We interest to post Articles about Bitcoin,.If you have an articles related in Bitcoin, please share it by go to Add Article page. "))}}]),t}(r.Component),v=a(13),A=a(11),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return(n.a.createElement("div",null,n.a.createElement(v.a,null,n.a.createElement("div",{class:"container"},n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark style=background-color: #e3f2fd;"},n.a.createElement("div",{class:"navbar navbar-inverese"},n.a.createElement("a",{class:"navbar-brand",href:"#"},n.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bitcoin.png/220px-Bitcoin.png"})),"   "),n.a.createElement(v.b,{class:"navbar-brand",to:"/"}," Articles "),n.a.createElement(v.b,{class:"navbar-brand",to:"/ReadingList"}," Reading List "),n.a.createElement(v.b,{class:"navbar-brand",to:"/AddArticles"}," Add Articles "),n.a.createElement(v.b,{class:"navbar-brand",to:"/AboutUs"}," About Us "))),n.a.createElement("div",null,n.a.createElement(A.a,{exact:!0,path:"/",component:function(){return n.a.createElement(h,{allArticles:e.props.allArticles,ReadArticleFunc:e.props.ReadArticleFunc})}}),n.a.createElement(A.a,{path:"/ReadingList",render:function(){return n.a.createElement(b,{ReadArticle_2:e.props.ReadArticle_2,DeleteArticles:e.props.DeleteArticles,EditArticles:e.props.EditArticles,ClearAllArticles:e.props.ClearAllArticles})}}),n.a.createElement(A.a,{path:"/AddArticles",component:function(){return n.a.createElement(E,{addNewArticle:e.props.addNewArticle})}}),n.a.createElement(A.a,{path:"/AboutUs",component:f})))))}}]),t}(r.Component),j=a(32),O=a.n(j),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).ReadLater=function(e){a.setState({Use_articles:[e].concat(Object(i.a)(a.state.Use_articles))})},a.HandelToDelete=function(e){var t=Object(i.a)(a.state.Use_articles);t.splice(e,1),a.setState({Use_articles:t})},a.HandelToEdit=function(e,t){var r=Object.assign({},a.state.Use_articles[t]);r.title=e.target.value;var n=Object(i.a)(a.state.Use_articles);n.splice(t,1,r),a.setState({Use_articles:n})},a.HandelToClearAll=function(){alert("Are you sure to delete all");var e=Object(i.a)(a.state.Use_articles);e=[],a.setState({Use_articles:e})},a.addNewArticle=function(e){a.setState({articles:[].concat(Object(i.a)(a.state.articles),[e])})},a.state={articles:[],Use_articles:[],newTitle:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;O()({method:"get",url:"https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-10&sortBy=publishedAt&apiKey=136430c128bc40ffb3148df6ed72b2a9"}).then((function(t){e.setState({articles:t.data.articles})})).catch((function(e){}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{allArticles:this.state.articles,ReadArticleFunc:this.ReadLater,ReadArticle_2:this.state.Use_articles,DeleteArticles:this.HandelToDelete,EditArticles:this.HandelToEdit,ClearAllArticles:this.HandelToClearAll,addNewArticle:this.addNewArticle}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1db8b571.chunk.js.map