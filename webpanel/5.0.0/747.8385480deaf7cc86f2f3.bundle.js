"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[747],{38747:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(67294),a=n(85509),i=n(56841),s=n(88375),o=n(35005),c=n(31555),l=n(32258),u=n(62318),m=n(44012),d=n(5977),h=n(55006),p=n.n(h),E=n(76222),f=n(63637),v=n(7179),w=n(25856),g=n(48509),Z=n(76352),y=n(96846),S=n(53803),b=n(87611),x=n(39521),R=n(44615),k=n(27428);var C=n(1320),O=n(3e3),N=n(35855);class P extends r.Component{constructor(e,t){super(e),this.state={loading:!1,errors:[],prefix:t.serverInfo.validInstancePaths?.length?t.serverInfo.validInstancePaths[0]:void 0,tab:"quick",performingQuickSetup:!1,quickSetupStages:[]},this.submit=this.submit.bind(this),this.quickStart=this.quickStart.bind(this)}addError(e){this.setState((t=>{const n=Array.from(t.errors);return n.push(e),{errors:n}}))}render(){if(this.state.loading)return r.createElement(N.Z,{text:"view.instance.create.loading"});const e=this.context.serverInfo.validInstancePaths;return r.createElement("div",{className:"text-center"},this.state.errors.map(((e,t)=>{if(e)return r.createElement(O.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const n=Array.from(e.errors);return n[t]=void 0,{errors:n}}))})})),r.createElement("h3",null,r.createElement(m.Z,{id:"view.instance.create.title"})),this.state.performingQuickSetup?r.createElement("div",null,r.createElement(N.Z,{text:"view.instance.create.quick.active"}),r.createElement("ul",null,this.state.quickSetupStages)):r.createElement(a.Z,{activeKey:this.state.tab,onSelect:e=>{e&&this.setState({tab:e})},id:"create-instance-tabs",className:"justify-content-center mb-3 mt-4 flex-column flex-md-row"},r.createElement(i.Z,{eventKey:"quick",title:r.createElement(m.Z,{id:"view.instance.create.quick"})},this.renderQuickSetup()),r.createElement(i.Z,{eventKey:"manual",title:r.createElement(m.Z,{id:"view.instance.create.manual"})},r.createElement(l.Z,{onSubmit:this.submit},r.createElement(c.Z,{className:"mx-auto",lg:5,md:8},r.createElement(l.Z.Group,{controlId:"name"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.name"}))),r.createElement(l.Z.Control,{type:"text",onChange:e=>{const t=e.target.value;this.setState({instanceName:t})},value:this.state.instanceName,required:!0})),r.createElement(l.Z.Group,{controlId:"path"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.path"}))),r.createElement(u.Z,{className:"mb-1"},null!=e?r.createElement(u.Z.Prepend,{className:"flex-grow-1 flex-grow-md-0"},r.createElement(u.Z.Text,null,r.createElement("span",null,r.createElement(m.Z,{id:"view.instance.create.path.prefix"}))),r.createElement(l.Z.Control,{className:"rounded-0 flex-grow-1 flex-grow-md-0 flex-shrink-0 flex-shrink-md-1 w-auto",as:"select",custom:!0,required:!0,onChange:e=>{this.setState({prefix:e.target.value})}},e.map((e=>r.createElement("option",{key:e,value:e,selected:this.state.prefix==e},e,"/"))))):null,r.createElement(l.Z.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",required:!0,onChange:e=>{const t=e.target.value;this.setState({instancePath:t})},value:this.state.instancePath}))),r.createElement(o.Z,{type:"submit",variant:"success"},r.createElement(m.Z,{id:"view.instance.create.submit"})))))))}renderQuickSetup(){const e=this.context.serverInfo.validInstancePaths;return r.createElement("div",null,r.createElement(s.Z,{className:"clearfix",variant:"primary"},r.createElement(m.Z,{id:"view.instance.create.quick.notice",values:{br:r.createElement("br",null)}})),r.createElement(s.Z,{className:"clearfix",variant:"error"},r.createElement(m.Z,{id:"view.instance.create.quick.warning"})),r.createElement(l.Z,{onSubmit:this.quickStart},r.createElement(c.Z,{className:"mx-auto",lg:5,md:8},r.createElement(l.Z.Group,{controlId:"quickname"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.name"}))),r.createElement(l.Z.Control,{type:"text",onChange:e=>{const t=e.target.value;this.setState({instanceName:t})},value:this.state.instanceName,required:!0})),r.createElement(l.Z.Group,{controlId:"quickpath"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.path"}))),r.createElement(u.Z,{className:"mb-1"},null!=e?r.createElement(u.Z.Prepend,{className:"flex-grow-1 flex-grow-md-0"},r.createElement(u.Z.Text,null,r.createElement("span",null,r.createElement(m.Z,{id:"view.instance.create.path.prefix"}))),r.createElement(l.Z.Control,{className:"rounded-0 flex-grow-1 flex-grow-md-0 flex-shrink-0 flex-shrink-md-1 w-auto",as:"select",custom:!0,required:!0,onChange:e=>{this.setState({prefix:e.target.value})}},e.map((e=>r.createElement("option",{key:e,value:e,selected:this.state.prefix==e},e,"/"))))):null,r.createElement(l.Z.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",required:!0,onChange:e=>{const t=e.target.value;this.setState({instancePath:t})},value:this.state.instancePath}))),r.createElement(l.Z.Group,{controlId:"repoowner"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.repo_owner"}))),r.createElement(u.Z,{className:"mb-1"},r.createElement(l.Z.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",required:!0,onChange:e=>{const t=e.target.value;this.setState({repoOwner:t})},value:this.state.repoOwner}))),r.createElement(l.Z.Group,{controlId:"reponame"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.repo_name"}))),r.createElement(u.Z,{className:"mb-1"},r.createElement(l.Z.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",required:!0,onChange:e=>{const t=e.target.value;this.setState({repoName:t})},value:this.state.repoName}))),r.createElement(l.Z.Group,{controlId:"accessuser"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.access_user"}))),r.createElement(u.Z,{className:"mb-1"},r.createElement(l.Z.Control,{type:"text",className:"flex-grow-1 w-100 w-md-auto",onChange:e=>{const t=e.target.value;this.setState({accessUser:t})},value:this.state.accessUser}))),r.createElement(l.Z.Group,{controlId:"accesstoken"},r.createElement(l.Z.Label,null,r.createElement("h5",null,r.createElement(m.Z,{id:"view.instance.create.access_token"}))),r.createElement(u.Z,{className:"mb-1"},r.createElement(l.Z.Control,{type:"password",className:"flex-grow-1 w-100 w-md-auto",onChange:e=>{const t=e.target.value;this.setState({accessToken:t})},value:this.state.accessToken}))),r.createElement(o.Z,{type:"submit",variant:"success"},r.createElement(m.Z,{id:"view.instance.create.quick.submit"})))))}pushStage(e){this.setState((t=>{const n=[...t.quickSetupStages];return n.push(r.createElement("li",null,e)),{quickSetupStages:n}}))}async quickStart(){if(!(this.state.instancePath&&this.state.instanceName&&this.state.repoName&&this.state.repoOwner))return;this.setState({performingQuickSetup:!0,quickSetupStages:[]}),this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.yml"}));const e=await k.Z.getFile(this.state.repoOwner,this.state.repoName,".tgs.yml");if(e.code===S.G.ERROR)return this.addError(e.error),void this.setState({performingQuickSetup:!1});const t=window.atob(e.payload);let n;try{n=p().parse(t)}catch(e){return this.addError(new y.ZP(y.jK.BAD_YML,{void:!0})),void this.setState({performingQuickSetup:!1})}1!==n.version&&(this.addError(new y.ZP(y.jK.BAD_TGS_YML_VERSION,{void:!0})),this.setState({performingQuickSetup:!1}));const a=(this.context.serverInfo.windowsHost?n.windows_scripts:n.linux_scripts)??{},i=function(e){switch(e.security?.toLowerCase()){case"ultrasafe":return g.ns.Ultrasafe;case"safe":return g.ns.Safe;case"trusted":return g.ns.Trusted;default:return null}}(n)??g.ns.Safe;try{const e=new Map,t=Object.keys(a);if(t.length>0)for(const n of t){const t=a[n];this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.download_scripts",values:{script:n}}));const i=await k.Z.getFile(this.state.repoOwner,this.state.repoName,t);if(i.code===S.G.ERROR)return this.addError(i.error),void this.setState({performingQuickSetup:!1});e.set(n,i.payload)}this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.create_instance"}));const s=(this.state.prefix?this.state.prefix+"/":"")+this.state.instancePath,o=await Z.Z.createInstance({name:this.state.instanceName,path:s,configurationType:g.c7.HostWrite});if(o.code===S.G.ERROR)return this.addError(o.error),void this.setState({performingQuickSetup:!1});const c=o.payload.id,l=await Z.Z.editInstance({id:c,online:!0});if(l.code===S.G.ERROR)return this.addError(l.error),void this.setState({performingQuickSetup:!1});this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.cloning"}));const u=await b.Z.cloneRepository(c,{origin:`https://github.com/${this.state.repoOwner}/${this.state.repoName}`,updateSubmodules:!0});if(u.code===S.G.ERROR)return this.addError(u.error),void this.setState({performingQuickSetup:!1});if(x.Z.registerJob(u.payload.activeJob,c),n.byond){this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.byond",values:{version:n.byond}}));const e=await E.Z.switchActive(c,n.byond);if(e.code===S.G.ERROR)return this.addError(e.error),void this.setState({performingQuickSetup:!1});x.Z.registerJob(e.payload.installJob,c)}if(i!=g.ns.Safe){this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.settings"}));const e=await w.Z.updateDeployInfo(c,{apiValidationSecurityLevel:i});if(e.code===S.G.ERROR)return this.addError(e.error),void this.setState({performingQuickSetup:!1});const t=await v.Z.updateWatchdogStatus(c,{securityLevel:i});if(t.code===S.G.ERROR)return this.addError(t.error),void this.setState({performingQuickSetup:!1})}const d=e=>{const t=window.atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r.buffer};for(const t of e){this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.upload_scripts",values:{script:t[0]}}));const e=await f.Z.writeConfigFile(c,{path:`EventScripts/${t[0]}`},d(t[1]));if(e.code===S.G.ERROR)return this.addError(e.error),void this.setState({performingQuickSetup:!1})}if(n.static_files)for(const e of n.static_files)if(this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.static",values:{dir:e.name}})),e.populate){let t=!0;const n=async e=>{const a=await k.Z.getDirectoryContents(this.state.repoOwner,this.state.repoName,e);if(a.code===S.G.ERROR)return this.addError(a.error),this.setState({performingQuickSetup:!1}),void(t=!1);for(const e of a.payload)if(e.isDirectory){if(await n(e.path),!t)return}else{this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.static.transfer",values:{path:e.path}}));const n=await k.Z.getFile(this.state.repoOwner,this.state.repoName,e.path);if(n.code===S.G.ERROR)return this.addError(n.error),this.setState({performingQuickSetup:!1}),void(t=!1);const a=await f.Z.writeConfigFile(c,{path:`GameStaticFiles/${e.path}`},d(n.payload));if(a.code===S.G.ERROR)return this.addError(a.error),this.setState({performingQuickSetup:!1}),void(t=!1)}};if(await n(e.name),!t)return}else{this.pushStage(r.createElement(m.Z,{id:"view.instance.create.quick.stage.static",values:{script:e.name}}));const t=await f.Z.addDirectory(c,{path:`GameStaticFiles/${e.name}`});if(t.code===S.G.ERROR)return this.addError(t.error),void this.setState({performingQuickSetup:!1})}C.Mq.selectedinstanceid=c,this.props.history.push(C.$w.instanceedit.link??C.$w.instanceedit.route)}catch(e){this.addError(new y.ZP(y.jK.BAD_YML,{jsError:e})),this.setState({performingQuickSetup:!1})}}async submit(){if(!this.state.instancePath||!this.state.instanceName)return;const e=(this.state.prefix?this.state.prefix+"/":"")+this.state.instancePath;this.setState({loading:!0});const t=await Z.Z.createInstance({name:this.state.instanceName,path:e});if(t.code===S.G.ERROR)return this.setState({loading:!1}),void this.addError(t.error);C.Mq.selectedinstanceid=t.payload.id,this.props.history.push(C.$w.instancelist.link??C.$w.instancelist.route)}}P.contextType=R.f;var G=(0,d.EN)(P)},27428:function(e,t,n){var r=n(6964),a=n(17347),i=n(52638),s=n(12527),o=n(96846),c=n(53803),l=n(27961),u=n(86755);async function m(e,t,n){const r=e.endpoint.merge(t,n);return l.ZP.githubtoken.value&&(r.headers.authorization=`token ${l.ZP.githubtoken.value}`),e(r)}async function d(){return l.ZP.githubtoken.value?{type:"token",tokenType:"pat",token:l.ZP.githubtoken.value}:{type:"unauthenticated"}}const h=()=>Object.assign(d.bind(null),{hook:m.bind(null)}),p=new class extends s.TypedEmitter{constructor(){super(),this.apiClient=void 0;const e=i.v.plugin(r.X,a.O);this.apiClient=new e({authStrategy:h,userAgent:"tgstation-server-control-panel/"+u.q4,baseUrl:"https://api.github.com",throttle:{onRateLimit:(e,t)=>(console.warn(`Request quota exhausted for request ${t.method} ${t.url}`),0===t.request.retryCount&&(console.log(`Retrying after ${e} seconds!`),!0)),onAbuseLimit:(e,t)=>{console.warn(`Abuse detected for request ${t.method} ${t.url}`)}}})}async getVersions({owner:e,repo:t,current:n,all:r}){let a,i=0;try{a=await this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:e,repo:t},((e,t)=>e.data.reduce(((e,a)=>{const s=/tgstation-server-v([\d.]+)/.exec(a.name??"");if(!s)return e;if("4"!==s[1][0]&&"5"!==s[1][0])return e;const o=s[1];let c=!1;if(o<=n){if(i>=3&&!r)return t(),e;i++,c=!0}return e.push({version:o,body:a.body??"",current:o===n,old:c}),e}),[])))}catch(e){return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new c.Z({code:c.G.OK,payload:a})}transformPR(e){return{number:e.number,title:e.title,author:e.user?.login??"ghost",state:e.merged_at?"merged":e.state,link:e.html_url,head:e.head.sha,tail:e.base.sha,testmergelabel:e.labels.some((e=>e.name?.toLowerCase().includes("testmerge")||e.name?.toLowerCase().includes("test merge")))}}async getPRs({owner:e,repo:t,wantedPRs:n}){let r=[];try{r=(await this.apiClient.paginate(this.apiClient.pulls.list,{owner:e,repo:t,state:"open"})).map(this.transformPR);for(const a of n??[])if(!r.find((e=>e.number==a))){const n=(await this.apiClient.pulls.get({owner:e,repo:t,pull_number:a})).data;r.push(this.transformPR(n))}}catch(e){return console.error(e),new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new c.Z({code:c.G.OK,payload:r})}async getPRCommits({owner:e,repo:t,pr:n,wantedCommit:r}){let a,i=[];try{if(i=await this.apiClient.paginate(this.apiClient.pulls.listCommits,{owner:e,repo:t,pull_number:n.number,per_page:100},(({data:e})=>e.map((e=>({name:e.commit.message.split("\n")[0],sha:e.sha,url:e.html_url}))))),i.reverse(),r&&!i.find((e=>e.sha===r))){const n=(await this.apiClient.repos.getCommit({owner:e,repo:t,ref:r})).data;a={name:n.commit.message.split("\n")[0],sha:n.sha,url:n.html_url}}}catch(e){return console.error(e),new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}return new c.Z({code:c.G.OK,payload:[i,a]})}async getFile(e,t,n,r){try{const{data:a}=await this.apiClient.repos.getContent({mediaType:{format:"base64"},owner:e,repo:t,path:n,ref:r});if(Array.isArray(a))return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:new Error(`${n} was a directory!`)})});if("file"!==a.type)return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:new Error(`${n} has type ${a.type}!`)})});const i=a.content;return new c.Z({code:c.G.OK,payload:i})}catch(e){return console.error(e),new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}}async getDirectoryContents(e,t,n){try{const{data:r}=await this.apiClient.repos.getContent({owner:e,repo:t,path:n});if(!Array.isArray(r))return new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:new Error(`${n} was not a directory!`)})});const a=[];return r.forEach((e=>a.push({path:e.path,isDirectory:"dir"==e.type}))),new c.Z({code:c.G.OK,payload:a})}catch(e){return console.error(e),new c.Z({code:c.G.ERROR,error:new o.ZP(o.jK.GITHUB_FAIL,{jsError:e})})}}};t.Z=p},56841:function(e,t,n){var r=n(51721),a=n(67294),i=n(97184),s=n(28752),o=n(75103),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(a.Component);c.Container=i.Z,c.Content=s.Z,c.Pane=o.Z,t.Z=c},97184:function(e,t,n){var r=n(67294),a=n(14289),i=n(24426),s=n(45017);t.Z=function(e){var t=(0,a.Ch)(e,{activeKey:"onSelect"}),n=t.id,o=t.generateChildId,c=t.onSelect,l=t.activeKey,u=t.transition,m=t.mountOnEnter,d=t.unmountOnExit,h=t.children,p=(0,r.useMemo)((function(){return o||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,o]),E=(0,r.useMemo)((function(){return{onSelect:c,activeKey:l,transition:u,mountOnEnter:m||!1,unmountOnExit:d||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[c,l,u,m,d,p]);return r.createElement(i.Z.Provider,{value:E},r.createElement(s.Z.Provider,{value:c||null},h))}},28752:function(e,t,n){var r=n(87462),a=n(63366),i=n(94184),s=n.n(i),o=n(67294),c=n(76792),l=["bsPrefix","as","className"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,u=void 0===i?"div":i,m=e.className,d=(0,a.Z)(e,l),h=(0,c.vE)(n,"tab-content");return o.createElement(u,(0,r.Z)({ref:t},d,{className:s()(m,h)}))}));t.Z=u},75103:function(e,t,n){var r=n(87462),a=n(63366),i=n(94184),s=n.n(i),o=n(67294),c=n(76792),l=n(24426),u=n(45017),m=n(41068),d=["activeKey","getControlledId","getControllerId"],h=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var p=o.forwardRef((function(e,t){var n=function(e){var t=(0,o.useContext)(l.Z);if(!t)return e;var n=t.activeKey,i=t.getControlledId,s=t.getControllerId,c=(0,a.Z)(t,d),h=!1!==e.transition&&!1!==c.transition,p=(0,u.h)(e.eventKey);return(0,r.Z)({},e,{active:null==e.active&&null!=p?(0,u.h)(n)===p:e.active,id:i(e.eventKey),"aria-labelledby":s(e.eventKey),transition:h&&(e.transition||c.transition||m.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),i=n.bsPrefix,p=n.className,E=n.active,f=n.onEnter,v=n.onEntering,w=n.onEntered,g=n.onExit,Z=n.onExiting,y=n.onExited,S=n.mountOnEnter,b=n.unmountOnExit,x=n.transition,R=n.as,k=void 0===R?"div":R,C=(n.eventKey,(0,a.Z)(n,h)),O=(0,c.vE)(i,"tab-pane");if(!E&&!x&&b)return null;var N=o.createElement(k,(0,r.Z)({},C,{ref:t,role:"tabpanel","aria-hidden":!E,className:s()(p,O,{active:E})}));return x&&(N=o.createElement(x,{in:E,onEnter:f,onEntering:v,onEntered:w,onExit:g,onExiting:Z,onExited:y,mountOnEnter:S,unmountOnExit:b},N)),o.createElement(l.Z.Provider,{value:null},o.createElement(u.Z.Provider,{value:null},N))}));p.displayName="TabPane",t.Z=p},85509:function(e,t,n){var r=n(87462),a=n(63366),i=n(67294),s=(n(55638),n(14289)),o=n(13361),c=n(23982),l=n(41244),u=n(97184),m=n(28752),d=n(75103),h=n(53439),p=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function E(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,s=t.tabClassName,o=t.id;return null==n?null:i.createElement(l.Z,{as:c.Z,eventKey:r,disabled:a,id:o,className:s},n)}var f=function(e){var t=(0,s.Ch)(e,{activeKey:"onSelect"}),n=t.id,c=t.onSelect,l=t.transition,f=t.mountOnEnter,v=t.unmountOnExit,w=t.children,g=t.activeKey,Z=void 0===g?function(e){var t;return(0,h.E)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(w):g,y=(0,a.Z)(t,p);return i.createElement(u.Z,{id:n,activeKey:Z,onSelect:c,transition:l,mountOnEnter:f,unmountOnExit:v},i.createElement(o.Z,(0,r.Z)({},y,{role:"tablist",as:"nav"}),(0,h.U)(w,E)),i.createElement(m.Z,null,(0,h.U)(w,(function(e){var t=(0,r.Z)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.createElement(d.Z,t)}))))};f.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},f.displayName="Tabs",t.Z=f}}]);
//# sourceMappingURL=747.8385480deaf7cc86f2f3.bundle.js.map