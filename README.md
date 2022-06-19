# React UI + Node Application

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

## References

* [Securing Node.js Express REST APIs with Keycloak] (https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51)
