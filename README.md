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

웹 UI의 소스코드 구조는 다음과 같습니다.

```
.
├── README.md
├── build
│   ├── webpack.base.conf.js
│   ├── webpack.build.conf.js
│   └── webpack.dev.conf.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── assets
│   │   ├── img
│   │   └── page
│   ├── components
│   ├── index.html
│   ├── index.js
│   ├── lib
│   ├── services
│   │   ├── api.js
│   │   └── files.js
│   ├── styles
│   │   ├── main.scss
│   │   ├── utils
│   │   │   ├── _fonts.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   └── views
│   │       ├── _grid-card.scss
│   │       ├── _info.scss
│   │       ├── _main.scss
│   │       ├── _sidebar.scss
│   │       ├── _toolbar.scss
│   │       └── _window.scss
│   └── views
│       ├── AddFormWindow.js
│       ├── Explorer
│       │   ├── Explorer.js
│       │   ├── Info.js
│       │   ├── ItemContextMenu.js
│       │   ├── RenameFormWindow.js
│       │   ├── SketchView.js
│       │   ├── TableView.js
│       │   └── Toolbar.js
│       ├── Sidebar
│       │   ├── AddingContextMenu.js
│       │   ├── AddingForm.js
│       │   ├── FileTree.js
│       │   └── Sidebar.js
│       └── TopLayout.js
└── yarn.lock
```

Dependency를 다운로드하고 빌드를 하기 위해서 다음의 커맨드를 실행합니다.

```
# npm install
# npm run build
```

이제 빌드 후에는 HTML 코드가 `dist` 디렉토리에 생성됩니다. 이제 이 디렉토리를 웹 서버에 배포하면 웹 서버를 통해서 서비스가 가능해지며, 본 에제에서는 Node 기반 웹 서버에 올려서 서비스할 수 있도록 구성할 수 있습니다.

```
.
├── README.md
├── build
│   ├── webpack.base.conf.js
│   ├── webpack.build.conf.js
│   └── webpack.dev.conf.js
├── dist
│   ├── app.css
│   ├── app.js
│   ├── assets
│   │   ├── img
│   │   │   ├── formats
│   │   │   │   ├── dmg.svg
│   │   │   │   ├── doc.svg
│   │   │   │   ├── exe.svg
│   │   │   │   ├── folder.svg
│   │   │   │   ├── html.svg
│   │   │   │   ├── jpg.svg
│   │   │   │   ├── mpg.svg
│   │   │   │   ├── other.svg
│   │   │   │   ├── pdf.svg
│   │   │   │   ├── ppt.svg
│   │   │   │   ├── psd.svg
│   │   │   │   ├── txt.svg
│   │   │   │   ├── wav.svg
│   │   │   │   ├── xls.svg
│   │   │   │   └── zip.svg
│   │   │   └── logo.svg
│   │   └── page
│   │       ├── browserconfig.xml
│   │       ├── favicon.ico
│   │       ├── favicons.png
│   │       ├── icon-144.png
│   │       ├── icon-16.png
│   │       ├── icon-32.png
│   │       ├── icon-48.png
│   │       ├── icon-96.png
│   │       └── site.webmanifest
│   ├── index.html
│   └── lib
│       └── suite
│           ├── fonts
│           │   ├── roboto-bold-webfont.woff
│           │   ├── roboto-bold-webfont.woff2
│           │   ├── roboto-medium-webfont.woff
│           │   ├── roboto-medium-webfont.woff2
│           │   ├── roboto-regular-webfont.woff
│           │   └── roboto-regular-webfont.woff2
│           ├── suite.css
│           ├── suite.d.ts
│           ├── suite.js
│           └── types
│               ├── ts-all
│               │   └── sources
│               │       ├── entry.d.ts
│               │       └── entry_pro.d.ts
│               ├── ts-calendar
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Calendar.d.ts
│               │       ├── helper.d.ts
│               │       └── types.d.ts
│               ├── ts-chart
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── AxisCreator.d.ts
│               │       ├── Chart.d.ts
│               │       ├── ComposeLayer.d.ts
│               │       ├── Filters.d.ts
│               │       ├── Legend.d.ts
│               │       ├── Tooltip.d.ts
│               │       ├── helpers
│               │       │   ├── circle.d.ts
│               │       │   ├── common.d.ts
│               │       │   └── spline.d.ts
│               │       ├── scales
│               │       │   ├── RadialScale.d.ts
│               │       │   ├── Scale.d.ts
│               │       │   ├── SvgScales.d.ts
│               │       │   ├── TextScale.d.ts
│               │       │   └── index.d.ts
│               │       ├── series
│               │       │   ├── Area.d.ts
│               │       │   ├── Bar.d.ts
│               │       │   ├── BarX.d.ts
│               │       │   ├── BaseSeria.d.ts
│               │       │   ├── Donut.d.ts
│               │       │   ├── Line.d.ts
│               │       │   ├── NoScaleSeria.d.ts
│               │       │   ├── Pie.d.ts
│               │       │   ├── Pie3D.d.ts
│               │       │   ├── Radar.d.ts
│               │       │   ├── ScaleSeria.d.ts
│               │       │   ├── Scatter.d.ts
│               │       │   ├── Spline.d.ts
│               │       │   ├── SplineArea.d.ts
│               │       │   ├── Stacker.d.ts
│               │       │   ├── TreeMap.d.ts
│               │       │   └── index.d.ts
│               │       ├── shapes
│               │       │   ├── legend.d.ts
│               │       │   └── line.d.ts
│               │       └── types.d.ts
│               ├── ts-colorpicker
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Colorpicker.d.ts
│               │       ├── colors.d.ts
│               │       ├── helpers
│               │       │   ├── calculations.d.ts
│               │       │   └── color.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       ├── picker.d.ts
│               │       └── types.d.ts
│               ├── ts-combobox
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Combobox.d.ts
│               │       ├── ProCombobox.d.ts
│               │       ├── helper.d.ts
│               │       ├── keyListener.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       └── types.d.ts
│               ├── ts-common
│               │   ├── CssManager.d.ts
│               │   ├── FocusManager.d.ts
│               │   ├── KeyManager.d.ts
│               │   ├── ScrollView.d.ts
│               │   ├── core.d.ts
│               │   ├── date.d.ts
│               │   ├── dom.d.ts
│               │   ├── events.d.ts
│               │   ├── html.d.ts
│               │   ├── keycodes.d.ts
│               │   ├── polyfills
│               │   │   ├── array.d.ts
│               │   │   ├── element.d.ts
│               │   │   ├── math.d.ts
│               │   │   ├── object.d.ts
│               │   │   └── string.d.ts
│               │   ├── types.d.ts
│               │   └── view.d.ts
│               ├── ts-data
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── CollectionStore.d.ts
│               │       ├── DragManager.d.ts
│               │       ├── ajax.d.ts
│               │       ├── datacollection
│               │       │   ├── loader.d.ts
│               │       │   └── sort.d.ts
│               │       ├── datacollection.d.ts
│               │       ├── dataproxy.d.ts
│               │       ├── drivers
│               │       │   ├── CsvDriver.d.ts
│               │       │   ├── JsonDriver.d.ts
│               │       │   ├── XMLDriver.d.ts
│               │       │   └── drivers.d.ts
│               │       ├── helpers.d.ts
│               │       ├── lazydataproxy.d.ts
│               │       ├── selection.d.ts
│               │       ├── serializers
│               │       │   └── xml.d.ts
│               │       ├── treecollection.d.ts
│               │       └── types.d.ts
│               ├── ts-dataview
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── DataView.d.ts
│               │       ├── ProDataView.d.ts
│               │       ├── editors
│               │       │   ├── InputEditor.d.ts
│               │       │   └── editors.d.ts
│               │       └── types.d.ts
│               ├── ts-form
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Form.d.ts
│               │       ├── ProForm.d.ts
│               │       ├── elements
│               │       │   ├── button.d.ts
│               │       │   ├── checkbox.d.ts
│               │       │   ├── checkboxGroup.d.ts
│               │       │   ├── colorpicker.d.ts
│               │       │   ├── combo.d.ts
│               │       │   ├── container.d.ts
│               │       │   ├── dateinput.d.ts
│               │       │   ├── helper
│               │       │   │   └── label.d.ts
│               │       │   ├── input.d.ts
│               │       │   ├── proCombo.d.ts
│               │       │   ├── radioGroup.d.ts
│               │       │   ├── radiobutton.d.ts
│               │       │   ├── select.d.ts
│               │       │   ├── simplevault.d.ts
│               │       │   ├── sliderform.d.ts
│               │       │   ├── spacer.d.ts
│               │       │   ├── textarea.d.ts
│               │       │   ├── textinput.d.ts
│               │       │   └── timeinput.d.ts
│               │       ├── helper.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       └── types.d.ts
│               ├── ts-grid
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Exporter.d.ts
│               │       ├── Grid.d.ts
│               │       ├── ProGrid.d.ts
│               │       ├── Selection.d.ts
│               │       ├── columnsResizer.d.ts
│               │       ├── helpers
│               │       │   ├── cells.d.ts
│               │       │   ├── data.d.ts
│               │       │   ├── keys.d.ts
│               │       │   └── main.d.ts
│               │       ├── types.d.ts
│               │       └── ui
│               │           ├── Cells.d.ts
│               │           ├── FixedCols.d.ts
│               │           ├── FixedRows.d.ts
│               │           ├── content.d.ts
│               │           ├── editors
│               │           │   ├── CheckboxEditor.d.ts
│               │           │   ├── ComboboxEditor.d.ts
│               │           │   ├── DateEditor.d.ts
│               │           │   ├── InputEditor.d.ts
│               │           │   ├── SelectEditor.d.ts
│               │           │   ├── TextAreaEditor.d.ts
│               │           │   └── editors.d.ts
│               │           └── render.d.ts
│               ├── ts-layout
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Cell.d.ts
│               │       ├── Layout.d.ts
│               │       ├── ProCell.d.ts
│               │       ├── ProLayout.d.ts
│               │       ├── helpers.d.ts
│               │       └── types.d.ts
│               ├── ts-list
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── List.d.ts
│               │       ├── ProList.d.ts
│               │       ├── Selection.d.ts
│               │       ├── editors
│               │       │   ├── InputEditor.d.ts
│               │       │   └── editors.d.ts
│               │       └── types.d.ts
│               ├── ts-menu
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── ContextMenu.d.ts
│               │       └── Menu.d.ts
│               ├── ts-message
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── alert.d.ts
│               │       ├── common.d.ts
│               │       ├── confirm.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       ├── message.d.ts
│               │       ├── tooltip.d.ts
│               │       └── types.d.ts
│               ├── ts-navbar
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Navbar.d.ts
│               │       ├── elements
│               │       │   ├── button.d.ts
│               │       │   ├── customHTMLButton.d.ts
│               │       │   ├── datePicker.d.ts
│               │       │   ├── helpers.d.ts
│               │       │   ├── imageButton.d.ts
│               │       │   ├── input.d.ts
│               │       │   ├── menuItem.d.ts
│               │       │   ├── navItem.d.ts
│               │       │   ├── separator.d.ts
│               │       │   ├── spacer.d.ts
│               │       │   └── title.d.ts
│               │       ├── itemfactory.d.ts
│               │       └── types.d.ts
│               ├── ts-pagination
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Pagination.d.ts
│               │       └── types.d.ts
│               ├── ts-popup
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Popup.d.ts
│               │       └── types.d.ts
│               ├── ts-ribbon
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── ProRibbon.d.ts
│               │       └── Ribbon.d.ts
│               ├── ts-sidebar
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── ProSidebar.d.ts
│               │       ├── Sidebar.d.ts
│               │       └── types.d.ts
│               ├── ts-slider
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Slider.d.ts
│               │       └── types.d.ts
│               ├── ts-tabbar
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Tabbar.d.ts
│               │       └── types.d.ts
│               ├── ts-timepicker
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Timepicker.d.ts
│               │       ├── helper.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       └── types.d.ts
│               ├── ts-toolbar
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── ProToolbar.d.ts
│               │       └── Toolbar.d.ts
│               ├── ts-tree
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── Editor.d.ts
│               │       ├── Tree.d.ts
│               │       └── types.d.ts
│               ├── ts-treegrid
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── TreeGrid.d.ts
│               │       ├── TreeGridCollection.d.ts
│               │       └── types.d.ts
│               ├── ts-vault
│               │   ├── index.d.ts
│               │   └── sources
│               │       ├── ProgressBar.d.ts
│               │       ├── ReadStackPreview.d.ts
│               │       ├── Uploader.d.ts
│               │       ├── Vault.d.ts
│               │       ├── configs.d.ts
│               │       ├── helper.d.ts
│               │       ├── locales
│               │       │   └── en.d.ts
│               │       └── types.d.ts
│               └── ts-window
│                   ├── index.d.ts
│                   └── sources
│                       ├── ProWindow.d.ts
│                       ├── Window.d.ts
│                       ├── WindowController.d.ts
│                       ├── helpers.d.ts
│                       └── types.d.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── assets
│   │   ├── img
│   │   └── page
│   ├── components
│   ├── index.html
│   ├── index.js
│   ├── lib
│   ├── services
│   │   ├── api.js
│   │   └── files.js
│   ├── styles
│   │   ├── main.scss
│   │   ├── utils
│   │   │   ├── _fonts.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   └── views
│   │       ├── _grid-card.scss
│   │       ├── _info.scss
│   │       ├── _main.scss
│   │       ├── _sidebar.scss
│   │       ├── _toolbar.scss
│   │       └── _window.scss
│   └── views
│       ├── AddFormWindow.js
│       ├── Explorer
│       │   ├── Explorer.js
│       │   ├── Info.js
│       │   ├── ItemContextMenu.js
│       │   ├── RenameFormWindow.js
│       │   ├── SketchView.js
│       │   ├── TableView.js
│       │   └── Toolbar.js
│       ├── Sidebar
│       │   ├── AddingContextMenu.js
│       │   ├── AddingForm.js
│       │   ├── FileTree.js
│       │   └── Sidebar.js
│       └── TopLayout.js
└── yarn.lock
```

REST API를 제외하고 웹 UI만 웹 서버를 통해서 구동하려면 다음의 커맨드를 실행합니다.

```
# npm run start
```

단, REST API가 포함되어 있지 않으므로 백엔드인 REST API를 호출하려면 다음의 두 가지 옵션을 적용해야 합니다.

* 별도 Node 또는 npm http 또는 Java 기반 백엔드를 개발하고 webpack 설정에서 proxy server를 적용합니다(개발시 편리).
* Node에 웹 UI와 REST API 백엔드를 한꺼번에 실행합니다(본 에제에서는 production에서 이 방법을 적용).


### REST API

REST API는 Node를 기반으로 http, express를 이용하여 개발할 수 있으며 이것을 동작시키기에 필요한 파일은 다음과 같습니다.

```
.
├── README.md
├── app.js
├── backends
│   └── FileSystem.js
├── package.json
├── routes
│   ├── api.js
│   └── index.js
└── server.js
```

REST API를 구동하기 위해서는 다음의 커맨드로 서버를 실행합니다. `/dist` 디렉토리에 웹 UI의 `dist`를 같이 구성하면 웹 UI와 REST를 통합할 수 있습니다.

```
# node server.js
```

 `.js` 파일이 변경되었을때 이를 감지해서 다시 적용하도록 하려면 다음과 같이 실행합니다. `./backends` 디렉토리의 변경사항을 탐지하여 자동으로 적용해줍니다.
 
 ```
 # npm install -g nodemon
 # nodemon --watch ./backends server.js
 ```

## Structure

* `server.js` - Node JS 기반으로 웹 서버 및 REST API를 제공하는 서버의 Entry Point. 웹 서버를 구동합니다.
* `app.js` - REST API 및 HTML에 대한 설정 및 라우팅 정보를 설정합니다.
* `build` - DHTMLX 기반 File Browser의 Webpack 빌드를 설정합니다. UI에만 해당합니다.
* `src` - DHTMLX 기반 File Browser의 소스코드입니다. UI 코드는 모두 여기에 있습니다.
* `dist` - DHTMLX 기반 File Browser의 자동 생성 코드(통합 HTML). `npm run build`로 생성합니다.
* `backends` - REST API

## Dependencies

다음은 Web UI 및 REST API를 실행하기 위해서 필요한 Dependency이며 `package.json`에 추가되어 있습니다.

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
* [개발 운영 환경 분리](https://bassyun.tistory.com/39)
* [Express 디버깅](https://expressjs.com/ko/guide/debugging.html)
* [nodemon](https://backend-intro.vlpt.us/1/03.html)
