"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[67],{93918:function(e,t,n){n.d(t,{a:function(){return f}});var l=n(51436),a=n(67814),r=n(67294),i=n(27977),o=n(75147),c=n(15293),m=n(43489),s=n(44012),d=n(81249),u=n(48509),p=n(96190),E=n(32240),v=n(8425),g=n(35855),b=n(89929);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}let f;!function(e){e[e.CompileJobs=0]="CompileJobs",e[e.Watchdog=1]="Watchdog"}(f||(f={}));class w extends r.Component{constructor(e){super(e),this.state={openTestMergesId:null}}render(){return r.createElement("div",null,r.createElement(v.t,{obj:this.props.viewData}),r.createElement("h3",{className:"text-center"},r.createElement(s.Z,{id:"view.instance.server.deployment_info"})),this.props.viewData?this.renderViewData(this.props.viewData):r.createElement(g.Z,{text:"loading.compile_jobs"}))}renderViewData(e){let t,n=!1;const l=e,a=e;switch(e.viewDataType){case f.Watchdog:n=!l.activeCompileJob,t=()=>this.renderWatchdog(l);break;case f.CompileJobs:n=!!a.compileJobs&&0===a.compileJobs.length,t=()=>this.renderDeployments(a);break;default:throw new Error("Invalid enum value for ViewDataType!")}return n?r.createElement("h1",null,r.createElement(i.Z,{variant:"warning"},r.createElement(s.Z,{id:"view.utils.deployment_viewer.no_jobs"}))):t()}renderTable(e){return r.createElement(o.Z,{className:"table table-hover"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",null),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.id"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.byond"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.started_at"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.completed_at"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.started_by"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.project"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.revision"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.origin"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.security"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.dmapi"})))),r.createElement("tbody",null,e))}renderWatchdog(e){return this.renderTable(r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{colSpan:11},r.createElement("h3",null,r.createElement(i.Z,{pill:!0,variant:"success"},r.createElement(s.Z,{id:"view.instance.server.deployment_info.active"}))))),this.renderCompileJob(e.activeCompileJob),e.stagedCompileJob?r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{colSpan:11},r.createElement("h3",null,r.createElement(i.Z,{pill:!0,variant:"warning"},r.createElement(s.Z,{id:"view.instance.server.deployment_info.staged"}))))),this.renderCompileJob(e.stagedCompileJob)):r.createElement(r.Fragment,null)))}renderDeployments(e){return r.createElement(r.Fragment,null,this.renderTable(r.createElement(r.Fragment,null,e.compileJobs.map((e=>this.renderCompileJob(e))))),r.createElement(b.Z,{className:"mt-4",selectPage:t=>{e.paging.loadPage(t)},totalPages:e.paging.totalPages,currentPage:e.paging.currentPage}))}renderCompileJob(e){const t=E.default.friendlyVersion(e.engineVersion),n={day:"2-digit",year:"numeric",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZoneName:"short"},p=e.revisionInformation.activeTestMerges&&e.revisionInformation.activeTestMerges.length>0,v=this.state.openTestMergesId===e.id,g=!e.dmApiVersion||(0,d.lt)(e.dmApiVersion,this.context?.serverInfo?.dmApiVersion);return r.createElement(r.Fragment,null,r.createElement("tr",{className:"nowrap",onClick:()=>{v?this.setState({openTestMergesId:null}):p&&this.setState({openTestMergesId:e.id})}},r.createElement("td",null,p?r.createElement("h5",{style:{whiteSpace:"nowrap"}},r.createElement(c.Z,{overlay:r.createElement(m.Z,{id:`${e.id}-tooltip-test-merges`},r.createElement(s.Z,{id:"view.utils.deployment_viewer.test_merges_hint."+(v?"hide":"show")}))},(({ref:e,...t})=>r.createElement("span",h({ref:e},t),r.createElement(a.G,{icon:v?l.eW2:l.I4f}))))):null),r.createElement("td",null,g?r.createElement(c.Z,{overlay:r.createElement(m.Z,{id:`${e.id}-tooltip-dmapi`},r.createElement(s.Z,{id:"view.utils.deployment_viewer.dmapi_outdated",values:{codebase:e.dmApiVersion??"N/A",tgs:this.context.serverInfo.dmApiVersion}}))},(({ref:e,...t})=>r.createElement(i.Z,h({pill:!0,variant:"danger",style:{cursor:"pointer"},ref:e},t,{onClick:e=>{window.open("https://github.com/tgstation/tgstation-server/releases?q=%23tgs-dmapi-release&expanded=true","_blank")?.focus(),e.stopPropagation()}}),r.createElement(a.G,{icon:l.eHv})))):null),r.createElement("td",null,e.id),r.createElement("td",null,t),r.createElement("td",null,new Date(e.job.startedAt).toLocaleString("en-CA",n)),r.createElement("td",null,new Date(e.job.stoppedAt).toLocaleString("en-CA",n)),r.createElement("td",null,e.job.startedBy.name),r.createElement("td",null,e.dmeName),r.createElement("td",null,e.revisionInformation.commitSha.substring(0,7)),r.createElement("td",null,e.revisionInformation.originCommitSha.substring(0,7)),r.createElement("td",null,null!=e.minimumSecurityLevel?Object.keys(u.ns).filter((e=>isNaN(Number(e))))[e.minimumSecurityLevel]:r.createElement("i",null,r.createElement(s.Z,{id:"generic.not_applicable"}))),r.createElement("td",null,e.dmApiVersion)),v?r.createElement("tr",null,r.createElement("td",{colSpan:10},r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.pr.number"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.pr.title"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.revision"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.pr.merged_by"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.pr.merged_at"})),r.createElement("th",null,r.createElement(s.Z,{id:"view.utils.deployment_viewer.table.pr.comment"}))),r.createElement("tbody",null,e.revisionInformation.activeTestMerges.map((t=>r.createElement("tr",{key:`test-merge-#${t.number}-cj-${e.id}`},r.createElement("td",null,r.createElement("a",{href:t.url},"#",t.number)),r.createElement("td",null,r.createElement("a",{href:t.url},t.titleAtMerge)),r.createElement("td",null,t.targetCommitSha.substring(0,7)),r.createElement("td",null,t.mergedBy.name),r.createElement("td",null,new Date(t.mergedAt).toLocaleString("en-CA",n)),r.createElement("td",null,t.comment?t.comment:r.createElement("i",null,r.createElement(s.Z,{id:"generic.not_applicable"})))))))))):r.createElement(r.Fragment,null))}}w.contextType=p.g,t.Z=w},79049:function(e,t,n){n.d(t,{Pg:function(){return f},ZP:function(){return w},fS:function(){return p}});var l=n(51436),a=n(67814),r=n(67294),i=n(35005),o=n(32258),c=n(62318),m=n(15293),s=n(43489),d=n(44012);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u.apply(this,arguments)}let p;!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(p||(p={}));const E=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,ref:t})})),v=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(t.target.value),disabled:e.disabled,type:"password",ref:t})})),g=r.forwardRef((function(e,t){const n=Math.random().toString();return r.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},r.createElement(o.Z.Check,{id:n,checked:e.value,onChange:t=>e.onChange(t.target.checked),type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),b=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber),disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),h=r.forwardRef((function(e,t){return r.createElement(o.Z.Control,{value:e.value,onChange:t=>e.onChange(parseInt(t.target.value)),disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((([e])=>isNaN(parseInt(e)))).map((([t,n])=>e.noLocalize?r.createElement("option",{key:n,value:n},t):r.createElement(d.Z,{id:`${e.name}.${t}`,key:t},(e=>r.createElement("option",{key:n,value:n},e))))))})),f={[p.Enum]:0,[p.Number]:0,[p.Boolean]:!1,[p.String]:"",[p.Password]:""};function w(e){const[t,n]=(0,r.useState)(e.defaultValue??f[e.type]),o=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(e.defaultValue??f[e.type])}),[e.defaultValue]),(0,r.useEffect)((()=>{switch(o.current&&(o.current.checkValidity()?o.current.classList.remove("is-invalid"):o.current.classList.add("is-invalid")),e.type){case p.Boolean:case p.Enum:case p.Number:case p.String:case p.Password:return void e.onChange(t,o.current?.checkValidity()??!0)}}),[t]);const w={string:E,password:v,boolean:g,[p.Number]:void 0,[p.Enum]:void 0},y=t!=(e.defaultValue??f[e.type]);return r.createElement(c.Z,null,r.createElement(m.Z,{overlay:(Z=e.tooltip,Z?r.createElement(s.Z,{id:Z},r.createElement(d.Z,{id:Z})):r.createElement(r.Fragment,null)),show:!!e.tooltip&&void 0},(({ref:t,...n})=>r.createElement(c.Z.Prepend,{className:"w-50 w-xl-40"},r.createElement(c.Z.Text,u({className:"flex-grow-1"},n),r.createElement("span",{className:y?"font-weight-bold":""},r.createElement(d.Z,{id:e.name})),r.createElement("div",{className:"ml-auto"},e.disabled?r.createElement(d.Z,{id:"generic.readonly"}):null,r.createElement("div",{ref:t,className:"d-inline-block ml-2",style:{visibility:e.tooltip?"unset":"hidden"}},r.createElement(a.G,{icon:l.YHc}))))))),e.type===p.Number?r.createElement(b,{value:t,onChange:e=>n(e),name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:o}):e.type===p.Enum?r.createElement(h,{value:t,onChange:e=>n(e),name:e.name,enum:e.enum,noLocalize:e.noLocalize,disabled:e.disabled}):r.createElement(w[e.type],{value:t,onChange:e=>n(e),disabled:e.disabled,name:e.type,ref:o}),r.createElement(c.Z.Append,null,r.createElement(i.Z,{style:{visibility:!y||e.disabled?"hidden":void 0},variant:"danger",onClick:()=>n(e.defaultValue??f[e.type])},r.createElement(a.G,{icon:"undo"}))));var Z}},35619:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(67294),a=n(35005),r=n(15293),i=n(43489),o=n(44012),c=n(79049);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function s(e){const t=new Map,n=new Map,[s,d]=(0,l.useState)({});(0,l.useEffect)((()=>{Object.keys(e.fields).forEach((e=>{d((t=>({...t,[e]:{}})))}))}),[]);for(const[a,r]of Object.entries(e.fields))n.set(a,r),t.set(r,(0,l.useState)(r.defaultValue??c.Pg[r.type]));let u=!1,p=!1;for(const[e,l]of n){const[n]=t.get(l),a=s[e];if((l.defaultValue??c.Pg[l.type])!=n&&(u=!0),a?.invalid&&(p=!0),u&&p)break}return e.hideDisabled&&!Object.values(e.fields).some((e=>!e.disabled))?l.createElement(l.Fragment,null):l.createElement("div",null,Object.entries(e.fields).map((([n,a])=>{const{disabled:r,...i}=a;return e.hideDisabled&&r?null:l.createElement(c.ZP,m({key:n},i,{disabled:e.readOnly||r,onChange:(e,l)=>{t.get(a)[1](e),d((e=>({...e,[n]:{...e[n],invalid:!l}})))}}))})),l.createElement("div",{className:"text-center mt-2"},l.createElement(r.Z,{overlay:l.createElement(i.Z,{id:"form-invalid"},l.createElement(o.Z,{id:"generic.invalid_form"})),show:!!p&&void 0},l.createElement(a.Z,{variant:e.readOnly||p?"danger":"success",disabled:e.readOnly||!u||p,onClick:()=>{const l={};for(const[a,r]of n){const[n]=t.get(r);(r.alwaysInclude||n!=(r.defaultValue??c.Pg[r.type])||e.includeAll)&&(l[a]=n)}e.onSave(l)}},l.createElement(o.Z,{id:e.saveMessageId??"generic.save"})))))}}}]);
//# sourceMappingURL=67.d56fce4f5250e06063bf.bundle.js.map