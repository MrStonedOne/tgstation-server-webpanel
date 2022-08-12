"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[422],{2422:function(e){e.exports=JSON.parse('{"routes.home":"Home","routes.user_manager":"User Manager","routes.login":"Log In","routes.admin":"Administration","routes.admin.update":"TGS Update","routes.admin.logs":"TGS Logs","routes.config":"Configuration","routes.passwd":"Change Password","routes.usermanager":"Users","routes.useredit":"User Editor","routes.usercreate":"Create User","routes.instancelist":"Instances","routes.instancecreate":"Add New Instance","routes.instanceedit":"Edit Instance","routes.instancejobs":"Jobs","routes.setup":"PostInstall Setup","routes.info":"Info","login.header":"Login to Continue","login.type.generic":"Password Login","login.type.oauth":"OAuth Login","login.oauth":"Sign in with {provider}","login.submit":"Login","login.password":"Password","login.password.repeat":"Confirm Password","login.password.repeat.match":"Passwords do not match!","login.password.repeat.short":"Password is too short! It must have a length of atleast ","login.title":"Login","login.username":"Username","navbar.home":"Home","navbar.purgecache":"Purge Client Cache","navbar.refresh":"Refresh","navbar.logout":"Logout","app.job.started":"Started: ","app.job.startedby":"Started By: ","app.job.stopped":"Stopped: ","app.job.stoppedby":"Stopped By: ","error.http.access_denied.desc":"Access to this resource is denied","error.unhandled_response.desc":"The application received an unexpected response","error.unhandled_global_response.desc":"The application received an unexpected global response","error.login.no_creds.desc":"Attempted to login without any credentials","error.login.bad_oauth":"An error occurred while logging in using OAuth","error.login.bad_user_pass.desc":"Invalid credentials!","error.login.user_disabled.desc":"This user account is disabled","error.user.no_sys_ident.desc":"This system user was not found","error.user.not_found.desc":"This TGS user was not found","error.http.bad_request":"Bad Request","error.http.data_integrity":"A data integrity check failed while performing the operation","error.http.api_mismatch":"API version mismatch","error.http.server_error":"BUG: Server error","error.http.unimplemented":"This feature is unimplemented.","error.http.server_not_ready":"The server is still starting/stoping!","error.http.access_denied":"Access denied","error.http.not_acceptable":"BUG: The server has found the request to be unacceptable.","error.axios":"Axios error","error.unhandled_response":"The application received an unexpected response","error.unhandled_global_response":"The application received an unexpected global response","error.login.no_creds":"Attempted to login without any credentials","error.login.bad_user_pass":"Invalid credentials!","error.login.user_disabled":"This user account is disabled","error.login.rate_limit":"Failed to login using external provider due to rate limiting. Please try again later","error.user.no_sys_ident":"This system user was not found","error.user.not_found":"This TGS user was not found","error.group.not_found":"The requested group cannot be found.","error.group.not_empty":"The requested group cannot be deleted as it contains users.","error.admin.rate":"The server has exceeded github\'s rate limiting. Please try again later.","error.admin.error":"The server has ran into an error while using github\'s API.","error.admin.watchdog.avail":"This operation is unavailable due to the launch configuration of TGS.","error.admin.update.notfound":"This TGS version does not seem to exist.","error.admin.logs.io":"An IO error occured while processing logs","error.somethingwentwrong":"Uh oh.... Something went wrong!","error.notfound":"This page has not been found!","error.github":"An error occured while interacting with the Github API","error.app":"An error occured in the application","error.app.undefined":"A \\"Ghost\\" error occured in the application","error.job.not_found":"The specified job could not be found","error.job.complete":"Unable to delete the job, perhaps it already completed","error.transfer.not_available":"Unable to transfer file as it is no longer or never was valid","error.transfer.upload_failed":"An error occured while uploading a file","error.no_db_entity":"The database entity for the requested instance could not be retrieved. The instance was likely detached","error.api.empty":"No description available","error.no_apipath":"No API path set, set an API path on the configuration page.","error.compile_job_not_found":"Compile job not found.","generic.save":"Save","generic.savepage":"Save Page","generic.saveall":"Save All","generic.details":"Details","generic.errordetails":"Error Details ({info})","generic.debugwarn":"Be careful to censor out any credentials or tokens when copying errors!","generic.close":"Close","generic.goback":"Go Back","generic.accessdenied":"This user does not have access to this page. ","generic.persist":"Persist","generic.continue":"Continue","generic.view":"View","generic.download":"Download","generic.name":"Name","generic.datetime":"Date/Time","generic.entry":"Entry","generic.action":"Action","generic.createdby":"Created By","generic.created":"Created","generic.disabled":"Disabled","generic.enabled":"Enabled","generic.grouped":"Grouped","generic.tgs":"TGS","generic.group":"Group","generic.groupid":"Group ID {id}","generic.info":"Info","generic.system.short":"SYSTEM","generic.edit":"Edit","generic.systemidentifier":"System Identifier","generic.appname":"tgstation-server","generic.userid":"User ID ","generic.numusers":"{count} Users","generic.setall":"Set all","generic.true":"True","generic.false":"False","generic.reset":"Reset","generic.disable":"Disable","generic.enable":"Enable","generic.configmode":"Configuration Mode","generic.online":"Online","generic.offline":"Offline","generic.path":"Path","generic.select":"Select","generic.instance":"Instance","generic.goto.title":"Go to page","generic.goto":"Goto","generic.wip":"Work In Progress!","generic.readonly":"(Read-Only)","generic.invalid_form":"This form contains invalid values!","generic.no_perm":"You do not have the permission to do this","generic.wip.desc":"The TGS webpanel is still a work in progress. The feature you are trying to use is not yet available. Until it becomes available, please use the TGS desktop client at ","generic.assert.noinstance":"No instance. Perhaps an error occured.","generic.assert.nouser":"No user. Perhaps an error occured.","generic.assert.nopermissionset":"No permission set. Perhaps an error occured.","generic.latest":"Latest","generic.testmerged":"Testmerged","generic.commit":"Commit","generic.areyousure":"Are you sure?","generic.cancel":"Cancel","view.setup.navigationblock":"Navigation has been disabled for the duration of the setup.","view.setup.title":"Step By Step Setup Wizard","view.setup.quit":"Quit Setup","view.setup.quitconfirm":"Are you sure you want to exit the setup? You will not be able to return.","view.setup.disableadmin":"Disable default Admin account","view.setup.nextpage":"Next Page","view.setup.step.1":"Step 1. Create yourself a user account","view.setup.step.2":"Step 2. Login using your new user account","view.setup.step.3":"Step 3. Disable the default Admin account","view.setup.step.4":"Step 4. Configure clientside settings (Optional)","view.setup.step.5":"Setup Complete!","view.admin.hostos":"Host Machine OS: ","view.admin.remote":"Remote repository: ","view.admin.version.current":"Current Version: ","view.admin.version.latest":"Latest Version: ","view.admin.reboot.button":"Restart TGS","view.admin.reboot.modal.title":"Confirmation","view.admin.reboot.modal.body":"Are you sure you wish to restart TGS?","view.admin.update.button":"Update TGS","view.admin.update.selectversion":"Select Version","view.admin.update.latest":" (Latest)","view.admin.update.current":" (Current)","view.admin.update.releasenotes":"Release Notes","view.admin.update.wait":"Please take the time to read the release notes before proceeding","view.admin.update.showall":"Show all versions","view.admin.logs.button":"TGS Logs","view.user.list.cantlist":"This user does not have the permission to list users, only the current user is listed/editable.","view.user.edit.cantedit":"This user does not have the permission to edit users.","view.user.edit.oauth.connections":"OAuth Connections","view.user.edit.oauth.current":"OAuth 2.0 Connections","view.user.edit.oauth.add":"Add Connection","view.user.edit.oauth.id":"Service User ID:","view.user.edit.oauth.provider":"Provider","view.user.edit.oauth.provider.discord":"Discord","view.user.edit.oauth.provider.github":"GitHub","view.user.edit.oauth.provider.tgforums":"/tg/ Forums","view.user.edit.oauth.provider.keycloak":"Keycloak","view.user.edit.oauth.provider.invisioncommunity":"Invision Community","view.user.passwd.title":"Editing password for ","view.user.create.tgs":"Create user with TGS identifier","view.user.create.sys":"Create user with system identifier","view.instance.no_metadata":"You do not have the permission to read all settings, only editable fields will be shown. Said fields will only contain default values.","view.instanceedit.title":"Editing Instance {instancename}({instanceid})","view.instanceedit.tabs.info":"Information","view.instanceedit.tabs.repository":"Repository","view.instanceedit.tabs.deployment":"Deployment","view.instanceedit.tabs.dd":"Server","view.instanceedit.tabs.byond":"BYOND version","view.instanceedit.tabs.chatbots":"Chat Bots","view.instanceedit.tabs.files":"Files & Scripts","view.instanceedit.tabs.users":"Permissions","view.instanceedit.tabs.jobs":"Jobs History","view.instanceedit.tabs.config":"Config","view.instance.create.loading":"Creating Instance...","view.instance.create.title":"New Instance","view.instance.create.name":"Name","view.instance.create.path":"Path on Server","view.instance.create.path.prefix":"Prefix:","view.instance.create.submit":"Create Instance","view.instance.list.title":"Instance List","view.instance.list.set.online":"Set Online","view.instance.list.set.offline":"Set Offline","view.instance.configmode.0":"Disabled","view.instance.configmode.1":"Authorized users can read/write","view.instance.configmode.2":"Authorized users can read/write using their system user","view.instance.jobs.title":"Job list","view.instance.jobs.jobtotal":"{amount} jobs","view.instance.jobs.error":"An error occured","view.instance.moving":"[MOVING INSTANCE...]","view.instance.config.instancesettings":"Instance Settings","view.instance.config.instanceusers":"Instance Users","view.instance.config.chatbots":"Chat Bots","view.instance.byond":"Version Selector","view.instance.byond.add":"Install new BYOND version","view.instance.byond.upload":"Upload custom version","view.instance.byond.custom":"Uploaded from zip file","view.instance.byond.current_and_list_denied":"This user does not have the permission to access information about BYOND versions","view.instance.byond.list_denied":"This user does not have the permission to list all installed BYOND versions","view.instance.byond.current_denied":"This user does not have the permission to see the active BYOND version","view.instance.byond.current_version":"Active Version: {version}","view.instance.server.status":"Status: ","view.instance.server.status.Offline":"Offline","view.instance.server.status.Restoring":"Restoring","view.instance.server.status.Online":"Online","view.instance.server.status.DelayedRestart":"Delayed Restart","view.instance.server.status.undefined":"No permission","view.instance.server.settings":"Settings","view.instance.server.actions":"Actions","view.instance.server.start":"Start","view.instance.server.stop":"Stop","view.instance.server.restart":"Restart","view.instance.server.dump":"Dump Process","view.instance.server.deployment_info":"Deployment Information","view.instance.server.no_metadata_and_no_settings":"You do not have the permission to list or edit Dream Daemon settings for this instance.","view.instance.server.no_metadata_actions":"You do not have permission to fetch the status of the server, some actions may not work depending on the state of the server.","view.instance.server.no_metadata_graceful":"You do not have permission to fetch the current graceful action.","view.instance.server.no_graceful":"You do not have permission to get or set the current graceful action.","view.instance.server.no_actions":"You do not have permission to commit any actions.","view.instance.graceful":"Graceful Action","view.instance.graceful.desc":"This action will be applied the next time the server restarts","view.instance.graceful.Restart":"Restart","view.instance.graceful.Stop":"Shutdown","view.instance.graceful.None":"None","view.instance.repo.canthookclone":"Unable to find clone job, refresh page when clone is complete. Please report this!","view.instance.repo.repoinfo":"Repository Information","view.instance.repo.reposettings":"Repository Settings","view.instance.repo.testmerges":"Test Merges","view.instance.repo.testmerges.badprovider":"Guided test merges are only supported on github","view.instance.repo.info.origin":"Origin URL","view.instance.repo.info.owner":"Repository Owner","view.instance.repo.info.name":"Repository Name","view.instance.repo.tm.by":"Testmerged by:","view.instance.repo.tm.comment":"Comment:","view.instance.repo.tm.commit":"Commit:","view.instance.repo.tm.modal.title":"Add or Update Testmerge","view.instance.repo.tm.modal.label":"Select Commit","view.instance.repo.tm.modal.comment":"Comment","view.instance.repo.tm.modal.tip":"Tip: When clicking the add or update button, hold shift to testmerge the latest commit bypassing this popup!","view.instance.repo.pending.title":"Pending Changes","view.instance.repo.pending.none":"No pending changes","view.instance.repo.pending.reapply":"Retestmerge #{number} ({title}) at commit {commit}","view.instance.repo.pending.reset":"Reset repository to tracked reference","view.instance.repo.pending.reset.nobranch":"Recheckout commit {commit}","view.instance.repo.pending.update":"Merge changes from origin","view.instance.repo.pending.added":"Testmerge #{number} ({title}) at commit {commit}","view.instance.repo.pending.added.manual":"Manual testmerge of PR #{number}","view.instance.repo.pending.updated":"Update #{number} ({title}) to commit {commit}","view.instance.repo.pending.removed":"Remove #{number} ({title})","view.instance.repo.pending.renamed":"Change the comment on #{number}","view.instance.repo.update":"Update repository from origin","view.instance.repo.update.desc":"This option will add new changes from the remote repository to the local","view.instance.repo.reset":"Reset repository to origin","view.instance.repo.reset.desc":"This option will reset the repository to the tracked origin, updating the repository and clearing any test merged PRs","view.instance.repo.manual":"Manual PR Entry","view.instance.repo.manual.desc":"Use this box to manually test merge a PR by entering its number and clicking add pr","view.instance.repo.addmanual":"Add PR","view.instance.repo.testmergelabel":"Labelled","view.instance.repo.norepoinfo":"You lack the permission to display information about the repository","view.instance.repo.delete.title":"Delete Repository","view.instance.repo.delete.desc":"This will delete the local copy of the repository. Instance settings, code modifications, event scripts and static files will be preserved.","view.instance.repo.delete":"Delete Repo","view.instance.repo.clone":"Clone Remote Repository","view.instance.repo.noautomerge":"Automatic test merge management is unavailable due to missing permissions","view.instance.repo.deployAfter":"Compile & Deploy after test merge","view.instance.repo.deployAfter.desc":"Compile and deploy the repository to the server after completing the test merge","view.instance.deploy.title":"Deployment Settings","view.instance.deploy.deploy":"Compile & Deploy repository","view.info.client":"Client Info","view.info.server":"Server Info","view.info.swarm":"Swarm Info","view.info.controller":"[CONTROLLER]","view.info.version":"Version: ","view.info.httpapiversion":"HTTP API Version: ","view.info.dmapiversion":"DM API Version: ","view.info.minpassword":"Minimum Password Length: ","view.info.instancelimit":"Instance Limit: ","view.info.userlimit":"User Limit: ","view.info.grouplimit":"Group Limit: ","view.info.oauth":"OAuth Support: ","perms.admin":"Administration Permissions","perms.admin.writeusers":"Edit Users","perms.admin.writeusers.desc":"Ability to edit users, if View Users is granted, all users can be edited, otherwise, only the current user can be edited","perms.admin.restarthost":"Restart TGS","perms.admin.restarthost.desc":"Ability to restart TGS","perms.admin.changeversion":"Update TGS","perms.admin.changeversion.desc":"Abilty to update TGS to a newer version","perms.admin.editownpassword":"Change Own Password","perms.admin.editownpassword.desc":"Ability to change their own password","perms.admin.readusers":"View Users","perms.admin.readusers.desc":"Ability to view all users","perms.admin.downloadlogs":"Access TGS logs","perms.admin.downloadlogs.desc":"Ability to view and download all TGS logs","perms.admin.editownoauthconnections":"Edit own external identity providers","perms.admin.editownoauthconnections.desc":"Ability to edit their own identity providers(oauth)","perms.instance":"Instance Manager Permissions","perms.instance.read":"Read Accessible Instances","perms.instance.read.desc":"Ability to list and view instances the user is allowed access to. WARNING: Users who know the instance ID can still use the API to edit it using other permissions even if they lack this one.","perms.instance.create":"Create Instances","perms.instance.create.warning":"The current user is not permitted to create instances","perms.instance.create.desc":"Ability to create new instances","perms.instance.rename":"Rename Instances","perms.instance.rename.desc":"Ability to rename instances","perms.instance.relocate":"Relocate Instances","perms.instance.relocate.desc":"Ablity to change the location of an instance on the file system","perms.instance.setonline":"Change Instance Online Status","perms.instance.setonline.desc":"Ability to set an instance as online or offline","perms.instance.delete":"Delete Instance","perms.instance.delete.desc":"Ablity to delete an instance","perms.instance.list":"Read All Instances","perms.instance.list.desc":"Ability to list and view all instances","perms.instance.setconfiguration":"Set Instance Configuration Mode","perms.instance.setconfiguration.desc":"Ability to set an instance\'s static file editing mode","perms.instance.setautoupdate":"Set Instance Autoupdate Interval","perms.instance.setautoupdate.desc":"Ability to set an instance\'s interval for automatic code updates","perms.instance.setchatbotlimit":"Set Instance Chatbot Limit","perms.instance.setchatbotlimit.desc":"Ability to change an instance\'s maximum amounts of bots","perms.instance.grantpermissions":"Grant All Permissions","perms.instance.grantpermissions.desc":"Ability to grant themselves all permissions on any instance","perms.group":"Group","perms.group.create":"Create Group","perms.group.warning":"This user is linked to the \\"{group}\\" group. Any change to the permissions will be applied to the group.","perms.group.delete.warning":"This group contains more than 0 users. Remove all users before deleting the group.","perms.group.none":"No group","perms.group.current":"Current Group: ","perms.group.cantlist":"You lack the permission to list all users. You need it to be able to list all groups","config.githubtoken":"Github token","config.githubtoken.desc":"You can supply a private authorization token for github to bypass some rate limiting on the github API.","config.apipath":"TGS API Path","config.apipath.desc":"Sets the API client server\'s path.","config.jobpollinactive":"Inactive job poll delay (s)","config.jobpollinactive.desc":"After how many seconds should we check for new jobs if we dont have any active jobs","config.jobpollactive":"Active job poll delay (s)","config.jobpollactive.desc":"After how many seconds should we check for new jobs if we know about a job","config.jobswidgetdisplay":"Jobs Widget Display","config.jobswidgetdisplay.desc":"Display mode for the instance jobs widget","config.jobswidgetdisplay.enum.always":"Always display","config.jobswidgetdisplay.enum.auto":"Display when there are jobs","config.jobswidgetdisplay.enum.never":"Never display","config.instanceprobetimer":"Instance permission poll delay","config.instanceprobetimer.desc":"After how many seconds should we update the list of instances","config.itemsperpage":"Items Per Page","config.itemsperpage.desc":"This allows you to configure the amount of items shown at once in lists. Note that not all lists support this option yet.","config.instanceeditsidebar":"Instance Edit Sidebar","config.instanceeditsidebar.desc":"This controls how the left sidebar menu acts in the instance edit page.","config.instanceeditsidebar.enum.auto":"Expand on hover","config.instanceeditsidebar.enum.collapse":"Always collapsed","config.instanceeditsidebar.enum.expand":"Always expanded","config.showjson":"Show JSON objects","config.showjson.desc":"Most pages will display the underlying json data if enabled.","config.manualpr":"Show manual PR entry on repository page","config.manualpr.desc":"Controls whether or not an input box is displayed to manually testmerge a pr based on its PR number. This option is ignored and the manual PR entry box is always displayed when using a repository hosted on GitLab.","config.manualreset":"Show force reset switch on repository page","config.manualreset.desc":"Controls whether or not an input box is displayed to force a repository reset. This option is ignored and the manual PR entry box is always displayed when using a repository hosted on GitLab.","loading.loading":"Loading...","loading.login":"Logging in...","loading.page":"Loading page: ","loading.page.notfound":"Loading page: NotFound","loading.app":"Loading app...","loading.admin":"Loading admin info...","loading.version":"Loading versions...","loading.updating":"Updating server...","loading.logs":"Loading Log(s)...","loading.info":"Loading Information...","loading.serverinfo":"Loading Server Information...","loading.passwd":"Changing password...","loading.userlist":"Loading user list...","loading.user.load":"Loading user information...","loading.user.save":"Saving user information...","loading.user.create":"Creating user...","loading.instance.list":"Loading instance list...","loading.instance.jobs.list":"Loading job list...","loading.instance":"Loading instance...","loading.instance.server":"Loading watchdog information...","loading.repo.cloning":"Cloning repository...","loading.repo.prs":"Loading PRs...","loading.repo.commits":"Loading Commits...","fields.instance.name":"Instance Name","fields.instance.path":"Path on disk","fields.instance.chatbotlimit":"Max chatbots","fields.instance.filemode":"Static File Edit Mode","fields.instance.autoupdate":"Autoupdate Interval in minutes (0 to disable)","fields.instance.filemode.Disallowed":"No File Management.","fields.instance.filemode.HostWrite":"Logged in users can edit any file.","fields.instance.filemode.SystemIdentityWrite":"Users using a system identity can edit files their user has access to.","fields.instance.watchdog.autostart":"Start instance automatically","fields.instance.watchdog.allowwebclient":"Allow BYOND web client connections","fields.instance.watchdog.visibility":"BYOND hub visibility","fields.instance.watchdog.visibility.Public":"Public","fields.instance.watchdog.visibility.Private":"Private","fields.instance.watchdog.visibility.Invisible":"Invisible","fields.instance.watchdog.securitylevel":"BYOND security level","fields.instance.watchdog.securitylevel.Trusted":"Trusted","fields.instance.watchdog.securitylevel.Safe":"Safe","fields.instance.watchdog.securitylevel.Ultrasafe":"Ultra-Safe","fields.instance.watchdog.port":"Network port","fields.instance.watchdog.timeout.startup":"Startup timeout (seconds)","fields.instance.watchdog.timeout.topic":"Topic timeout (seconds)","fields.instance.watchdog.heartbeat":"Heartbeat timeout (seconds)","fields.instance.watchdog.dumponheartbeatfail":"Create process dump on heartbeat fail restart","fields.instance.watchdog.additionalparams":"Additional command line parameters","fields.instance.repository.origincheckoutsha":"Origin SHA","fields.instance.repository.origincheckoutsha.desc":"SHA of the origin commit","fields.instance.repository.checkoutsha":"Checkout SHA","fields.instance.repository.checkoutsha.desc":"SHA of the commit to checkout","fields.instance.repository.reference":"Origin ref","fields.instance.repository.reference.desc":"Set this to the branch, commit or tag you wish to track","fields.instance.repository.committerName":"Committer Name","fields.instance.repository.committerEmail":"Committer Email","fields.instance.repository.accessUser":"Access Username","fields.instance.repository.accessUser.desc":"These credentials will be used when cloning the repository or performing authenticated actions","fields.instance.repository.accessToken":"New Access Password","fields.instance.repository.accessToken.desc":"For github, this will be a PAT(Private Authentication Token), for other providers, this will be a password","fields.instance.repository.clearAccessToken":"Clear Access Credentials","fields.instance.repository.pushTestMergeCommits":"Push Test Merge Commits","fields.instance.repository.pushTestMergeCommits.desc":"This will push commits created by test merges to a temporary branch on the remote. Requires access credentials.","fields.instance.repository.createGitHubDeployments":"Create GitHub Deployments","fields.instance.repository.createGitHubDeployments.desc":"Requires access credentials","fields.instance.repository.showTestMergeCommitters":"Show test merge commiters in public metadata","fields.instance.repository.showTestMergeCommitters.desc":"Shows who test merged a PR. This only applies to future commits.","fields.instance.repository.autoUpdatesKeepTestMerges":"Preserve test merges when auto updating","fields.instance.repository.autoUpdatesKeepTestMerges.desc":"If enabled, auto updates may fail if a merge conflict occurs.","fields.instance.repository.autoUpdatesSynchronize":"Push new commits to origin during auto-update","fields.instance.repository.autoUpdatesSynchronize.desc":"Used for example, with changelog scripts depending on the setup","fields.instance.repository.postTestMergeComment":"Post comment when test merge is deployed","fields.instance.repository.postTestMergeComment.desc":"This will post a github comment each time a test merge is deployed or updated","fields.instance.repository.updateSubmodules":"Update submodules automatically","fields.instance.repository.updateSubmodules.desc":"Submodules will be updated automatically when resetting, checking out or adding a test merge. This is not recursive","fields.instance.repository.url":"Remote URL","fields.instance.repository.ref":"Remote reference (branch)","fields.instance.repository.gituser":"Git access username","fields.instance.repository.gitpassword":"Git access password","fields.instance.repository.enablesubmodules":"Enable submodules","fields.instance.deploy.projectname":"DME name (blank for auto)","fields.instance.deploy.projectname.desc":"This can also be a relative path and shouldn\'t include the file extension","fields.instance.deploy.timeout":"Job timeout (in minutes)","fields.instance.deploy.timeout.desc":"Time before a compile job is abandonned and cancelled","fields.instance.deploy.apiport":"DMAPI port (0 for auto)","fields.instance.deploy.apiport.desc":"This port should not be public","fields.instance.deploy.seclevel":"DMAPI validation security level","fields.instance.deploy.seclevel.Trusted":"Trusted","fields.instance.deploy.seclevel.Safe":"Safe","fields.instance.deploy.seclevel.Ultrasafe":"Ultra-Safe","fields.instance.deploy.seclevel.desc":"This is only used for the DMAPI validation","fields.instance.deploy.validateapi":"Validate DMAPI","fields.instance.deploy.validateapi.desc":"This will check that the DMAPI initializes successfully without any runtimes","warning.screensize.header":"Screen size warning","warning.screensize":"The TGS webpanel does not guarentee support for viewports with a width of under 992px."}')}}]);