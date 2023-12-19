(function(){"use strict";var e={2481:function(e,n,t){var i=t(9242),a=t(3396);function o(e,n,t,i,o,r){const u=(0,a.up)("navigation"),s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a.Wm)(s)],64)}const r={class:"navigation-widget"};function u(e,n,t,i,o,u){const s=(0,a.up)("bubble-button");return(0,a.wg)(),(0,a.iD)("nav",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.navigationBarObjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a.Wm)(s,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var s=t(7139);const c={key:0,class:"button-text"},l={key:1,href:"resume.pdf"};function d(e,n,t,i,o,r){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",{class:"bubble-icon",style:(0,s.j5)(r.styleObj)},[t.isButton?((0,a.wg)(),(0,a.iD)("div",c,[r.isResume?((0,a.wg)(),(0,a.iD)("a",l,"Resume")):((0,a.wg)(),(0,a.j4)(u,{key:0,to:t.navigationUrl},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.navigationName),1)])),_:1},8,["to"]))])):(0,a.kq)("",!0)],4)}var m={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},p=t(89);const f=(0,p.Z)(m,[["render",d]]);var h=f,b={components:{BubbleButton:h},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"Home",url:"/"},{title:"Projects",url:"/projects"},{title:"Resume",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const v=(0,p.Z)(b,[["render",u]]);var g=v,y={name:"App",components:{navigation:g}};const w=(0,p.Z)(y,[["render",o]]);var _=w,k=t(678);const j=e=>((0,a.dD)("data-v-2080ba08"),e=e(),(0,a.Cn)(),e),C={class:"home"},O={class:"pic_paragraph"},S={class:"paragraph"},N=j((()=>(0,a._)("h1",null,"Who is Varun Narayanswamy?",-1))),D=j((()=>(0,a._)("p",{class:"general_info"}," Hi there! My name is Varun Narayanswamy. I am an alumnus of the University of Colorado where I got my bachelors in Creative Technology and Design. I am born and raised in Boulder, Colorado and love spending time in the mountains, hanging with friends, playing video games and making bad jokes. ",-1))),B={class:"social_media_icons"},E=j((()=>(0,a._)("div",{class:"profile_picture"},null,-1)));function T(e,n,t,i,o,r){return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",O,[(0,a._)("div",S,[N,D,(0,a._)("div",B,[(0,a._)("button",{class:"sm github",id:"github",onClick:n[0]||(n[0]=(...e)=>r.social_media_click&&r.social_media_click(...e))}),(0,a._)("button",{class:"sm linkedin",id:"linkedin",onClick:n[1]||(n[1]=(...e)=>r.social_media_click&&r.social_media_click(...e))}),(0,a._)("button",{class:"sm instagram",id:"instagram",onClick:n[2]||(n[2]=(...e)=>r.social_media_click&&r.social_media_click(...e))})])]),E])])}var x={name:"HomeView",methods:{social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}}};const A=(0,p.Z)(x,[["render",T],["__scopeId","data-v-2080ba08"]]);var P=A;const U=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))},{path:"/projects",name:"projectView",component:()=>t.e(853).then(t.bind(t,9853))},{path:"/resume",name:"resumeView",component:()=>t.e(14).then(t.bind(t,14))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/fractal",name:"individual-project/fractal",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/D3",name:"individual-project/D3",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>t.e(374).then(t.bind(t,9374))},{path:"/seagate",name:"individual-project/seagate",component:()=>t.e(374).then(t.bind(t,9374))}],V=(0,k.p7)({history:(0,k.PO)(""),routes:U});var H=V,L=t(65),I=(0,L.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(_).use(I).use(H).mount("#app")}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,a,o){if(!i){var r=1/0;for(l=0;l<e.length;l++){i=e[l][0],a=e[l][1],o=e[l][2];for(var u=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(u=!1,o<r&&(r=o));if(u){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,i){return t.f[i](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{14:"93d7d9fa",374:"1f190a17",443:"d35c8530",853:"42f6f50c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{374:"626d1c21",853:"2bed9e7a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="varun-website-updated:";t.l=function(i,a,o,r){if(e[i])e[i].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==n+o){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+o),u.src=i),e[i]=[a];var m=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var a=e[i];if(delete e[i],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)t();else{var r=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=o,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var a=t[i],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){a=r[i],o=a.getAttribute("data-href");if(o===e||o===n)return a}},i=function(i){return new Promise((function(a,o){var r=t.miniCssF(i),u=t.p+r;if(n(r,u))return a();e(i,u,a,o)}))},a={143:0};t.f.miniCss=function(e,n){var t={374:1,853:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=i(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,i){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(t,i){a=e[n]=[t,i]}));i.push(a[2]=o);var r=t.p+t.u(n),u=new Error,s=function(i){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,a[1](u)}};t.l(r,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,i){var a,o,r=i[0],u=i[1],s=i[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(s)var l=s(t)}for(n&&n(i);c<r.length;c++)o=r[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},i=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(2481)}));i=t.O(i)})();
//# sourceMappingURL=app.7f80f734.js.map