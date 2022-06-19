/////////////////////////////////////////////////
// REST API를 위한 서비스 정의
//
// 이 서비스가 제대로 동작하기 위해서는 File Browser는
// dist 디렉토리에 빌드해서 위치시키도록 한다.
// 개발 환경에서는 개발 Proxy로 설정해서 사용한다.
/////////////////////////////////////////////////

/**
 * Dependency 정의
 */
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var sessions = require('client-sessions')
var cors = require('cors')

require('dotenv').config()

/**
 * 라우팅 정의
 */
var index = require('./routes') // 웹 페이지로 이동을 정의
var api = require('./routes/api') // REST API를 정의

/**
 * Express 초기화
 */
var app = express()

/**
 * CORS 설정
 */
app.use(cors());

/* CUSTOM CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
*/

/**
 * View Engine 정의
 */
app.set('views', path.join(__dirname, 'dist')) // view directory
app.set('view engine', 'ejs') // or hjs

/**
 * 웹 서비스 설정
 */
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(sessions({
    cookieName: 'session',
    secret: process.env.SESSION_SECRET ? process.env.SESSION_SECRET : '1234567890',
    duration: 24 * 60 * 60 * 1000, // 1 day
    activeDuration: 30 * 60 * 1000
}))
app.use(express.static(path.join(__dirname, 'dist')))

/**
 * 라우팅
 */
app.use('/', index)
app.use('/backend', api)

/**
 * 404 및 포워딩 에러 핸들러
 */
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

/**
 * 에러 처리 핸들러
 */
app.use(function (err, req, res, next) {
    // 개발 환경인 경우에만 에러를 제공하게 됨
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // 에러 페이지 렌더링
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
