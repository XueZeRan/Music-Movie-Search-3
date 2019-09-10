(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04de":function(t,e,a){},26217:function(t,e,a){"use strict";var s=a("04de"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("router-link",{staticClass:"a-btn",attrs:{to:"/"}},[t._v("music-Search")]),a("router-link",{staticClass:"a-btn",attrs:{to:"/au"}},[t._v("电影")])],1)]),a("keep-alive",[a("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[t._m(0),a("p",{staticClass:"lead"},[t._v("搜索音乐~~Search API允许您在网站中放置搜索字段，以搜索iTunes Store和Apple Books Store中的内容。您可以搜索各种内容; 包括书籍，电影，播客，音乐，音乐视频，有声读物和电视节目~~~~使用的接口由于是国外接口，并不稳定，可以尝试多刷新几次网页")]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"text-center"},[a("form",{attrs:{id:"search-form"}},[a("div",{staticClass:"form-group"},[a("input",{ref:"searchvalue",staticClass:"form-control",attrs:{type:"text",id:"search-text",placeholder:"输入歌曲名...搜索歌曲,作者~~例如：周杰伦"}})]),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.searchmusic}},[t._v("搜索")])])])]),a("div",{staticClass:"card-columns"},t._l(t.music,(function(e,s){return"song"==e.kind?a("div",{key:s,staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.artworkUrl100}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.trackName))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.artistName))])]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v(t._s(e.collectionName))]),a("li",{staticClass:"list-group-item"},[t._v(t._s(e.primaryGenreName)+"·"+t._s(e.releaseDate.split("-",1)))]),a("li",{staticClass:"list-group-item"},[t._v("\n            试听:"),a("br"),a("audio",{staticClass:"audiomusic",attrs:{src:e.previewUrl,controls:"controls"}})])]),a("div",{staticClass:"card-body"},[a("a",{staticClass:"card-link",attrs:{href:e.trackViewUrl,target:"_blank"}},[t._v("show in apple music")])])]):t._e()})),0)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-3"},[t._v("iTunes Search API")])])}],o=a("bc3a"),l=a.n(o),u={name:"HelloWorld",props:{},data:function(){return{searchvalue:null,music:null}},methods:{getHomeInfo:function(){l.a.get("https://itunes.apple.com/search?term=".concat(this.searchvalue,"&country=TW&limit=25")).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){t=t.data.results,this.music=t,0==this.music.length&&alert("找不到相关音乐,请输入正确信息")},searchmusic:function(t){t.preventDefault(),this.searchvalue=this.$refs.searchvalue.value,this.getHomeInfo()}},created:function(){},mounted:function(){},updated:function(){}},p=u,d=(a("26217"),a("2877")),f=Object(d["a"])(p,i,c,!1,null,"266f004e",null),m=f.exports,v={name:"app",components:{HelloWorld:m}},h=v,b=(a("68e6"),Object(d["a"])(h,r,n,!1,null,"76e19aaf",null)),_=b.exports,C=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[t._m(0),a("p",{staticClass:"lead"},[t._v("audio~~Search ~~API允许您在网站中放置搜索字段，搜索电影相关视频资料~~~~~~使用的接口由于是国外接口，并不稳定，可以尝试多刷新几次网页")]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"text-center"},[a("form",{attrs:{id:"search-form"}},[a("div",{staticClass:"form-group"},[a("input",{ref:"searchvalue",staticClass:"form-control",attrs:{type:"text",id:"search-text",placeholder:"输入电影名·关键字·相关字词搜索...例如：蜘蛛人"}})]),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.searchadiou}},[t._v("搜索")])])])]),t._l(t.music,(function(e,s){return a("div",{key:s,staticClass:"jumbotron"},[a("h2",[t._v(t._s(e.trackCensoredName)+"·类型："+t._s(e.primaryGenreName))]),a("div",{staticClass:"audio"},[a("video",{attrs:{width:"100%",controls:""}},[a("source",{attrs:{src:e.previewUrl,type:"video/x-m4v"}})]),a("div",{staticClass:"vjs-poster",staticStyle:{"background-image":"url(https://static.anime1.me/playerImg/8.jpg)",position:"absolute"},attrs:{tabindex:"-1","aria-disabled":"flase"},on:{click:function(e){return t.off(s)}}})]),a("p",{staticClass:"lead"},[t._v(t._s(e.longDescription))])])}))],2)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-3"},[t._v("iTunes Search API")])])}],k={name:"au",props:{},data:function(){return{searchvalue:null,music:null,oppo:!0}},methods:{getHomeInfo:function(){l.a.get("https://itunes.apple.com/search?term=".concat(this.searchvalue,"&country=TW&limit=26&media=movie")).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){t=t.data.results,this.music=t,0==this.music.length&&alert("找不到相关视频,请输入正确信息")},searchadiou:function(t){t.preventDefault(),this.searchvalue=this.$refs.searchvalue.value,this.getHomeInfo()},off:function(t){document.getElementsByClassName("vjs-poster")[t].style.position=""}}},x=k,w=(a("bcbf"),Object(d["a"])(x,g,y,!1,null,"e7ab8f4c",null)),j=w.exports;s["a"].use(C["a"]);var S=new C["a"]({mode:"history",base:"",routes:[{path:"/",redirect:"HelloWorld"},{path:"/HelloWorld",name:"HelloWorld",component:m},{path:"/au",name:"au",component:j}]});a("891c");s["a"].config.productionTip=!1,new s["a"]({router:S,render:function(t){return t(_)}}).$mount("#app")},"68e6":function(t,e,a){"use strict";var s=a("fd6e"),r=a.n(s);r.a},"7f6d":function(t,e,a){},"891c":function(t,e,a){},bcbf:function(t,e,a){"use strict";var s=a("7f6d"),r=a.n(s);r.a},fd6e:function(t,e,a){}});