"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[404],{8425:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(7294),a=n(5171),s=n.n(a),i=n(7961);function o(e){return r.createElement(s(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function l(e){return i.ZP.showjson.value?r.createElement("div",{className:"text-left"},r.createElement(o,{obj:e.obj})):r.createElement(r.Fragment,null)}},1841:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(7977),s=n(4012);class i extends r.Component{render(){const e=this.props.user;return r.createElement(r.Fragment,null,e.systemIdentifier?r.createElement(a.Z,{variant:"primary",className:"mx-1"},r.createElement(s.Z,{id:"generic.system.short"})):r.createElement(a.Z,{variant:"primary",className:"mx-1"},r.createElement(s.Z,{id:"generic.tgs"})),e.enabled?r.createElement(a.Z,{variant:"success",className:"mx-1"},r.createElement(s.Z,{id:"generic.enabled"})):r.createElement(a.Z,{variant:"danger",className:"mx-1"},r.createElement(s.Z,{id:"generic.disabled"})),e.group?r.createElement(a.Z,{variant:"warning",className:"mx-1"},r.createElement(s.Z,{id:"generic.grouped"})):null)}}},1404:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(1436),a=n(98),s=n(2619),i=n(7814),o=n(7294),l=n(8375),c=n(5005),u=n(1555),d=n(2258),m=n(4716),h=n(2318),p=n(5293),E=n(4051),g=n(6841),Z=n(5509),f=n(3489),v=n(4012),b=n(8272),x=n(5977),w=n(3727),y=n(8509),N=n(6846),O=n(3803),C=n(6942),G=n(4803),S=n(4615);const P={};var A=n(6964),k=n(1320),j=n(3e3),K=n(8425),I=n(5855),R=n(1841);function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}class $ extends o.Component{constructor(e,t){if(super(e),this.createGroup=this.createGroup.bind(this),this.changeGroup=this.changeGroup.bind(this),!t.user)throw Error("UserEdit: this.context.user is null!");this.state={errors:[],loading:!0,saving:!1,permsadmin:{},permsinstance:{},tab:e.match.params.tab??"info",groups:t.user.group?[Object.assign({users:[]},t.user.group)]:[],renameGroup:null,renameGroupName:null,createGroupName:"",newOAuthConnections:[]},k.Mq.selecteduserid=parseInt(e.match.params.id),k.Mq.selectedusertab=e.match.params.tab}get canEdit(){return!!((0,A.Zg)(this.context.user).administrationRights&y.oj.WriteUsers)}get canRead(){return!!((0,A.Zg)(this.context.user).administrationRights&y.oj.ReadUsers)}get canEditOwnPassword(){const e=parseInt(this.props.match.params.id);return!!((0,A.Zg)(this.context.user).administrationRights&y.oj.EditOwnPassword)&&this.context.user.id===e}get canEditOwnOAuth(){const e=parseInt(this.props.match.params.id);return!!((0,A.Zg)(this.context.user).administrationRights&y.oj.EditOwnOAuthConnections)&&this.context.user.id===e}componentDidUpdate(e){e.match.params.tab!==this.props.match.params.tab&&this.setState({tab:this.props.match.params.tab??"info"})}async componentDidMount(){const e=parseInt(this.props.match.params.id),t=await C.Z.getUser(e);switch(t.code){case O.G.ERROR:this.addError(t.error);break;case O.G.OK:this.loadUser(t.payload)}await this.loadGroups(),this.setState({loading:!1})}async loadGroups(){if(!this.canRead)return;const e=await G.Z.listGroups({page:1,pageSize:100});if(e.code===O.G.OK){const t=[...e.payload.content];for(let n=2;n<=e.payload.totalPages;n++){const e=await G.Z.listGroups({page:n,pageSize:100});if(e.code===O.G.ERROR)return void this.addError(e.error);t.push(...e.payload.content)}this.setState({groups:t})}else this.addError(e.error)}loadUser(e){this.setState({user:e,newOAuthConnections:e.oAuthConnections?Array.from(e.oAuthConnections):[]}),this.loadEnums()}loadEnums(){Object.entries(y.oj).forEach((([e,t])=>{if(!isNaN(parseInt(e)))return;const n=e.toLowerCase(),r=t;if("none"==n)return;const a=!!((0,A.Zg)(this.state.user).administrationRights&r);this.setState((e=>({permsadmin:{...e.permsadmin,[n]:{currentVal:a,bitflag:r}}})))})),Object.entries(y.c2).forEach((([e,t])=>{if(!isNaN(parseInt(e)))return;const n=e.toLowerCase(),r=t;if("none"==n)return;const a=!!((0,A.Zg)(this.state.user).instanceManagerRights&r);this.setState((e=>({permsinstance:{...e.permsinstance,[n]:{currentVal:a,bitflag:r}}})))}))}addError(e){this.setState((t=>{const n=Array.from(t.errors);return n.push(e),{errors:n}}))}render(){if(this.state.loading)return o.createElement(I.Z,{text:"loading.user.load"});if(this.state.saving)return o.createElement(I.Z,{text:"loading.user.save"});return o.createElement("div",{className:"text-center"},o.createElement(K.t,{obj:this.state.user}),this.state.errors.map(((e,t)=>{if(e)return o.createElement(j.ZP,{key:t,error:e,onClose:()=>this.setState((e=>{const n=Array.from(e.errors);return n[t]=void 0,{errors:n}}))})})),this.state.user?o.createElement(o.Fragment,null,this.canEdit?"":o.createElement(l.Z,{className:"clearfix",variant:"error"},o.createElement(v.Z,{id:"view.user.edit.cantedit"})),o.createElement(R.Z,{user:this.state.user}),o.createElement("h3",{className:"text-capitalize"},this.state.user.name),o.createElement(c.Z,{as:w.rU,to:k.$w.userlist.link??k.$w.userlist.route},o.createElement(v.Z,{id:"generic.goback"})),o.createElement(Z.Z,{activeKey:this.state.tab,onSelect:e=>{e&&(k.Mq.selectedusertab=e,P.setupMode||this.props.history.push(k.$w.useredit.link??k.$w.useredit.route),this.setState({tab:e}))},id:"test",className:"justify-content-center mb-3 mt-4 flex-column flex-md-row"},o.createElement(g.Z,{eventKey:"info",title:o.createElement(v.Z,{id:"generic.info"})},o.createElement(u.Z,{lg:5,className:"text-center text-md-left mx-auto"},o.createElement(E.Z,{xs:1,md:2},o.createElement(u.Z,null,o.createElement("h5",{className:"m-0"},o.createElement(v.Z,{id:"generic.userid"}))),o.createElement(u.Z,{className:"text-capitalize mb-2"},this.state.user.id)),this.state.user.systemIdentifier?o.createElement(E.Z,{xs:1,md:2},o.createElement(u.Z,null,o.createElement("h5",{className:"m-0"},o.createElement(v.Z,{id:"generic.systemidentifier"}))),o.createElement(u.Z,{className:"mb-2 text-sm-break"},this.state.user.systemIdentifier)):"",o.createElement(E.Z,{xs:1,md:2},o.createElement(u.Z,null,o.createElement("h5",{className:"m-0"},o.createElement(v.Z,{id:"generic.enabled"}))),o.createElement(u.Z,{className:"text-capitalize mb-2"},this.state.user.enabled.toString())),o.createElement(E.Z,{xs:1,md:2},o.createElement(u.Z,null,o.createElement("h5",{className:"m-0"},o.createElement(v.Z,{id:"generic.created"}))),o.createElement(p.Z,{overlay:o.createElement(f.Z,{id:`${this.state.user.name}-tooltip`},new Date(this.state.user.createdAt).toLocaleString())},(({ref:e,...t})=>o.createElement(u.Z,U({className:"text-capitalize mb-2"},t),o.createElement("span",{ref:e},o.createElement(b.Z,{value:(new Date(this.state.user.createdAt).getTime()-Date.now())/1e3,numeric:"auto",updateIntervalInSeconds:1})))))),o.createElement(E.Z,{xs:1,md:2},o.createElement(u.Z,null,o.createElement("h5",{className:"m-0"},o.createElement(v.Z,{id:"generic.createdby"}))),o.createElement(p.Z,{overlay:o.createElement(f.Z,{id:`${this.state.user.name}-tooltip-createdby`},o.createElement(v.Z,{id:"generic.userid"}),this.state.user.createdBy.id)},(({ref:e,...t})=>o.createElement(u.Z,U({className:"text-capitalize mb-2"},t),o.createElement("span",{ref:e},this.state.user.createdBy.name))))),o.createElement("div",{className:"text-center mt-3"},this.canEdit||this.canEditOwnPassword?o.createElement(c.Z,{className:"mr-2",as:w.rU,to:(k.$w.passwd.link??k.$w.passwd.route)+this.state.user.id.toString()},o.createElement(v.Z,{id:"routes.passwd"})):"",this.canEdit?o.createElement(c.Z,{variant:this.state.user.enabled?"danger":"success",onClick:async()=>{this.setState({saving:!0});const e=await C.Z.editUser({enabled:!this.state.user.enabled,id:this.state.user.id});e.code==O.G.OK?this.loadUser(e.payload):this.addError(e.error),this.setState({saving:!1})}},o.createElement(v.Z,{id:this.state.user.enabled?"generic.disable":"generic.enable"})):""))),o.createElement(g.Z,{eventKey:"adminperms",title:o.createElement(v.Z,{id:"perms.admin"})},this.renderPerms("permsadmin","admin")),o.createElement(g.Z,{eventKey:"instanceperms",title:o.createElement(v.Z,{id:"perms.instance"})},this.renderPerms("permsinstance","instance")),o.createElement(g.Z,{eventKey:"group",title:o.createElement(v.Z,{id:"perms.group"})},this.renderGroups()),this.renderOAuth())):"")}renderOAuth(){const e=this.context.serverInfo.oAuthProviderInfos,t=this.state.newOAuthConnections??this.state.user?.oAuthConnections;if("admin"===this.state.user?.name.toLowerCase()||null==t||!e||!Object.keys(e).length)return null;const n=this.canEdit||this.canEditOwnOAuth,r=this.state.newOAuthConnections.filter((t=>!!e[t.provider]));return o.createElement(g.Z,{eventKey:"oauth",title:o.createElement(v.Z,{id:"view.user.edit.oauth.connections"})},o.createElement("h3",{className:"mb-3"},o.createElement(v.Z,{id:"view.user.edit.oauth.current"})),o.createElement("div",null,r.map(((t,r)=>o.createElement("div",{className:"justify-content-center d-flex",key:r},o.createElement(h.Z,{className:"w-75 mb-1"},o.createElement(h.Z.Prepend,null,o.createElement(h.Z.Text,null,o.createElement("span",null,o.createElement(v.Z,{id:"view.user.edit.oauth.provider"})))),o.createElement(d.Z.Control,{className:"flex-grow-1 flex-md-grow-0 w-50 w-md-auto ",as:"select",custom:!0,disabled:!n,onChange:e=>{const t=e.target.value;this.setState((e=>({newOAuthConnections:e.newOAuthConnections.map(((e,n)=>n!==r?e:{...e,provider:t}))})))}},Object.keys(e).map((e=>o.createElement(v.Z,{key:e,id:`view.user.edit.oauth.provider.${e.toLowerCase()}`},(n=>o.createElement("option",{value:e,selected:t.provider===e},n)))))),o.createElement(h.Z.Text,{className:"rounded-0"},o.createElement(v.Z,{id:"view.user.edit.oauth.id"})),o.createElement(m.Z,{className:"",value:t.externalUserId,onChange:e=>{const t=e.target.value;this.setState((e=>({newOAuthConnections:e.newOAuthConnections.map(((e,n)=>n!==r?e:{...e,externalUserId:t}))})))},disabled:!n}),o.createElement(h.Z.Append,{className:""},o.createElement(c.Z,{variant:"danger",className:"text-darker",hidden:!n,onClick:()=>{this.setState((e=>({newOAuthConnections:e.newOAuthConnections.filter(((e,t)=>r!==t))})))}},o.createElement("div",null,o.createElement(i.G,{icon:s.$}))))))))),n?o.createElement("div",{className:"text-center mt-3"},o.createElement(c.Z,{className:"mr-2",onClick:()=>{this.setState((t=>({newOAuthConnections:[...t.newOAuthConnections,{provider:Object.keys(e)[0],externalUserId:""}]})))}},o.createElement(v.Z,{id:"view.user.edit.oauth.add"})),o.createElement(c.Z,{onClick:async()=>{if(this.setState({saving:!0}),!this.state.user)return void this.addError(new N.ZP(N.jK.APP_FAIL,{jsError:Error("this.state.user is null in user edit save")}));const e=await C.Z.editUser({id:this.state.user.id,oAuthConnections:this.state.newOAuthConnections});e.code==O.G.OK?this.loadUser(e.payload):this.addError(e.error),this.setState({saving:!1})},variant:"success",disabled:this.state.newOAuthConnections.some((e=>0===e.externalUserId.trim().length))||this.state.newOAuthConnections.every(((e,t)=>e.externalUserId===(this.state.user?.oAuthConnections??[])[t]?.externalUserId&&e.provider===(this.state.user?.oAuthConnections??[])[t]?.provider))&&this.state.newOAuthConnections.length===this.state.user?.oAuthConnections?.length},o.createElement(v.Z,{id:"generic.savetab"}))):"")}renderGroups(){return this.state.user&&this.state.groups?o.createElement("div",null,this.canRead?null:o.createElement(l.Z,{className:"clearfix",variant:"error"},o.createElement(v.Z,{id:"perms.group.cantlist"})),o.createElement("h3",{className:"mb-3"},o.createElement(v.Z,{id:"perms.group.current"}),this.state.user.group?this.state.user.group.name:o.createElement(v.Z,{id:"perms.group.none"})),o.createElement("div",{onChange:this.state.renameGroup?void 0:this.changeGroup},o.createElement(h.Z,{className:"justify-content-center mb-3",as:"label",htmlFor:"group_none"},o.createElement(h.Z.Prepend,null,o.createElement(h.Z.Radio,{id:"group_none",name:"group",defaultChecked:void 0===this.state.user.group?.id,disabled:!this.canEdit})),o.createElement(h.Z.Append,{className:"w-40 overflow-auto"},o.createElement(h.Z.Text,{className:"flex-fill"},o.createElement(v.Z,{id:"perms.group.none"})))),this.state.groups.map((e=>o.createElement(h.Z,{className:"justify-content-center mb-1",key:e.id},o.createElement(h.Z.Prepend,null,o.createElement(h.Z.Radio,{id:"group-"+e.id.toString(),name:"group",defaultChecked:this.state.user.group?.id===e.id,disabled:!this.canEdit})),o.createElement(h.Z.Append,{className:"w-40 overflow-auto"},this.state.renameGroup!==e?o.createElement(o.Fragment,null,o.createElement(h.Z.Text,{className:"flex-fill",as:"label",htmlFor:"group-"+e.id.toString()},o.createElement("span",null,e.name),o.createElement("div",{className:"text-right ml-auto"},o.createElement(v.Z,{id:"generic.numusers",values:{count:this.canRead?e.users?.length:"???"}}))),o.createElement(p.Z,{overlay:o.createElement(f.Z,{id:`${e.id}-rename-tooltip`},o.createElement(v.Z,{id:"perms.group.rename.tooltip"}))},(({ref:t,...n})=>o.createElement(c.Z,U({variant:"secondary",className:"text-darker",disabled:!this.canEdit,onClick:()=>this.setState({renameGroup:e,renameGroupName:e.name})},n),o.createElement("div",{ref:t},o.createElement(i.G,{icon:r.IwR}))))),o.createElement(p.Z,{overlay:o.createElement(f.Z,{id:`${e.id}-delete-tooltip`},o.createElement(v.Z,{id:"perms.group.delete.tooltip"})),show:!!(e.users?.length&&this.canEdit||e.id===this.state.user.group?.id)&&void 0},(({ref:t,...n})=>o.createElement(c.Z,U({variant:"danger",className:"text-darker",disabled:!!e.users?.length||!this.canEdit||e.id===this.state.user.group?.id,onClick:()=>{this.deleteGroup(e.id)}},n),o.createElement("div",{ref:t},o.createElement(i.G,{icon:s.$})))))):o.createElement(o.Fragment,null,o.createElement("input",{className:"flex-fill",value:this.state.renameGroupName,onChange:e=>{this.setState({renameGroupName:e.target.value})}}),o.createElement(c.Z,{variant:"success",className:"text-darker",onClick:()=>{this.renameGroup()}},o.createElement(i.G,{icon:r.LEp})),o.createElement(c.Z,{variant:"danger",className:"text-darker",onClick:()=>this.setState({renameGroup:null,renameGroupName:null})},o.createElement(i.G,{icon:r.NBC})))))))),o.createElement(h.Z,{className:"justify-content-center mb-1 mt-5"},o.createElement(h.Z.Prepend,null,o.createElement(c.Z,{variant:"primary",onClick:this.createGroup,disabled:!this.canEdit||!this.state.createGroupName.length},o.createElement(i.G,{icon:a.r8}))),o.createElement(m.Z,{className:"w-40 overflow-auto flex-grow-0",value:this.state.createGroupName,onChange:e=>{this.setState({createGroupName:e.target.value})},disabled:!this.canEdit}))):o.createElement(j.ZP,{error:new N.ZP(N.jK.APP_FAIL,{jsError:Error("Assertion failed, user or group is null")})})}async changeGroup(e){if(!this.state.user)return void this.addError(new N.ZP(N.jK.APP_FAIL,{jsError:Error("this.state.user is null in changegroup")}));this.setState({loading:!0});const t=e.target.id;if("group_none"===t){const e=await C.Z.editUser({id:this.state.user.id,permissionSet:(0,A.Zg)(this.state.user)});e.code===O.G.OK?(await this.loadGroups(),this.loadUser(e.payload)):this.addError(e.error)}else{const e=parseInt(t.substr(6)),n=await C.Z.editUser({id:this.state.user.id,group:{id:e}});n.code===O.G.OK?(await this.loadGroups(),this.loadUser(n.payload)):this.addError(n.error)}this.setState({loading:!1})}async renameGroup(){const e=this.state.renameGroup,t=this.state.renameGroupName;if(!e||!(t&&t.trim().length>0))return;this.setState({loading:!0});const n=await G.Z.updateGroup({id:e.id,name:t});n.code===O.G.OK?this.setState((t=>{const r=[...t.groups];return r[r.findIndex((t=>t.id===e.id))]=n.payload,{groups:r,renameGroup:null,renameGroupName:null}})):this.addError(n.error),this.setState({loading:!1})}async deleteGroup(e){this.setState({loading:!0});const t=await G.Z.deleteGroup(e);t.code===O.G.OK?this.setState((t=>({groups:t.groups.filter((t=>t.id!==e))}))):this.addError(t.error),this.setState({loading:!1})}async createGroup(){this.setState({loading:!0});const e=await G.Z.createGroup(this.state.createGroupName,(0,A.Zg)(this.state.user));e.code===O.G.OK?this.setState((t=>({groups:t.groups.concat([e.payload])}))):this.addError(e.error),this.setState({loading:!1})}renderPerms(e,t){const n={},r=(e,t,n)=>{e.current&&t.current&&(e.current.checked!==n?t.current.classList.add("font-weight-bold"):t.current.classList.remove("font-weight-bold"))},a=t=>()=>{for(const[a,s]of Object.entries(n)){if(!s.input.current)return;s.input.current.checked=t,r(s.input,s.field,this.state[e][a].currentVal)}};return o.createElement(o.Fragment,null,this.state.user?.group?o.createElement(l.Z,{variant:"warning"},o.createElement(v.Z,{id:"perms.group.warning",values:{group:`${this.state.user.group.name} (${this.state.user.group.id})`}})):null,this.canEdit?o.createElement(o.Fragment,null,o.createElement("h5",null,o.createElement(v.Z,{id:"generic.setall"})),o.createElement(c.Z,{onClick:a(!0)},o.createElement(v.Z,{id:"generic.true"}))," ",o.createElement(c.Z,{onClick:a(!1)},o.createElement(v.Z,{id:"generic.false"}))," ",o.createElement(c.Z,{onClick:()=>{for(const[t,a]of Object.entries(n))a.input.current&&(a.input.current.checked=this.state[e][t].currentVal,r(a.input,a.field,this.state[e][t].currentVal))}},o.createElement(v.Z,{id:"generic.reset"}))):"",o.createElement(u.Z,{md:8,lg:7,xl:6,className:"mx-auto"},o.createElement("hr",null),Object.entries(this.state[e]).map((([a,s])=>{const l=o.createRef(),c=o.createRef();return n[a]={input:l,field:c},o.createElement(h.Z,{key:a,as:"label",htmlFor:a,className:"mb-0"},o.createElement(h.Z.Prepend,{className:"flex-grow-1 overflow-auto"},o.createElement(p.Z,{overlay:o.createElement(f.Z,{id:`perms.${t}.${a}.desc`},o.createElement(v.Z,{id:`perms.${t}.${a}.desc`}))},(({ref:n,...u})=>o.createElement(h.Z.Text,{className:"flex-fill",ref:c},o.createElement("div",u,o.createElement(v.Z,{id:`perms.${t}.${a}`})),o.createElement("div",{className:"ml-auto d-flex align-items-center"},o.createElement(d.Z.Check,{inline:!0,type:"switch",custom:!0,id:`${e}.${a}`,className:"d-flex justify-content-center align-content-center mx-2",label:"",ref:l,disabled:!this.canEdit,defaultChecked:s.currentVal,onChange:()=>{r(l,c,s.currentVal)}}),o.createElement("div",U({},u,{ref:n}),o.createElement(i.G,{fixedWidth:!0,icon:"info"}))))))))})),o.createElement("hr",null)),this.canEdit?o.createElement(c.Z,{onClick:async()=>{this.setState({saving:!0});let t=0;for(const[r,a]of Object.entries(n))a.input.current&&(t+=a.input.current.checked?this.state[e][r].bitflag:0);if(this.state.user){if(this.state.user.group){const n=Object.assign(Object.assign({},this.state.user.group.permissionSet),{["permsadmin"==e?"AdministrationRights":"InstanceManagerRights"]:t}),r=await G.Z.updateGroup({id:this.state.user.group.id,permissionSet:n});if(r.code==O.G.OK){const e=await C.Z.getUser(this.state.user.id);e.code==O.G.OK?this.loadUser(e.payload):this.addError(e.error)}else this.addError(r.error)}else{const n=Object.assign(Object.assign({},this.state.user.permissionSet),{["permsadmin"==e?"AdministrationRights":"InstanceManagerRights"]:t}),r=await C.Z.editUser({id:this.state.user.id,permissionSet:n});r.code==O.G.OK?this.loadUser(r.payload):this.addError(r.error)}this.setState({saving:!1})}else this.addError(new N.ZP(N.jK.APP_FAIL,{jsError:Error("this.state.user is null in user edit save")}))}},o.createElement(v.Z,{id:"generic.savetab"})):"")}}$.contextType=S.f;var T=(0,x.EN)($)},7977:function(e,t,n){var r=n(7462),a=n(3366),s=n(4184),i=n.n(s),o=n(7294),l=n(6792),c=["bsPrefix","variant","pill","className","as"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,u=e.pill,d=e.className,m=e.as,h=void 0===m?"span":m,p=(0,a.Z)(e,c),E=(0,l.vE)(n,"badge");return o.createElement(h,(0,r.Z)({ref:t},p,{className:i()(d,E,u&&E+"-pill",s&&E+"-"+s)}))}));u.displayName="Badge",u.defaultProps={pill:!1},t.Z=u},2318:function(e,t,n){var r=n(3366),a=n(7462),s=n(4184),i=n.n(s),o=n(7294),l=n(4680),c=n(6792),u=["bsPrefix","size","hasValidation","className","as"],d=(0,l.Z)("input-group-append"),m=(0,l.Z)("input-group-prepend"),h=(0,l.Z)("input-group-text",{Component:"span"}),p=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,l=e.hasValidation,d=e.className,m=e.as,h=void 0===m?"div":m,p=(0,r.Z)(e,u);return n=(0,c.vE)(n,"input-group"),o.createElement(h,(0,a.Z)({ref:t},p,{className:i()(d,n,s&&n+"-"+s,l&&"has-validation")}))}));p.displayName="InputGroup",p.Text=h,p.Radio=function(e){return o.createElement(h,null,o.createElement("input",(0,a.Z)({type:"radio"},e)))},p.Checkbox=function(e){return o.createElement(h,null,o.createElement("input",(0,a.Z)({type:"checkbox"},e)))},p.Append=d,p.Prepend=m,t.Z=p},4051:function(e,t,n){var r=n(7462),a=n(3366),s=n(4184),i=n.n(s),o=n(7294),l=n(6792),c=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,d=e.noGutters,m=e.as,h=void 0===m?"div":m,p=(0,a.Z)(e,c),E=(0,l.vE)(n,"row"),g=E+"-cols",Z=[];return u.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&Z.push(""+g+r+"-"+t)})),o.createElement(h,(0,r.Z)({ref:t},p,{className:i().apply(void 0,[s,E,d&&"no-gutters"].concat(Z))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.Z=d},6841:function(e,t,n){var r=n(1721),a=n(7294),s=n(7184),i=n(8752),o=n(5103),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(a.Component);l.Container=s.Z,l.Content=i.Z,l.Pane=o.Z,t.Z=l},7184:function(e,t,n){var r=n(7294),a=n(4289),s=n(4426),i=n(5017);t.Z=function(e){var t=(0,a.Ch)(e,{activeKey:"onSelect"}),n=t.id,o=t.generateChildId,l=t.onSelect,c=t.activeKey,u=t.transition,d=t.mountOnEnter,m=t.unmountOnExit,h=t.children,p=(0,r.useMemo)((function(){return o||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,o]),E=(0,r.useMemo)((function(){return{onSelect:l,activeKey:c,transition:u,mountOnEnter:d||!1,unmountOnExit:m||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[l,c,u,d,m,p]);return r.createElement(s.Z.Provider,{value:E},r.createElement(i.Z.Provider,{value:l||null},h))}},8752:function(e,t,n){var r=n(7462),a=n(3366),s=n(4184),i=n.n(s),o=n(7294),l=n(6792),c=["bsPrefix","as","className"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,s=e.as,u=void 0===s?"div":s,d=e.className,m=(0,a.Z)(e,c),h=(0,l.vE)(n,"tab-content");return o.createElement(u,(0,r.Z)({ref:t},m,{className:i()(d,h)}))}));t.Z=u},5103:function(e,t,n){var r=n(7462),a=n(3366),s=n(4184),i=n.n(s),o=n(7294),l=n(6792),c=n(4426),u=n(5017),d=n(9280),m=["activeKey","getControlledId","getControllerId"],h=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var p=o.forwardRef((function(e,t){var n=function(e){var t=(0,o.useContext)(c.Z);if(!t)return e;var n=t.activeKey,s=t.getControlledId,i=t.getControllerId,l=(0,a.Z)(t,m),h=!1!==e.transition&&!1!==l.transition,p=(0,u.h)(e.eventKey);return(0,r.Z)({},e,{active:null==e.active&&null!=p?(0,u.h)(n)===p:e.active,id:s(e.eventKey),"aria-labelledby":i(e.eventKey),transition:h&&(e.transition||l.transition||d.Z),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),s=n.bsPrefix,p=n.className,E=n.active,g=n.onEnter,Z=n.onEntering,f=n.onEntered,v=n.onExit,b=n.onExiting,x=n.onExited,w=n.mountOnEnter,y=n.unmountOnExit,N=n.transition,O=n.as,C=void 0===O?"div":O,G=(n.eventKey,(0,a.Z)(n,h)),S=(0,l.vE)(s,"tab-pane");if(!E&&!N&&y)return null;var P=o.createElement(C,(0,r.Z)({},G,{ref:t,role:"tabpanel","aria-hidden":!E,className:i()(p,S,{active:E})}));return N&&(P=o.createElement(N,{in:E,onEnter:g,onEntering:Z,onEntered:f,onExit:v,onExiting:b,onExited:x,mountOnEnter:w,unmountOnExit:y},P)),o.createElement(c.Z.Provider,{value:null},o.createElement(u.Z.Provider,{value:null},P))}));p.displayName="TabPane",t.Z=p},5509:function(e,t,n){var r=n(7462),a=n(3366),s=n(7294),i=(n(5638),n(4289)),o=n(3361),l=n(3982),c=n(1244),u=n(7184),d=n(8752),m=n(5103),h=n(3439),p=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function E(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,i=t.tabClassName,o=t.id;return null==n?null:s.createElement(c.Z,{as:l.Z,eventKey:r,disabled:a,id:o,className:i},n)}var g=function(e){var t=(0,i.Ch)(e,{activeKey:"onSelect"}),n=t.id,l=t.onSelect,c=t.transition,g=t.mountOnEnter,Z=t.unmountOnExit,f=t.children,v=t.activeKey,b=void 0===v?function(e){var t;return(0,h.E)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(f):v,x=(0,a.Z)(t,p);return s.createElement(u.Z,{id:n,activeKey:b,onSelect:l,transition:c,mountOnEnter:g,unmountOnExit:Z},s.createElement(o.Z,(0,r.Z)({},x,{role:"tablist",as:"nav"}),(0,h.U)(f,E)),s.createElement(d.Z,null,(0,h.U)(f,(function(e){var t=(0,r.Z)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,s.createElement(m.Z,t)}))))};g.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},g.displayName="Tabs",t.Z=g}}]);
//# sourceMappingURL=404.c2d9391d39e1a1f29eb4.bundle.js.map