"use strict";(self["webpackChunkvarun_website_updated"]=self["webpackChunkvarun_website_updated"]||[]).push([[189],{6059:function(e,t){t.A='Storyglow is a mobile application that allows users to build interactive scenes using color changing lightbulbs and free sound effects. This application gives users the ability to transform their environment into that of the fantasy world they’re immersed in.*\n\nStorytelling is an important part of any individuals childhood. It allows for dedecated family time, helps children to get more used to and interested reading and helps spark imagination and creativity at an early age. With this in mind, this projects goal was to make storytelling more immersive and interactive for children, furthering the benefits of storytelling in an easily accessible way.*\n\nStoryglow users can make a grouping of "scenes" which are swipeable pages on the screen. On each one, they can set a color for the color-changing lightbulbs connected and add 6 sound effects to use in that scene. These sound effects can be triggered with a button click, and can be used by the child or the parent as the other reads. Users can swipe from scene to scene, allowing for easy transitions as the story progresses.*\n\nFRAME #### https://www.youtube-nocookie.com/embed/LPCXZf6-A-E #### 800px #### 450px * \n\nA large portion of the project was also spent developing a working prototype which we used to test with a range of potential users. With a several paper prototypes and two virtual prototypes predating this one, we were able to proceed into development with a clear understanding of what our users wanted and how our app should flow. *\n\nFRAME #### https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F67i74udcC3SRBBmN0oQvr0%2FStoryGlowGeneralUI%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2" #### 800px #### 450px * \n\nWhile storyglow\'s initial goal was to improve upon storytelling, this application can be used in a multitude of other environments such as for building sets for plays and musicals or playing dungeons and dragons with friends.*\n\nLINK ####  Github Link #### https://github.com/varunnar/StoryGlow *\n\nLINK #### Progress Blog Link #### https://jennifermahtam.wordpress.com/category/capstone/\n'},2189:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=a(6768),o=a(5130),n=a(4232);const r={class:"projects_page"},s={class:"projects"},l={class:"projects-obj"},c=["objectinfo","onClick"],p=["textContent","onClick"],h={class:"tags_object"},d=["onClick","textContent"];function u(e,t,a,u,g,m){return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",null,[t[1]||(t[1]=(0,i.Lk)("h1",null,"PORTFOLIO",-1)),(0,i.bF)(o.eB,{name:"fade",appear:""},{default:(0,i.k6)((()=>[(0,i.Lk)("div",null,[t[0]||(t[0]=(0,i.Lk)("div",{class:"header_title"},[(0,i.Lk)("div",null,"Projects")],-1)),(0,i.Lk)("div",s,[(0,i.Lk)("div",l,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(m.objects,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"project-object-set",key:e.getProjectName()},[((0,i.uX)(),(0,i.CE)("div",{class:(0,n.C4)("project-obj "+e.getProjectName()),key:e.getProjectName(),objectinfo:e.getProjectName(),onClick:t=>m.navigateToPage(e.getProjectName())},null,10,c)),(0,i.Lk)("div",{class:"text_info",textContent:(0,n.v_)(e.getProjectTitle()),onClick:t=>m.navigateToPage(e.getProjectName())},null,8,p),(0,i.Lk)("div",h,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.getTags(),(t=>((0,i.uX)(),(0,i.CE)("div",{class:(0,n.C4)(["tags",{active:m.isSelected(t)}]),onClick:e=>m.addTag(t),key:e+": "+t,textContent:(0,n.v_)(t)},null,10,d)))),128))])])))),128))])])])])),_:1})])])}a(4114);var g=a(6059);class m{constructor(e,t,a){this.name=e,this.title=t,this.tags=a}getProjectName(){return this.name}getProjectTitle(){return this.title}getProjectImg(){return this.img_url}getTags(){return this.tags}checkSpecificTag(e){for(let t=0;t<this.tags.length;t++)if(this.tags[t]==e)return!0;return!1}}const w={mobile_app:"Mobile App",storytelling:"Storytelling",iOS:"iOS",prototype:"Prototype",health:"Health",data_visualization:"Data Visualization",map:"Map",vegalite:"Vegalite",music:"Music",math:"Math",game:"Game",hardware:"Hardware","MHCI+D":"MHCI+D"},f=new m("storyglow","Storyglow",[w.mobile_app,w.storytelling,w.iOS,w.prototype]),y=new m("munchmaps","MunchMaps",[w.mobile_app,w.iOS,w.prototype]),v=new m("heartbeatChecker","HeartbeatChecker Mobile App",[w.mobile_app,w.health,w.iOS,w.prototype]),b=new m("D3","Map Visualization",[w.data_visualization,w.map,w.vegalite]),k=new m("alpaca","AlpacaML",[w.mobile_app,w.health,w.iOS]),C=new m("fractal","Music Visualization",[w.data_visualization,w.music,w.math]),j=new m("projectTightrope","Project Tightrope",[w.game,w.prototype,w.hardware,w["MHCI+D"]]),_=new m("capstoneMHCID","MHCID Capstone",[w.health,w.prototype,w["MHCI+D"]]),M=new m("DataViz","Health Data Visualization",[w.health,w.data_visualization,w["MHCI+D"],w.data_visualization]);var P={name:"projectView",data(){return{storyglowText:g.A,filter_array:[]}},computed:{objects(){let e=[j,M,f,y,v,b,k,C,_];return 0==this.filter_array.length?e:e.filter((e=>e.tags.some((e=>this.filter_array.includes(e)))))},experience(){return["seagate","mhcid"]}},methods:{navigateToPage:function(e){let t="individual-project/"+e;this.$router.push({name:t})},addTag:function(e){let t=this.filter_array.indexOf(e);-1!=t?this.filter_array.splice(t,1):this.filter_array.push(e)},isSelected(e){return console.log("hello"),console.log(e),this.filter_array.includes(e)}}},S=a(1241);const L=(0,S.A)(P,[["render",u]]);var T=L}}]);
//# sourceMappingURL=189.fc26043a.js.map