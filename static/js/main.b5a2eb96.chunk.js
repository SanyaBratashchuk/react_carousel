(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(7),i=a.n(n),s=a(2),r=a(3),c=a(5),o=a(4),l=a(1),u=a.n(l),h=(a(12),a(13),a(0)),m=function(t){var e=t.name,a=t.defaultValue,n=t.min,i=t.max,s=t.step,r=t.onChange;return Object(h.jsxs)("label",{htmlFor:e,children:["Set ".concat(e),Object(h.jsx)("input",{id:e,type:"range",defaultValue:a,min:n,max:i,step:s,onChange:function(t){r(+t.target.value)}})]})},g=function(t){var e=t.changeDuration,a=t.changeFrameSize,n=t.changeItemWidth,i=t.changeStep;return Object(h.jsxs)("div",{className:"controller",children:[Object(h.jsx)(m,{name:"width",defaultValue:130,min:50,max:250,step:10,onChange:n}),Object(h.jsx)(m,{name:"frameSize",defaultValue:3,min:1,max:10,step:1,onChange:a}),Object(h.jsx)(m,{name:"step",defaultValue:3,min:1,max:10,step:1,onChange:i}),Object(h.jsx)(m,{name:"animation-duration",defaultValue:1e3,min:100,max:5e3,step:100,onChange:e})]})},p=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={itemWidth:130,frameSize:3,duration:1e3,translate:0,step:3},t.prev=function(){var e=t.state,a=e.translate,n=e.step,i=e.itemWidth;a+n*i>0?t.setState({translate:0}):t.setState((function(t){return{translate:t.translate+n*i}}))},t.next=function(){var e=t.state,a=e.translate,n=e.step,i=e.itemWidth,s=e.frameSize,r=-(i*t.props.images.length-s*i);a-n*i<r?t.setState({translate:r}):t.setState((function(t){return{translate:t.translate-n*i}}))},t.changeItemWidth=function(e){t.setState({itemWidth:e})},t.changeFrameSize=function(e){t.setState({frameSize:e})},t.changeDuration=function(e){t.setState({duration:e})},t.changeStep=function(e){t.setState({step:e})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props.images,e=this.state,a=e.itemWidth,n=e.frameSize,i=e.duration,s=e.translate;return Object(h.jsxs)("div",{className:"Carousel",children:[Object(h.jsxs)("div",{className:"Carousel__wrapper",style:{width:"".concat(a*n,"px")},children:[Object(h.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i,"ms")},children:t.map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)("img",{src:t,alt:"".concat(e),style:{width:"".concat(a,"px")}})},t)}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.prev,children:"prev"}),Object(h.jsx)("button",{type:"button",onClick:this.next,children:"next"})]})]}),Object(h.jsx)(g,{changeDuration:this.changeDuration,changeFrameSize:this.changeFrameSize,changeItemWidth:this.changeItemWidth,changeStep:this.changeStep})]})}}]),a}(u.a.Component),j=p,d=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state.images;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(h.jsx)(j,{images:t})]})}}]),a}(u.a.Component),b=d;i.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b5a2eb96.chunk.js.map