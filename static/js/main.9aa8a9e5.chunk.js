(this["webpackJsonpreact-terminal"]=this["webpackJsonpreact-terminal"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=(a(17),a(1)),i=a(2),l=a(4),m=a(3),u=a(5),p=(a(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",null,this.props.children))}}]),t}(n.Component)),d=a(32),v=function(e){return r.a.createElement(d.a,{in:e.operator.added,timeout:600,unmountOnExit:!0},(function(t){return r.a.createElement("div",{className:"operator-list__item ".concat(t),onClick:function(){return e.onSelect(e.operator)}},r.a.createElement("img",{className:"operator-list__image",alt:e.name,src:window.location.origin+e.src}))}))},f=(a(22),function(e){return r.a.createElement("ul",{className:"operator-list"},e.operator.map((function(t,a){return r.a.createElement(v,{key:a,operator:t,name:t.name,src:t.img,onSelect:e.onSelectOp})})))}),h=function(e){var t=["step-list__item"];return!0===e.active&&t.push("step-active"),r.a.createElement("div",{className:t.join(" ")},e.step)},g=(a(23),function(e){return r.a.createElement("ul",{className:"step-list"},e.steps.map((function(e,t){return r.a.createElement(h,{key:t,active:e.active,step:e.step})})))}),E=a(6),b=(a(24),a(25),function(e){return r.a.createElement("div",{className:"btn-exit",onClick:e.return},r.a.createElement("span",null))}),j=a(10),C=a.n(j),O=function(e){var t=[];return!1===e.valid&&t.push("err"),r.a.createElement("div",{className:"input-wrap"},r.a.createElement(C.a,{className:t.join(" "),type:e.type,placeholder:e.placeholder,mask:e.mask,maskChar:e.mskChar,onChange:function(t){return e.onChangs(t,e.controlName)},value:e.value}),!1===e.valid?r.a.createElement("span",{className:"err-message"},e.errMsg):null)},k=(a(27),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={timer:{start:4,end:0,tick:1}},a.startTimer=function(){var e=Object(E.a)({},a.state.timer),t=setInterval((function(){e.start-=1,e.start===e.end&&(e.start=5,clearInterval(t)),a.setState({timer:e})}),1e3*a.state.timer.tick)},a.closeWindow=function(){setTimeout((function(){a.props.returnMain()}),1e3*a.state.timer.start)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!0===this.props.steps[2].active?r.a.createElement(r.a.Fragment,null,!0===this.props.status.status?this.closeWindow():null,r.a.createElement("div",{className:"status-wrapper"},r.a.createElement("p",{className:"status-message"},this.props.status.msg),!0===this.props.status.status?r.a.createElement(r.a.Fragment,null,this.startTimer(),r.a.createElement("p",{className:"status-timer"},"\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0447\u0435\u0440\u0435\u0437",r.a.createElement("br",null),this.state.timer.start)):r.a.createElement("button",{className:"status-button",onClick:this.props.secondStep},"\u041a \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0443"))):null)}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sendStatus:[{status:!0,msg:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e"},{status:!1,msg:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"}],formControls:{phone:{value:"",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",type:"tel",mask:"+8(999)-999-99-99",maskChar:"_",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"},cost:{value:"",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u0442 1 \u0434\u043e 1000 \u0440\u0443\u0431\u043b\u0435\u0439",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u0442 1 \u0434\u043e 1000 \u0440\u0443\u0431\u043b\u0435\u0439",mask:"9999",maskChar:null}}},a.clearInputs=function(){var e=Object(E.a)({},a.state.formControls);Object.keys(e).map((function(t){e[t].value=""})),a.setState({formControls:e})},a.submitHandler=function(e){e.preventDefault();var t=Object(E.a)({},a.state.formControls);Object.keys(t).map((function(e){t[e]===a.state.formControls.phone?a.validatePhone(t[e],11):a.validateCost(t[e],1e3)})),!0===t.phone.validate&&!0===t.cost.validate&&(a.props.success(),a.clearInputs()),a.setState({formControls:t})},a.onChange=function(e,t){var n=Object(E.a)({},a.state.formControls),r=Object(E.a)({},n[t]);r.value=e.target.value,n[t]=r,a.setState({formControls:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getRandomFloat",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}},{key:"validatePhone",value:function(e,t){e.value.split(/[^0-9,]/).join("").trim().length===t?e.validate=!0:e.validate=!1}},{key:"validateCost",value:function(e,t){var a=e.value.split(/[^0-9,]/).join("").trim();e.validate=a>=1&&a<=t}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,a){var n=e.state.formControls[t];return r.a.createElement(O,{key:t+a,type:n.type,value:n.value,valid:n.validate,errMsg:n.errorMessage,shouldValidate:n.validation,placeholder:n.placeholder,mask:n.mask,mskChar:n.maskChar,onChangs:function(a){return e.onChange(a,t)}})}))}},{key:"render",value:function(){var e=this,t=this.state.sendStatus[this.getRandomFloat(0,2)];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{secondStep:this.props.secondStep,returnMain:this.props.return,steps:this.props.steps,status:t}),r.a.createElement(d.a,{in:this.props.steps[1].active,timeout:600},(function(t){return r.a.createElement("form",{className:"payment-form ".concat(t),onSubmit:e.submitHandler},r.a.createElement(b,{return:e.props.return}),r.a.createElement("img",{src:e.props.steps[1].active?e.props.select[0].img:null,className:"payment-form__img"}),r.a.createElement("div",{className:"payment-form__title"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0431\u0430\u043b\u0430\u043d\u0441\u0430"),e.renderInputs(),r.a.createElement("button",{type:"submit",className:"payment-form__button"},"\u041e\u041f\u041b\u0410\u0422\u0418\u0422\u042c"))})))}}]),t}(r.a.Component),w=a(11),N=function(e){var t=["dropdown-list__item"];return e.opList.added&&t.push("active-op"),r.a.createElement("li",{className:t.join(" "),onClick:function(){e.funcAdd(e.opList)}},r.a.createElement("img",{src:window.location.origin+e.icon,className:"dropdown-list__img",alt:e.name}),r.a.createElement("span",{className:"dropdown-list__name"},e.name))},S=function(e){return r.a.createElement("ul",{className:"dropdown-list ".concat(e.class)},e.oplist.map((function(t,a){return r.a.createElement(N,{key:a,icon:t.icon,name:t.name,funcAdd:e.funcAdd,opList:t})})))},_=(a(28),function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),s=a[0],o=a[1],c=["dropdown-icon"],i=["dropdown-title"];return s&&(c.push("reverse"),i.push("active")),r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:i.join(" "),onClick:function(){return o(!s)}},"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432",r.a.createElement("svg",{width:"18",height:"9",viewBox:"0 0 18 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:c.join(" ")},r.a.createElement("path",{d:"M8.98588 8.99696C8.686 8.99755 8.39537 8.89297 8.16446 8.7014L0.463656 2.27615C0.20155 2.05803 0.0367216 1.74459 0.005431 1.40479C-0.0258596 1.06498 0.0789508 0.726655 0.296805 0.464227C0.514659 0.201798 0.827711 0.0367669 1.16709 0.00543771C1.50648 -0.0258915 1.84439 0.0790476 2.10649 0.29717L8.98588 6.05419L15.8653 0.502779C15.9966 0.396035 16.1476 0.316321 16.3098 0.26822C16.4719 0.220118 16.642 0.204577 16.8101 0.222489C16.9783 0.240402 17.1413 0.291414 17.2897 0.372596C17.4381 0.453777 17.569 0.563527 17.675 0.695536C17.7925 0.827667 17.8815 0.982678 17.9364 1.15086C17.9914 1.31904 18.011 1.49676 17.9941 1.67289C17.9773 1.84903 17.9243 2.01977 17.8384 2.17444C17.7526 2.3291 17.6358 2.46435 17.4953 2.57171L9.79447 8.7785C9.55692 8.9398 9.27223 9.01671 8.98588 8.99696Z",fill:"#6916A1"}))),r.a.createElement(d.a,{in:s,timeout:600,unmountOnExit:!0},(function(t){return r.a.createElement(S,{oplist:e.opList,class:t,funcAdd:e.funcAdd})})))}),A=(a(29),function(e){return r.a.createElement("div",{className:"backdrop"})}),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={operators:[{name:"\u041c\u0422\u0421",img:"/img/mts.jpg",added:!0,icon:"/img/icons/mts_icon.png"},{name:"\u0411\u0438\u043b\u0430\u0439\u043d",img:"/img/beeline.jpg",added:!0,icon:"/img/icons/beeline_icon.png"},{name:"\u041c\u0435\u0433\u0430\u0444\u043e\u043d",img:"/img/megaphon.jpg",added:!0,icon:"/img/icons/megafon__icon.png"},{name:"\u0422\u0415\u041b\u0415 2",img:"/img/tele2.jpg",added:!1,icon:"/img/icons/tele2_icon.png"},{name:"Yota",img:"/img/yota.jpg",added:!1,icon:"/img/icons/yota_icon.png"}],steps:[{step:1,active:!0},{step:2,active:!1},{step:3,active:!1}]},a.secondStep=function(){var e=a.state.steps;e[1].active=!0,e[2].active=!1,a.setState({steps:e})},a.lastStep=function(){var e=a.state.steps;e[2].active=!0,a.setState({steps:e})},a.returnMainPage=function(){a.setState({steps:[{step:1,active:!0},{step:2,active:!1},{step:3,active:!1}]})},a.onSelectOperator=function(e){var t=e.name;a.secondStep(),a.setState({active:t})},a.addOperator=function(e){var t=e;"\u0422\u0415\u041b\u0415 2"!==e.name&&"Yota"!==e.name||(t.added?t.added=!1:t.added=!0),a.setState({operator:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.operators,a=t.filter((function(t){return t.name===e.state.active}));return r.a.createElement(r.a.Fragment,null,!0===this.state.steps[2].active?r.a.createElement(A,null):null,r.a.createElement("div",{className:"header"},r.a.createElement(g,{steps:this.state.steps}),r.a.createElement(_,{funcAdd:this.addOperator,opList:t})),this.state.steps[1].active||this.state.steps[2].active?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"App-text"},"\u0414\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b"),r.a.createElement("h1",{className:"App-title"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430")),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(y,{return:this.returnMainPage,steps:this.state.steps,select:a,success:this.lastStep,secondStep:this.secondStep})),r.a.createElement("div",{className:"operator"},r.a.createElement(f,{operator:t,onSelectOp:this.onSelectOperator})))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(M,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.9aa8a9e5.chunk.js.map