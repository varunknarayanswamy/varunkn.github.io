(function(){"use strict";var e={2538:function(e,t,n){var a=n(5130),o=n(6768);function i(e,t,n,i,r,u){const c=(0,o.g2)("navigation"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c),(0,o.bF)(a.eB,null,{default:(0,o.k6)((()=>[(0,o.bF)(l)])),_:1})],64)}const r={class:"navigation-widget"};function u(e,t,n,a,i,u){const c=(0,o.g2)("bubble-button");return(0,o.uX)(),(0,o.CE)("nav",r,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.navigationBarObjects,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e},[(0,o.bF)(c,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var c=n(4232);const l={key:0,class:"button-text"},s={key:1,href:"resume.pdf"},d={key:1,class:"button-text"};function p(e,t,n,a,i,r){const u=(0,o.g2)("router-link");return n.isButton?((0,o.uX)(),(0,o.CE)("div",l,[r.isResume?((0,o.uX)(),(0,o.CE)("a",s,"Resume")):((0,o.uX)(),(0,o.Wv)(u,{key:0,to:n.navigationUrl},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(n.navigationName),1)])),_:1},8,["to"]))])):((0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("p",null,(0,c.v_)(n.navigationName),1)]))}var f={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},m=n(1241);const h=(0,m.A)(f,[["render",p]]);var b=h,v={components:{BubbleButton:b},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"HOME",url:"/"},{title:"PROJECTS",url:"/projects"},{title:"ABOUT ME",url:"/aboutMe"},{title:"RESUME",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const g=(0,m.A)(v,[["render",u]]);var y=g,w={name:"App",components:{navigation:y}};const k=(0,m.A)(w,[["render",i]]);var j=k,E=n(1387),C=n.p+"img/linkedin_photo-removebg.5d0762ff.png";const O={class:"home"};function S(e,t,n,i,r,u){return(0,o.uX)(),(0,o.CE)("div",O,[(0,o.bF)(a.eB,{name:"fade",appear:""},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.Lk)("div",{class:"pic_paragraph"},[(0,o.Lk)("div",null,[(0,o.Lk)("h1",null,"Welcome"),(0,o.Lk)("p",null,[(0,o.eW)("Hello, my name is Varun Narayanswamy. I am a "),(0,o.Lk)("em",null,"Software Developer"),(0,o.eW)(" and a "),(0,o.Lk)("em",null,"Designer")]),(0,o.Lk)("div",{class:"img_div"},[(0,o.Lk)("img",{src:C,alt:"Varun profile photo"})])])],-1)]))),_:1})])}var _={name:"HomeView",methods:{data(){return{show:!1}},mounted(){this.show=!0},social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}}};const L=(0,m.A)(_,[["render",S],["__scopeId","data-v-3cbf2ead"]]);var A=L;const N=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/projects",name:"projectView",component:()=>n.e(143).then(n.bind(n,3143))},{path:"/resume",name:"resumeView",component:()=>Promise.all([n.e(527),n.e(577)]).then(n.bind(n,4577))},{path:"/aboutMe",name:"aboutMeView",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/fractal",name:"individual-project/fractal",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/D3",name:"individual-project/D3",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/projectTightrope",name:"individual-project/projectTightrope",component:()=>n.e(966).then(n.bind(n,6302))},{path:"/dataVizPortal",name:"individual-project/DataViz",component:()=>Promise.all([n.e(527),n.e(556)]).then(n.bind(n,5662))},{path:"/seagate",name:"individual-project/seagate",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/mhcid",name:"individual-project/mhcid",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/yourAWizardSarah",name:"missLady",component:()=>n.e(665).then(n.bind(n,2665))}],B=(0,E.aE)({history:(0,E.LA)(""),routes:N});var x=B,T=n(782),F=(0,T.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),P=n(1079);(0,a.Ef)(j).use(F).use(x).use(P.aj).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(u=!1,i<r&&(r=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{143:"a073e8f6",527:"1b57d095",556:"347fcec3",577:"8805760f",594:"26b03d16",665:"d3229c27",930:"3fa53a70",966:"09ed8633"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{143:"5d7d5b4e",556:"13b66237",594:"ef541bf3",665:"a13495f3",930:"81028aed",966:"89ada20b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="varun-website-updated:";n.l=function(a,o,i,r){if(e[a])e[a].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=a),e[a]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",n.nc&&(r.nonce=n.nc);var u=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=u,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a=function(a){return new Promise((function(o,i){var r=n.miniCssF(a),u=n.p+r;if(t(r,u))return o();e(a,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={143:1,556:1,594:1,665:1,930:1,966:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={524:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=i);var r=n.p+n.u(t),u=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,o[1](u)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],u=a[1],c=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(a);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},a=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(2538)}));a=n.O(a)})();
//# sourceMappingURL=app.eab33ec1.js.map