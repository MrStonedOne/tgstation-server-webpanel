(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[120],{11120:function(e,t,r){"use strict";r.r(t);var n=r(67294),a=r(88375),i=r(27977),o=r(35005),c=r(86828),l=r(75147),s=r(43489),u=r(44012),f=r(48272),d=r(41153),m=r(73727),p=r(48155),v=r(38592),E=r(69644),y=r(42540),h=r(3429),b=r(43307),g=r(71739);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.default=(0,d.EN)(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(j,e);var t,r,d,Z,P,_,R=(P=j,_=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(P);if(_){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function j(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,j),(t=R.call(this,e)).state={errors:[],users:[],loading:!0,canList:!1},t}return t=j,(r=[{key:"addError",value:function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))}},{key:"componentDidMount",value:(d=function*(){var e=yield E.Z.getCurrentUser();if(e.code==v.G.OK){var t=!!((0,y.Zg)(e.payload).administrationRights&p.oj.ReadUsers);if(this.setState({canList:t}),t){var r=yield E.Z.listUsers();switch(r.code){case v.G.OK:this.setState({users:r.payload});break;case v.G.ERROR:this.addError(r.error)}}else this.setState({users:[e.payload]})}else this.addError(e.error);this.setState({loading:!1})},Z=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=d.apply(e,t);function i(e){O(a,r,n,i,o,"next",e)}function o(e){O(a,r,n,i,o,"throw",e)}i(void 0)}))},function(){return Z.apply(this,arguments)})},{key:"render",value:function(){var e=this;return this.state.loading?n.createElement(g.Z,{text:"loading.userlist"}):n.createElement("div",{className:"text-center"},this.state.canList?"":n.createElement(a.Z,{className:"clearfix",variant:"error"},n.createElement(u.Z,{id:"view.user.list.cantlist"})),this.state.errors.map((function(t,r){if(t)return n.createElement(b.Z,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})})),n.createElement(l.Z,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,n.createElement(u.Z,{id:"generic.name"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.details"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.group"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.created"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.createdby"})),n.createElement("th",null,n.createElement(u.Z,{id:"generic.action"})))),n.createElement("tbody",null,this.state.users.map((function(t){var r=new Date(t.createdAt),a=(r.getTime()-Date.now())/1e3;return n.createElement("tr",{key:t.id},n.createElement("td",null,t.id),n.createElement("td",null,t.name),n.createElement("td",null,t.systemIdentifier?n.createElement(i.Z,{variant:"primary",className:"mx-1"},n.createElement(u.Z,{id:"generic.system.short"})):n.createElement(i.Z,{variant:"primary",className:"mx-1"},n.createElement(u.Z,{id:"generic.tgs"})),t.enabled?n.createElement(i.Z,{variant:"success",className:"mx-1"},n.createElement(u.Z,{id:"generic.enabled"})):n.createElement(i.Z,{variant:"danger",className:"mx-1"},n.createElement(u.Z,{id:"generic.disabled"})),t.group?n.createElement(i.Z,{variant:"warning",className:"mx-1"},n.createElement(u.Z,{id:"generic.grouped"})):null),t.group?n.createElement(c.Z,{overlay:n.createElement(s.Z,{id:"".concat(t.name,"-tooltip-group")},n.createElement(u.Z,{id:"generic.groupid",values:{id:t.group.id}}))},(function(e){var r=e.ref,a=w(e,["ref"]);return n.createElement("td",a,n.createElement("span",{ref:r},t.group.name))})):n.createElement("td",null),n.createElement(c.Z,{overlay:n.createElement(s.Z,{id:"".concat(t.name,"-tooltip")},r.toLocaleString())},(function(e){var t=e.ref,r=w(e,["ref"]);return n.createElement("td",r,n.createElement("span",{ref:t},n.createElement(f.Z,{value:a,numeric:"auto",updateIntervalInSeconds:1})))})),n.createElement(c.Z,{overlay:n.createElement(s.Z,{id:"".concat(t.name,"-tooltip-createdby")},n.createElement(u.Z,{id:"generic.userid"}),t.createdBy.id)},(function(e){var r=e.ref,a=w(e,["ref"]);return n.createElement("td",a,n.createElement("span",{ref:r},t.createdBy.name))})),n.createElement("td",{className:"align-middle p-0"},n.createElement(o.Z,{onClick:function(){h.Mq.selecteduserid=t.id,e.props.history.push(h.$w.useredit.link||h.$w.useredit.route)}},n.createElement(u.Z,{id:"generic.edit"}))))})))),n.createElement(o.Z,{as:m.rU,to:h.$w.usercreate.link||h.$w.usercreate.route},n.createElement(u.Z,{id:"routes.usercreate"})))}}])&&x(t.prototype,r),j}(n.Component))},27977:function(e,t,r){"use strict";var n=r(22122),a=r(19756),i=r(94184),o=r.n(i),c=r(67294),l=r(76792),s=c.forwardRef((function(e,t){var r=e.bsPrefix,i=e.variant,s=e.pill,u=e.className,f=e.as,d=void 0===f?"span":f,m=(0,a.Z)(e,["bsPrefix","variant","pill","className","as"]),p=(0,l.vE)(r,"badge");return c.createElement(d,(0,n.Z)({ref:t},m,{className:o()(u,p,s&&p+"-pill",i&&p+"-"+i)}))}));s.displayName="Badge",s.defaultProps={pill:!1},t.Z=s},75147:function(e,t,r){"use strict";var n=r(22122),a=r(19756),i=r(94184),o=r.n(i),c=r(67294),l=r(76792),s=c.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,s=e.striped,u=e.bordered,f=e.borderless,d=e.hover,m=e.size,p=e.variant,v=e.responsive,E=(0,a.Z)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=(0,l.vE)(r,"table"),h=o()(i,y,p&&y+"-"+p,m&&y+"-"+m,s&&y+"-striped",u&&y+"-bordered",f&&y+"-borderless",d&&y+"-hover"),b=c.createElement("table",(0,n.Z)({},E,{className:h,ref:t}));if(v){var g=y+"-responsive";return"string"==typeof v&&(g=g+"-"+v),c.createElement("div",{className:g},b)}return b}));t.Z=s}}]);
//# sourceMappingURL=120.4e3e4642840ec5aa25a9.js.map