(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{355:function(e,t,n){"use strict";n.r(t);var r=n(226),a=n(64),i=n(0),o=n.n(i),c=n(695),s=n(37),l=n(120),u=n(692),d=n(119),f=n(72),m=n(17),p=n(10),y=n(713),h=n(84),v=n(7),b=n(3),E=n(121),g=n(34),O=n(14),w=n(63),S=n(54);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){C(i,r,a,o,c,"next",e)}function c(e){C(i,r,a,o,c,"throw",e)}o(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var a=D(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(C,e);var t,n,i,m,E,k,I=R(C);function C(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,C),(t=I.call(this,e)).setOnline=t.setOnline.bind(M(t));var n=void 0!==O.c.instanceid?parseInt(O.c.instanceid):void 0;return t.state={loading:!0,instances:[],errors:[],instanceid:n},t}return t=C,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"loadInstances",value:(k=N((function*(){var e=this,t=yield y.a.listInstances(),n=[];if(t.code==b.a.OK){var r,a=[],i=A(t.payload);try{var o=function(){var t=r.value,i=t;t.online?a.push(h.a.getCurrentInstancePermissionSet(t.id).then((function(t){t.code==b.a.OK?i.canAccess=!0:(i.canAccess=!1,t.error.code!==v.b.HTTP_ACCESS_DENIED&&e.addError(t.error)),n.push(i)}))):(i.canAccess=!1,n.push(i))};for(i.s();!(r=i.n()).done;)o()}catch(e){i.e(e)}finally{i.f()}yield Promise.all(a),this.setState({instances:n.sort((function(e,t){return e.id-t.id}))})}else this.addError(t.error)})),function(){return k.apply(this,arguments)})},{key:"componentDidMount",value:(E=N((function*(){yield this.loadInstances(),this.setState({loading:!1})})),function(){return E.apply(this,arguments)})},{key:"setOnline",value:(m=N((function*(e){var t=!e.online,n=yield y.a.editInstance({id:e.id,online:t});n.code===b.a.OK?yield this.loadInstances():this.addError(n.error)})),function(e){return m.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement(S.a,{text:"loading.instance.list"});if(!this.context.user)throw Error("InstanceList: this.context.user is null!");var t=!!(Object(g.d)(this.context.user).instanceManagerRights&p.e.SetOnline),n={verticalAlign:"middle"};return o.a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return o.a.createElement(w.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.a.createElement("h3",null,o.a.createElement(f.a,{id:"view.instance.list.title"})),o.a.createElement(u.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0,className:"mb-4"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,o.a.createElement(f.a,{id:"generic.name"})),o.a.createElement("th",null,o.a.createElement(f.a,{id:"generic.online"})),o.a.createElement("th",null,o.a.createElement(f.a,{id:"generic.path"})),o.a.createElement("th",null,o.a.createElement(f.a,{id:"generic.configmode"})),o.a.createElement("th",null,o.a.createElement(f.a,{id:"generic.action"})))),o.a.createElement("tbody",null,this.state.instances.map((function(r){return o.a.createElement("tr",{key:r.id,className:r.id.toString()===O.c.instanceid?"font-weight-bold":""},o.a.createElement("td",{style:n},r.id),o.a.createElement("td",{style:n},r.name),o.a.createElement("td",{style:n},r.online?o.a.createElement(c.a,{variant:"success"},o.a.createElement(f.a,{id:"generic.online"})):o.a.createElement(c.a,{variant:"danger"},o.a.createElement(f.a,{id:"generic.offline"}))),o.a.createElement("td",{style:n},r.moveJob?o.a.createElement(f.a,{id:"view.instance.moving"}):r.path),o.a.createElement("td",{style:n},o.a.createElement(f.a,{id:"view.instance.configmode.".concat(r.configurationType.toString())})),o.a.createElement("td",{className:"align-middle p-1",style:n},o.a.createElement(s.a,{className:"mx-1",variant:r.id.toString()===O.c.instanceid?"success":"primary",onClick:function(){O.c.instanceid=r.id.toString(),e.setState({instanceid:r.id})},disabled:!r.canAccess||r.id.toString()===O.c.instanceid},o.a.createElement(f.a,{id:"generic.select"})),o.a.createElement(s.a,{className:"mx-1",variant:r.online?"danger":"success",onClick:function(){return e.setOnline(r)},disabled:!t},o.a.createElement(f.a,{id:"view.instance.list.set.".concat(r.online?"offline":"online")}))))})))),o.a.createElement("div",{className:"align-middle"},o.a.createElement("div",{className:"mb-4"},this.renderAddInstance()),o.a.createElement(s.a,{className:"mx-1",onClick:function(){e.props.history.push(O.b.instancecode.link||O.b.instancecode.route)},disabled:void 0===this.state.instanceid},o.a.createElement(f.a,{id:"routes.instancecode"})),o.a.createElement(s.a,{className:"mx-1",onClick:function(){e.props.history.push(O.b.instancehosting.link||O.b.instancehosting.route)},disabled:void 0===this.state.instanceid},o.a.createElement(f.a,{id:"routes.instancehosting"})),o.a.createElement(s.a,{className:"mx-1",onClick:function(){e.props.history.push(O.b.instanceconfig.link||O.b.instanceconfig.route)},disabled:void 0===this.state.instanceid},o.a.createElement(f.a,{id:"routes.instanceconfig"})),o.a.createElement(s.a,{className:"mx-1",onClick:function(){e.props.history.push(O.b.instancejobs.link||O.b.instancejobs.route)},disabled:void 0===this.state.instanceid},o.a.createElement(f.a,{id:"routes.instancejobs"}))))}},{key:"renderAddInstance",value:function(){var e=this;if(!this.context.user)throw Error("InstanceList2: this.context.user is null!");var t=!!(Object(g.d)(this.context.user).instanceManagerRights&p.e.Create);return o.a.createElement(l.a,{overlay:o.a.createElement(d.a,{id:"create-instance-tooltip"},o.a.createElement(f.a,{id:"perms.instance.create.warning"})),show:!t&&void 0},(function(n){var i=n.ref,c=x(n,["ref"]);return o.a.createElement(s.a,j({ref:i,className:"mx-1",variant:"success",onClick:function(){e.props.history.push(O.b.instancecreate.link||O.b.instancecreate.route)},disabled:!t},c),o.a.createElement("div",null,o.a.createElement(a.a,{className:"mr-2",icon:r.faPlus}),o.a.createElement(f.a,{id:"routes.instancecreate"})))}))}}])&&P(t.prototype,n),i&&P(t,i),C}(o.a.Component);J.contextType=E.a,t.default=Object(m.f)(J)}}]);
//# sourceMappingURL=22.044fa8eba8ee298183a0.js.map