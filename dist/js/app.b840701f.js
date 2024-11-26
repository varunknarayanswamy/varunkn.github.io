(function(){"use strict";var e={9333:function(e,t,n){var a=n(5130),o=n(6768);function i(e,t,n,i,r,u){const l=(0,o.g2)("navigation"),c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),(0,o.bF)(a.eB,null,{default:(0,o.k6)((()=>[(0,o.bF)(c)])),_:1})],64)}const r={class:"navigation-widget"};function u(e,t,n,a,i,u){const l=(0,o.g2)("bubble-button");return(0,o.uX)(),(0,o.CE)("nav",r,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.navigationBarObjects,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e},[(0,o.bF)(l,{isButton:!0,navigationName:e.title,navigationUrl:e.url},null,8,["navigationName","navigationUrl"])])))),128))])}var l=n(4232);const c={key:0,class:"button-text"},s={key:1,href:"resume.pdf"},p={key:1,class:"button-text"};function d(e,t,n,a,i,r){const u=(0,o.g2)("router-link");return n.isButton?((0,o.uX)(),(0,o.CE)("div",c,[r.isResume?((0,o.uX)(),(0,o.CE)("a",s,"Resume")):((0,o.uX)(),(0,o.Wv)(u,{key:0,to:n.navigationUrl},{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)(n.navigationName),1)])),_:1},8,["to"]))])):((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("p",null,(0,l.v_)(n.navigationName),1)]))}var m={name:"bubble-button",props:{bubbleStyle:{type:Object},isButton:{type:Boolean,default:!1},navigationName:{type:String,default:""},navigationUrl:{type:String,default:""}},computed:{styleObj(){return this.bubbleStyle?{width:this.bubbleStyle.size,height:this.bubbleStyle.size,left:this.bubbleStyle.xValue,top:this.bubbleStyle.yValue,position:"absolute"}:{width:"100px",height:"100px"}},navLocation(){return"/"+this.navigationName},isResume(){return"Resume"==this.navigationName}}},h=n(1241);const f=(0,h.A)(m,[["render",d]]);var b=f,g={components:{BubbleButton:b},name:"navigation-bar",computed:{navigationBarObjects(){return[{title:"HOME",url:"/"},{title:"PROJECTS",url:"/projects"},{title:"ABOUT ME",url:"/aboutMe"},{title:"RESUME",url:"/resume"}]},navigationObjectStyle(){return{size:"100px"}}}};const v=(0,h.A)(g,[["render",u]]);var y=v,w={name:"App",components:{navigation:y}};const j=(0,h.A)(w,[["render",i]]);var k=j,_=n(1387),C=n.p+"img/linkedin_photo-removebg.5d0762ff.png";const S={class:"home"},E={class:"content"},O={class:"grid_3fr_1fr project_set"},M=["onClick"];function P(e,t,n,i,r,u){return(0,o.uX)(),(0,o.CE)("div",S,[(0,o.bF)(a.eB,{name:"fade",appear:""},{default:(0,o.k6)((()=>[(0,o.Lk)("div",E,[t[0]||(t[0]=(0,o.Lk)("div",{class:"pic_paragraph"},[(0,o.Lk)("div",null,[(0,o.Lk)("h1",null,"Welcome"),(0,o.Lk)("p",null,[(0,o.eW)("Hello, my name is Varun Narayanswamy. I am a "),(0,o.Lk)("em",null,"Software Developer"),(0,o.eW)(" and a "),(0,o.Lk)("em",null,"Designer")]),(0,o.Lk)("div",{class:"img_div"},[(0,o.Lk)("img",{src:C,alt:"Varun profile photo"})])])],-1)),(0,o.Lk)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.projectArray,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"project-object-set",key:e.getProjectName()},[((0,o.uX)(),(0,o.CE)("div",{class:(0,l.C4)("home-project-obj "+e.getProjectName()),key:e.getProjectName(),onClick:t=>u.navigateToPage(e.getProjectName())},null,10,M))])))),128))])])])),_:1})])}n(4114);var A=n(8607),N={name:"HomeView",data(){return{show:!1,project:[]}},mounted(){console.log(A.d_),this.show=!0},methods:{navigateToPage:function(e){let t="individual-project/"+e;this.$router.push({name:t})},social_media_click:function(e){"github"==e.target.id?window.location.assign("https://github.com/varunnar"):"linkedin"==e.target.id?window.location.assign("https://www.linkedin.com/in/varun-narayanswamy"):"instagram"==e.target.id?window.location.assign("https://www.instagram.com/varun.narayanswamy/?hl=en"):console.log("invalid url")}},computed:{projectArray(){let e=[A.d_,A.kV,A.MS];return e}}};const T=(0,h.A)(N,[["render",P],["__scopeId","data-v-db5beb20"]]);var L=T;const V=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/projects",name:"projectView",component:()=>n.e(45).then(n.bind(n,4045))},{path:"/resume",name:"resumeView",component:()=>Promise.all([n.e(527),n.e(577)]).then(n.bind(n,4577))},{path:"/aboutMe",name:"aboutMeView",component:()=>n.e(594).then(n.bind(n,1594))},{path:"/storyglow",name:"individual-project/storyglow",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/munchmaps",name:"individual-project/munchmaps",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/fractal",name:"individual-project/fractal",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/D3",name:"individual-project/D3",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/alpaca",name:"individual-project/alpaca",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/heartbeatChecker",name:"individual-project/heartbeatChecker",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/projectTightrope",name:"individual-project/projectTightrope",component:()=>Promise.all([n.e(694),n.e(491)]).then(n.bind(n,3379))},{path:"/dataVizPortal",name:"individual-project/DataViz",component:()=>Promise.all([n.e(527),n.e(559)]).then(n.bind(n,4459))},{path:"/seagate",name:"individual-project/seagate",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/mhcid",name:"individual-project/mhcid",component:()=>n.e(930).then(n.bind(n,6930))},{path:"/yourAWizardSarah",name:"missLady",component:()=>Promise.all([n.e(694),n.e(34)]).then(n.bind(n,680))},{path:"/socialGrocer",name:"individual-project/socialGrocer",component:()=>Promise.all([n.e(694),n.e(190)]).then(n.bind(n,4221))}],z=(0,_.aE)({history:(0,_.LA)(""),routes:V});var D=z,B=n(782),x=(0,B.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),H=n(1079);(0,a.Ef)(k).use(x).use(D).use(H.aj).mount("#app")},8607:function(e,t,n){n.d(t,{DW:function(){return r},MS:function(){return m},Q_:function(){return s},ST:function(){return l},d_:function(){return p},h9:function(){return u},kV:function(){return d},pT:function(){return i},r8:function(){return c}});class a{constructor(e,t,n){this.name=e,this.title=t,this.tags=n}getProjectName(){return this.name}getProjectTitle(){return this.title}getProjectImg(){return this.img_url}getTags(){return this.tags}checkSpecificTag(e){for(let t=0;t<this.tags.length;t++)if(this.tags[t]==e)return!0;return!1}}const o={mobile_app:"Mobile App",storytelling:"Storytelling",iOS:"iOS",prototype:"Prototype",health:"Health",data_visualization:"Data Visualization",map:"Map",vegalite:"Vegalite",music:"Music",math:"Math",game:"Game",hardware:"Hardware","MHCI+D":"MHCI+D",case_study:"Cast Study"},i=new a("storyglow","Storyglow",[o.mobile_app,o.storytelling,o.iOS,o.prototype]),r=new a("munchmaps","MunchMaps",[o.mobile_app,o.iOS,o.prototype]),u=new a("heartbeatChecker","HeartbeatChecker Mobile App",[o.mobile_app,o.health,o.iOS,o.prototype]),l=new a("D3","Map Visualization",[o.data_visualization,o.map,o.vegalite]),c=new a("alpaca","AlpacaML",[o.mobile_app,o.health,o.iOS]),s=new a("fractal","Music Visualization",[o.data_visualization,o.music,o.math]),p=new a("projectTightrope","Project Tightrope",[o.game,o.prototype,o.hardware,o["MHCI+D"]]),d=new a("socialGrocer","Social Grocer",[o.health,o.prototype,o.data_visualization,o["MHCI+D"]]),m=new a("DataViz","Health Data Visualization",[o.health,o.data_visualization,o["MHCI+D"],o.data_visualization])}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(u=!1,i<r&&(r=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{34:"69823eb7",45:"5e373768",190:"23ebf2c7",491:"36145e24",527:"1b57d095",559:"c3207a51",577:"8805760f",594:"26b03d16",694:"e07f20fa",930:"3fa53a70"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{34:"6c2be7fe",45:"ffe11ce5",190:"2ce0aa09",491:"3dd7255f",559:"8d28661c",594:"ef541bf3",930:"81028aed"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="varun-website-updated:";n.l=function(a,o,i,r){if(e[a])e[a].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var p=c[s];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+i){u=p;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=a),e[a]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",n.nc&&(r.nonce=n.nc);var u=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&n.type,u=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+u+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,r.parentNode&&r.parentNode.removeChild(r),i(l)}};return r.onerror=r.onload=u,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a=function(a){return new Promise((function(o,i){var r=n.miniCssF(a),u=n.p+r;if(t(r,u))return o();e(a,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={34:1,45:1,190:1,491:1,559:1,594:1,930:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){n.b=document.baseURI||self.location.href;var e={524:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=i);var r=n.p+n.u(t),u=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,o[1](u)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],u=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(a);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},a=self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(9333)}));a=n.O(a)})();
//# sourceMappingURL=app.b840701f.js.map