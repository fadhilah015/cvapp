(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(2),r=a(4),c=a(3),i=a(5),o=a(0),u=a.n(o),m=a(7),s=a.n(m),h=(a(14),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("nav",{className:"logo"},u.a.createElement("h1",null,this.props.LogoTitle),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("a",null,"\u0645\u0644\u0626 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a  ")),u.a.createElement("li",null,u.a.createElement("a",null,"\u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641\u0627\u062a ")),u.a.createElement("li",null,u.a.createElement("a",null,"\u0639\u0646\u0627 "))))}}]),t}(u.a.Component)),E=(a(15),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"about"},u.a.createElement("h1",null," !\u0645\u0646 \u0646\u062d\u0646  "),u.a.createElement("p",null,u.a.createElement("h2",null," \u0635\u0645\u0645\u0646\u0627 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0646\u062a\u062d\u062f\u0649 \u0623\u0646\u0641\u0633\u0646\u0627 \u0623\u0648\u0644\u0627\u064b, \u0648\u0644\u0625\u0643\u062a\u0633\u0627\u0628 \u0645\u0647\u0627\u0631\u0627\u062a \u062c\u062f\u064a\u062f\u0629 \u0648 \u062a\u0639\u0644\u0645 \u062a\u0642\u0646\u064a\u0627\u062a \u062c\u062f\u064a\u062f\u0629"),u.a.createElement("br",null),u.a.createElement("h3",null," \u0627\u0644\u0628\u062f\u0627\u064a\u0627\u062a \u062f\u0627\u0626\u0645\u0627\u064b \u0628\u0633\u064a\u0637\u0629 ,\u0648 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0647\u0648 \u0628\u062f\u0627\u064a\u062a\u0646\u0627 \u0646\u062d\u0648 \u0637\u0648\u062d \u064a\u0644\u0627\u0645\u0633 \u0627\u0644\u0633\u062d\u0627\u0628 "),u.a.createElement("label",null,"  \u0642\u0627\u0626\u062f \u0627\u0644\u0641\u0631\u064a\u0642 : \u0641\u0636\u064a\u0644\u0647 \u0627\u0644\u0641\u0627\u0636\u0644  "),u.a.createElement("label",null,"\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064a\u0642 : \u0645\u0646\u0627\u0644 \u0627\u0644\u0631\u0627\u0634\u062f \u0648 \u0646\u0648\u0631\u0647 \u0627\u0644\u0647\u0646\u062f\u064a")))}}]),t}(u.a.Component)),b=(a(16),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={file:null},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"handleFile",value:function(e){var t=e.target.files[0];this.setState({file:t})}},{key:"hendelUpload",value:function(e){console.log(this.state,"the state...........")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"Uploade"},u.a.createElement("h1",null,"\u0623\u0631\u0641\u0639 \u0633\u064a\u0631\u062a\u0643 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 "),u.a.createElement("img",{src:"upload.png",width:"100"}),u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("div",null,u.a.createElement("h4",null," :\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 "),u.a.createElement("input",{type:"file",name:"file",onChange:function(t){return e.handleFile(t)}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("button",{className:"button",type:"button",onClick:function(t){return e.hendelUpload(t)}},"\u0631\u0641\u0639")))))}}]),t}(u.a.Component)),d=(a(17),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"foter"},u.a.createElement("p",null," ",u.a.createElement("h2",null,"    Fortydays \u062a\u062d\u062a \u0625\u0634\u0631\u0627\u0641  \u0645\u0624\u0633\u0651\u0633\u0629  ")),u.a.createElement("p",null,u.a.createElement("h2",null," * n * \u0635\u0645\u0645 \u0628\u0648\u0627\u0633\u0637\u0629 \u0641\u0631\u064a\u0642 ")))}}]),t}(u.a.Component)),p=(a(18),function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).handlechange=function(e){console.log(e.target.value)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"form"},u.a.createElement("h3",null," \u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629 "),u.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},u.a.createElement("div",{className:"FiristName"},u.a.createElement("label",{htmlFor:"FiristName"},"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),u.a.createElement("input",{type:"text",className:"",placeholder:"First Name",name:"firest Name",noValidate:!0,onChange:this.handlechange}),u.a.createElement("br",null)),u.a.createElement("div",{className:"lastName"},u.a.createElement("label",{htmlFor:"LaststName"},"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u062e\u064a\u0631 "),u.a.createElement("input",{type:"text",className:"",placeholder:"Last Name",name:"lastName",noValidate:!0,onChange:this.handlechange}),u.a.createElement("br",null)),u.a.createElement("div",{className:"university"},u.a.createElement("label",{htmlFor:"university"},"\u0627\u0644\u062c\u0627\u0645\u0639\u0629"),u.a.createElement("input",{type:"text",className:"",placeholder:"University",name:"university",noValidate:!0,onChange:this.handlechange}),u.a.createElement("br",null)),u.a.createElement("div",{className:"major"},u.a.createElement("label",{htmlFor:"university"},"\u0627\u0644\u062a\u062e\u0635\u0635 "),u.a.createElement("input",{type:"text",className:"",placeholder:"Major",name:"major",noValidate:!0,onchange:this.handlechange}),u.a.createElement("br",null)),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("button",{className:"click ",type:"submit"},"\u0639\u0631\u0636 ")))))}}]),t}(u.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(h,{LogoTitle:"\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629"}),u.a.createElement(p,null),u.a.createElement(b,null),u.a.createElement(E,null),u.a.createElement(d,null))}}]),t}(u.a.Component);s.a.render(u.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7766eef1.chunk.js.map