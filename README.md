# React based DHTMLX + Express based Node Application

## Application

* React UI (File Browser)
  * DHTMLX 기반 File Browser
  * React JS
* REST API (Node + Express)
  * Web Server (http)
  * REST API Server (express)

## Start

### Web UI

웹 서비스만 구동하기 위해서 다음의 커맨드를 실행합니다.

```
# npm install
# npm run start
```

### REST API

Web UI 빌드후에 다음의 커맨드로 서버를 구동할 수 있습니다.

```
# node server.js
```

## Structure

* `server.js` - Node JS 기반으로 웹 서버 및 REST API를 제공하는 서버의 Entry Point. 웹 서버를 구동합니다.
* `app.js` - REST API 및 HTML에 대한 설정 및 라우팅 정보를 설정합니다.
* `build` - DHTMLX 기반 File Browser의 Webpack 빌드를 설정합니다. UI에만 해당합니다.
* `src` - DHTMLX 기반 File Browser의 소스코드입니다. UI 코드는 모두 여기에 있습니다.
* `dist` - DHTMLX 기반 File Browser의 자동 생성 코드(통합 HTML). `npm run build`로 생성합니다.
* `backends` - REST API

## Dependencies

```json
"dependencies": {
    "dhx-optimus": "^2.1.0",
    "dhx-optimus-store": "^1.0.0",
    "aws-s3": "^2.0.5",
    "bluebird": "^3.7.2",
    "body-parser": "^1.20.0",
    "client-sessions": "^0.8.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express-session": "^1.17.3",
    "keycloak-connect": "^18.0.1",
    "morgan": "^1.10.0",
    "promiz": "^1.0.5",
    "serve-favicon": "^2.5.0"
}
```

## References

* [Securing Node.js Express REST APIs with Keycloak](https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51)
* [DHTMLX File Explorer](https://dhtmlx.com/docs/products/demoApps/dhtmlxFileExplorerDemo/)
