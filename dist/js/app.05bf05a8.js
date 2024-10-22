(function(){"use strict";var e={9331:function(e,n,t){var a=t(5130),o=t(6768);function i(e,n,t,i,r,u){const c=(0,o.g2)("navigation"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c),(0,o.bF)(a.eB,null,{default:(0,o.k6)((()=>[(0,o.bF)(l)])),_:1})],64)}const r={class:"navigation-widget"};function u(e,n,t,a,i,u){const c=(0,o.g2)("bubble-button");return(0,o.uX)(),(0,o.CE)("nav",r,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.navigationBarObjects,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e},[(0,o.bF)(c,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var c=t(4232);const l={key:0,class:"button-text"},s={key:1,href:"resume.pdf"},d={key:1,class:"button-text"};function p(e,n,t,a,i,r){const u=(0,o.g2)("router-link");return t.isButton?((0,o.uX)(),(0,o.CE)("div",l,[r.isResume?((0,o.uX)(),(0,o.CE)("a",s,"Resume")):((0,o.uX)(),(0,o.Wv)(u,{key:0,to:t.navigationUrl},{default:(0,o.k6)((()=>[(0,o.eW)((0,c.v_)(t.navigationName),1)])),_:1},8,["to"]))])):((0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("p",null,(0,c.v_)(t.navigationName),1)]))}var f={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},m=t(1241);const h=(0,m.A)(f,[["render",p]]);var b=h,v={components:{BubbleButton:b},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"HOME",url:"/"},{title:"PROJECTS",url:"/projects"},{title:"ABOUT ME",url:"/aboutMe"},{title:"RESUME",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const g=(0,m.A)(v,[["render",u]]);var y=g,w={name:"App",components:{navigation:y}};const k=(0,m.A)(w,[["render",i]]);var j=k,E=t(1387),C=t.p+"img/linkedin_photo-removebg.5d0762ff.png";const O={class:"home"};function S(e,n,t,i,r,u){return(0,o.uX)(),(0,o.CE)("div",O,[(0,o.bF)(a.eB,{name:"fade",appear:""},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.Lk)("div",{class:"pic_paragraph"},[(0,o.Lk)("div",null,[(0,o.Lk)("h1",null,"Welcome"),(0,o.Lk)("p",null,[(0,o.eW)("Hello, my name is Varun Narayanswamy. I am a "),(0,o.Lk)("em",null,"Software Developer"),(0,o.eW)(" and a "),(0,o.Lk)("em",null,"Designer")]),(0,o.Lk)("div",{class:"img_div"},[(0,o.Lk)("img",{src:C,alt:"Varun profile photo"})])])],-1)]))),_:1})])}var _={name:"HomeView",methods:{data(){return{show:!1}},mounted(){this.show=!0},social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}}};const L=(0,m.A)(_,[["render",S],["__scopeId","data-v-3cbf2ead"]]);var A=L;const N=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,1594))},{path:"/projects",name:"projectView",component:()=>t.e(189).then(t.bind(t,2189))},{path:"/resume",name:"resumeView",component:()=>Promise.all([t.e(527),t.e(577)]).then(t.bind(t,4577))},{path:"/aboutMe",name:"aboutMeView",component:()=>t.e(594).then(t.bind(t,1594))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/fractal",name:"individual-project/fractal",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/D3",name:"individual-project/D3",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/projectTightrope",name:"individual-project/projectTightrope",component:()=>t.e(538).then(t.bind(t,9642))},{path:"/dataVizPortal",name:"individual-project/DataViz",component:()=>Promise.all([t.e(527),t.e(784)]).then(t.bind(t,449))},{path:"/seagate",name:"individual-project/seagate",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/mhcid",name:"individual-project/mhcid",component:()=>t.e(930).then(t.bind(t,6930))},{path:"/yourAWizardSarah",name:"missLady",component:()=>t.e(987).then(t.bind(t,987))},{path:"/socialGrocer",name:"socialGrocer",component:()=>t.e(563).then(t.bind(t,9068))}],B=(0,E.aE)({history:(0,E.LA)(""),routes:N});var x=B,T=t(782),F=(0,T.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),P=t(1079);(0,a.Ef)(j).use(F).use(x).use(P.aj).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,i){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(u=!1,i<r&&(r=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{189:"fc26043a",527:"1b57d095",538:"45b4449e",563:"136539de",577:"8805760f",594:"26b03d16",784:"7f867386",930:"3fa53a70",987:"9633cfff"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{189:"db496ccf",538:"0b19a027",563:"03f70914",594:"ef541bf3",784:"68b1a422",930:"81028aed",987:"29ddf42e"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="varun-website-updated:";t.l=function(a,o,i,r){if(e[a])e[a].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=a),e[a]=[o];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,a,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",t.nc&&(r.nonce=t.nc);var u=function(t){if(r.onerror=r.onload=null,"load"===t.type)o();else{var a=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode&&r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=u,r.href=n,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=t[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],i=o.getAttribute("data-href");if(i===e||i===n)return o}},a=function(a){return new Promise((function(o,i){var r=t.miniCssF(a),u=t.p+r;if(n(r,u))return o();e(a,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={189:1,538:1,563:1,594:1,784:1,930:1,987:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=a(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){t.b=document.baseURI||self.location.href;var e={524:0};t.f.j=function(n,a){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(t,a){o=e[n]=[t,a]}));a.push(o[2]=i);var r=t.p+t.u(n),u=new Error,c=function(a){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,o[1](u)}};t.l(r,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,i,r=a[0],u=a[1],c=a[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(a);l<r.length;l++)i=r[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},a=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(9331)}));a=t.O(a)})();
//# sourceMappingURL=app.05bf05a8.js.map