(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(16),a(6)),m=a(1);var i=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSave(l),c("")}}," ",r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Save the word"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter a word",value:l,onChange:function(e){c(e.target.value)}})),r.a.createElement("ul",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"))};a(17);var u=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),s=u[0],p=u[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),E=b[0],f=b[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Dictionary Application"),r.a.createElement("p",{className:"lead"},"This project has been built using React and Bootstrap."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement(i,{onSave:function(e){l([].concat(Object(o.a)(a),[e]))}})," ",r.a.createElement("hr",{className:"my-4"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.includes(s)?f("The word is in the dictionary!"):f("The word is not in the dictionary.")}}," ",r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput2"}," ","Verify if the word is in the dictionary"),r.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput2",placeholder:"Enter a word",value:s,onChange:function(e){p(e.target.value)}})),r.a.createElement("ul",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Verify")),E&&r.a.createElement("div",{className:"alert ".concat(a.includes(s)?"alert-success":"alert-danger"," mt-3"),role:"alert"},E)))},s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),s()},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.ccfabeba.chunk.js.map