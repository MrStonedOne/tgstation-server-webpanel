(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(64),a=n(0),o=n.n(a),i=n(37),s=n(74),l=n(225),c=n(691),u=n(120),f=n(119),d=n(72),p=n(717),m=n(10),v=n(7),h=n(3),y=n(289),b=n(63),E=n(54);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){S(o,r,a,i,s,"next",e)}function s(e){S(o,r,a,i,s,"throw",e)}i(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(k,e);var t,n,a,g,S,R=x(k);function k(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),(t=R.call(this,e)).state={versions:[],errors:[],activeVersion:"",latestVersion:"",selectedVersion:"",loading:!0},t}return t=k,(n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"loadVersions",value:(S=V((function*(){var e=yield p.a.listAllVersions(this.props.instance.id);if(e.code===h.a.OK){this.setState({versions:e.payload.content});var t=yield p.a.getActiveVersion(this.props.instance.id);t.code===h.a.OK?this.setState({activeVersion:t.payload.version}):this.addError(t.error)}else this.addError(e.error)})),function(){return S.apply(this,arguments)})},{key:"componentDidMount",value:(g=V((function*(){var e=this;yield this.loadVersions(),fetch("https://secure.byond.com/download/version.txt").then((function(e){return e.text()})).then((function(e){return e.split("\n")})).then((function(e){return e[0]})).then((function(t){e.setState({latestVersion:t,selectedVersion:t,loading:!1})})).catch((function(t){e.addError(new v.c(v.b.APP_FAIL,{jsError:Error(t)})),e.setState({loading:!1})}))})),function(){return g.apply(this,arguments)})},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(E.a,{text:"loading.instance"}):this.props.selfInstancePermissionSet.byondRights&m.b.ListInstalled&&this.props.selfInstancePermissionSet.byondRights&m.b.ReadActive?o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(d.a,{id:"view.instance.hosting.byond"})),this.state.errors.map((function(t,n){if(t)return o.a.createElement(b.a,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),o.a.createElement("div",{onChange:function(){var t=V((function*(t){e.setState({loading:!0});var n=yield p.a.switchActive(e.props.instance.id,t.target.value);n.code===h.a.OK?yield e.loadVersions():e.addError(n.error),e.setState({loading:!1})}));return function(e){return t.apply(this,arguments)}}()},this.state.versions.map((function(t){return o.a.createElement(c.a,{className:"w-25 mb-1 mx-auto d-flex",key:t.version},o.a.createElement(c.a.Prepend,null,o.a.createElement(c.a.Radio,{disabled:!(e.props.selfInstancePermissionSet.byondRights&m.b.InstallOfficialOrChangeActiveVersion),name:"byond",id:t.version,value:t.version,defaultChecked:t.version===e.state.activeVersion})),o.a.createElement(c.a.Append,{className:"flex-grow-1 m-0",as:"label",htmlFor:t.version},o.a.createElement(u.a,{overlay:(n="view.instance.hosting.byond.custom",n?o.a.createElement(f.a,{id:n},o.a.createElement(d.a,{id:n})):o.a.createElement(o.a.Fragment,null)),show:!t.version.endsWith(".0")&&void 0},(function(e){var n=e.ref,a=O(e,["ref"]);return o.a.createElement(c.a.Text,w({className:"w-100"},a),t.version.endsWith(".0")?t.version.substr(0,t.version.length-2):t.version,t.version.endsWith(".0")?null:o.a.createElement("div",{className:"ml-auto",ref:n},o.a.createElement(r.a,{fixedWidth:!0,icon:"info"})))}))));var n}))),o.a.createElement("hr",null),o.a.createElement("h4",null,o.a.createElement(d.a,{id:"view.instance.hosting.byond.add"})),o.a.createElement(c.a,{className:"w-25 mb-3 mx-auto"},o.a.createElement(l.a,{type:"number",defaultValue:this.state.latestVersion.split(".")[0],onChange:function(t){e.setState((function(e){var n=e.selectedVersion.split(".");return n[0]=t.target.value,{selectedVersion:n.join(".")}}))}}),o.a.createElement(c.a.Text,{className:"rounded-0"},"."),o.a.createElement(l.a,{type:"number",defaultValue:this.state.latestVersion.split(".")[1],onChange:function(t){e.setState((function(e){var n=e.selectedVersion.split(".");return n[1]=t.target.value,{selectedVersion:n.join(".")}}))}}),o.a.createElement(c.a.Append,null,o.a.createElement(i.a,{variant:"success",onClick:V((function*(){e.setState({loading:!0});var t=yield p.a.switchActive(e.props.instance.id,e.state.selectedVersion,e.state.customFile?yield e.state.customFile.arrayBuffer():void 0);t.code===h.a.ERROR?e.addError(t.error):(e.setState({customFile:null}),yield e.loadVersions()),e.setState({loading:!1})}))},o.a.createElement(r.a,{icon:"plus"})))),o.a.createElement(s.a,null,o.a.createElement(s.a.File,{custom:!0,id:"test",className:"w-25 text-left",label:this.state.customFile?this.state.customFile.name:o.a.createElement(d.a,{id:"view.instance.hosting.byond.upload"}),accept:".zip",onChange:function(t){e.setState({customFile:t.target.files?t.target.files[0]:null})}}))):o.a.createElement(y.a,null)}}])&&P(t.prototype,n),a&&P(t,a),k}(o.a.Component)}}]);
//# sourceMappingURL=5.0cee03c2417dac3b6111.js.map