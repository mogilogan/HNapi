(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,n){e.exports=n(92)},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=n(36),u=n.n(o),i=n(48),s=n(34),m=n(49),p=n.n(m),f=n(130),v=n(129),E=n(126),d=n(123),b=n(127),h=n(133),y=n(132),g=n(128),F=function(e){var t=e.post,n=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{style:{color:"#D2691E"},variant:"h5",component:"div"},t.title),r.a.createElement(E.a,{style:{color:"#FFDAB9"},sx:{mb:1.5},color:"text.secondary"},"Author: ",t.author),r.a.createElement(E.a,{style:{color:"#FFDAB9"},sx:{mb:1.5},color:"text.primary"},"Points: ",t.points),r.a.createElement(E.a,{style:{color:"#FFC0CB"},variant:"h6",component:"div"},t.objectID)),r.a.createElement(b.a,null,r.a.createElement(h.a,null)));return t.title?r.a.createElement(y.a,{pt:3,sx:{minWidth:275}},r.a.createElement(g.a,{style:{backgroundColor:"#228B22"},variant:"outlined"},n)):null},j=n(4),w=Object(j.a)({root:{color:"#00008B"}})(E.a),x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),o=Object(s.a)(l,2),m=o[0],E=o[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),h=b[0],y=b[1];Object(a.useEffect)(function(){E(!0),function(){var e=Object(i.a)(u.a.mark(function e(){var t,n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://hn.algolia.com/api/v1/search?query=".concat(h),e.next=4,p.a.get(t);case 4:n=e.sent,a=n.data,r=a.hits,c(r),console.log(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,E(!1),e.finish(14);case 17:case"end":return e.stop()}},e,null,[[0,11,14,17]])}));return function(){return e.apply(this,arguments)}}()()},[h]);return r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(w,{variant:"h3"},"Hacker News"),r.a.createElement(f.a,{inputProps:{style:{fontSize:20}},style:{width:"60%"},InputLabelProps:{style:{fontSize:20,color:"#FFFAF0"}},type:"text",justify:"center",name:"title",variant:"outlined",label:"Search News",value:h.query,onChange:function(e){return function(e){e.preventDefault(),y(e.target.value)}(e)}})),r.a.createElement("div",{className:"Post-Container"},m?r.a.createElement("p",null,"Loading...."):n.map(function(e){return r.a.createElement(v.a,null,r.a.createElement(F,{post:e,key:e.objectID}))})))};var O=function(){return r.a.createElement(x,null)},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};n(91);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),C()}},[[63,1,2]]]);
//# sourceMappingURL=main.9e512dcf.chunk.js.map