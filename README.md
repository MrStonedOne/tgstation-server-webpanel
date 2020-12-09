# /TG/station-Server Control Panel aka "webpanel"

React web app to control TGS

|    CI Badges |                                                                                                             |
|--------------|-------------------------------------------------------------------------------------------------------------|
| Live Website | ![Node.js CD](https://github.com/tgstation/tgstation-server-control-panel/workflows/Node.js%20CD/badge.svg) |
| Linting      | ![Node.js CI](https://github.com/tgstation/tgstation-server-control-panel/workflows/Node.js%20CI/badge.svg) |

# Currently supported browsers:
last 5 chrome version
last 5 firefox version
last 3 edge version
last 5 opera version
last 3 safari version

# Install
1) Install Node.JS from [https://nodejs.org/en/]()
2) Clone this repository
3) Run `npm install`

# Development
To run a test server, make sure you have ran `npm install` beforehand to install dependencies then simply run `npm start`, the first build may take anywhere from a dozen of seconds to 2 minutes depending on your machine but subsequent changes to the file system will get picked up by the dev server and those will usually be built much faster. The app will hot swap unloaded components but it cannot swap mounted components, they need to be unmounted first, usually this means you will have to click the age in the navbar again to refresh

Make sure to run `npm install` again if you pull in new changes from the repo

# Scripts:
|              |                                                                                                                                |
|--------------|--------------------------------------------------------------------------------------------------------------------------------|
| start        | Starts a development server that listens on [0.0.0.0:8080]() The server will watch for changes in the file system to recompile |
| generate_api | Redownloads the api spec from tgstation-server and generates typings for the various endpoints. Also generates certain enums   |
| build        | Builds a production version in /dist                                                                                           |
| lint         | Runs eslint on the codebase to check for errors                                                                                |
| lint-fix     | Runs eslint on the codebase to check for errors but also attempts to fix said errors                                           |
| build-dev    | Builds a development version in /dist                                                                                          |
|              |                                                                                                                                |

# License
This work is licensed under AGPL-3.0. See the LICENSE file for more information.
