(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(16),r=n.n(i),s=(n(23),n(7)),o=n.n(s),l=n(17),p=n(5),d=(n(25),n(18)),j=n.n(d),u=n(0);var b=function(){var e=Object(a.useState)(void 0),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(void 0),r=Object(p.a)(i,2),s=r[0],d=r[1],b=Object(a.useState)(void 0),h=Object(p.a)(b,2),O=h[0],m=h[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h3",{className:"app-header",children:"A Novel Method for Handwritten Digit Recoginition"}),Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)("div",{className:"app-left-container app-inner-container",children:Object(u.jsxs)("div",{className:"app-image-container",children:[!s&&Object(u.jsx)("h3",{className:"app-image-container-text",children:Object(u.jsxs)("label",{style:{cursor:"pointer"},children:[Object(u.jsx)("input",{style:{display:"none"},onChange:function(e){c(void 0),m(e.target.files[0]),d(URL.createObjectURL(e.target.files[0]))},type:"file",accept:"image/*"}),"Upload Image Here ",Object(u.jsx)("i",{className:"fas fa-cloud-upload-alt"})]})}),s&&Object(u.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"white"},children:Object(u.jsx)("img",{style:{width:"100%",height:"100%"},src:s,alt:"Hand Written Digit"})}),Object(u.jsx)("button",{className:"app-submit-button",onClick:function(){var e=O,t=new FormData;t.append("file",e);var n=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("http://127.0.0.1:5000/predict",t).then((function(e){c(e.data.number)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()},children:"Submit"})]})}),Object(u.jsx)("div",{className:"app-right-container app-inner-container",children:Object(u.jsx)("div",{className:"app-result-container",children:n})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c7424e5d.chunk.js.map