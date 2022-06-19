#!/usr/bin/env node

/**
 * 애플리케이션 정의 (app.js 파일)
 */
var app = require('./app.js');

/**
 * 디버그
 */
var debug = require('debug')('file-browser:server');

/**
 * HTTP Server를 정의한다.
 */
var http = require('http');

/**
 * 기본 포트
 */
var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * 서버를 시작한다.
 */
var server = http.createServer(app);

/**
 * 포트를 개방하고 이벤트 리스너를 설정한다.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * HTTP Server의 에러 이벤트 리스너
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' 포트는 권한 상승이 필요합니다.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' 포트는 사용중입니다.');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * HTTP Server의 리스닝 이벤트 리스너
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    debug(bind + ' 포트를 리스닝중입니다');
}
 