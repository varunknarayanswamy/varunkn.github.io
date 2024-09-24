(function(){"use strict";var e={3226:function(e,t,n){var o=n(5130),a=n(6768);function r(e,t,n,r,i,u){const c=(0,a.g2)("navigation"),l=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(c),(0,a.bF)(o.eB,null,{default:(0,a.k6)((()=>[(0,a.bF)(l)])),_:1})],64)}const i={class:"navigation-widget"};function u(e,t,n,o,r,u){const c=(0,a.g2)("bubble-button");return(0,a.uX)(),(0,a.CE)("nav",i,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(u.navigationBarObjects,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e},[(0,a.bF)(c,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var c=n(4232);const l={key:0,class:"button-text"},s={key:1,href:"resume.pdf"};function d(e,t,n,o,r,i){const u=(0,a.g2)("router-link");return n.isButton?((0,a.uX)(),(0,a.CE)("div",l,[i.isResume?((0,a.uX)(),(0,a.CE)("a",s,"Resume")):((0,a.uX)(),(0,a.Wv)(u,{key:0,to:n.navigationUrl},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(n.navigationName),1)])),_:1},8,["to"]))])):(0,a.Q3)("",!0)}var p={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},f=n(1241);const m=(0,f.A)(p,[["render",d]]);var h=m,b={components:{BubbleButton:h},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"HOME",url:"/"},{title:"PROJECTS",url:"/projects"},{title:"ABOUT ME",url:"/aboutMe"},{title:"RESUME",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const v=(0,f.A)(b,[["render",u]]);var g=v,y={name:"App",components:{navigation:g}};const w=(0,f.A)(y,[["render",r]]);var k=w,j=n(1387),E=n.p+"img/linkedin_photo-removebg.5d0762ff.png";const C={class:"home"};function O(e,t,n,r,i,u){return(0,a.uX)(),(0,a.CE)("div",C,[(0,a.bF)(o.eB,{name:"fade",appear:""},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("div",{class:"pic_paragraph"},[(0,a.Lk)("div",null,[(0,a.Lk)("h1",null,"Welcome"),(0,a.Lk)("p",null,[(0,a.eW)("Hello, my name is Varun Narayanswamy. I am a "),(0,a.Lk)("em",null,"Software Developer"),(0,a.eW)(" and a "),(0,a.Lk)("em",null,"Designer")]),(0,a.Lk)("div",{class:"img_div"},[(0,a.Lk)("img",{src:E,alt:"Varun profile photo"})])])],-1)]))),_:1})])}var S={name:"HomeView",methods:{data(){return{show:!1}},mounted(){this.show=!0},social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}}};const _=(0,f.A)(S,[["render",O],["__scopeId","data-v-3cbf2ead"]]);var A=_;const L=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/projects",name:"projectView",component:()=>n.e(63).then(n.bind(n,3063))},{path:"/resume",name:"resumeView",component:()=>n.e(799).then(n.bind(n,8799))},{path:"/aboutMe",name:"aboutMeView",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/fractal",name:"individual-project/fractal",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/D3",name:"individual-project/D3",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/projectTightrope",name:"individual-project/projectTightrope",component:()=>n.e(910).then(n.bind(n,1158))},{path:"/seagate",name:"individual-project/seagate",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/mhcid",name:"individual-project/mhcid",component:()=>n.e(930).then(n.bind(n,6930))}],N=(0,j.aE)({history:(0,j.LA)(""),routes:L});var B=N,T=n(782),x=(0,T.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),F=n(1079);(0,o.Ef)(k).use(x).use(B).use(F.aj).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],r=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,r<i&&(i=r));if(u){e.splice(s--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{63:"31d7e355",594:"26b03d16",799:"dfc32f1f",910:"3083efce",930:"3fa53a70"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{63:"aff7d336",594:"ef541bf3",910:"6f9de9c7",930:"81028aed"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="varun-website-updated:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var u,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[a];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,a,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var o=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=u,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return a();e(o,u,null,a,r)}))},a={524:0};n.f.miniCss=function(e,t){var n={63:1,594:1,910:1,930:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var s=c(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3226)}));o=n.O(o)})();
//# sourceMappingURL=app.aced2951.js.map