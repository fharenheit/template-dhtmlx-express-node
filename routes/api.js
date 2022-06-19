/////////////////////////////////////////////////
// REST API
/////////////////////////////////////////////////

var express = require('express')
var router = express.Router()
var fileSystem = require('../backends/FileSystem')

/**
 * Health Check
 */
router.get('/health', function (req, res, next) {
    fileSystem._200()
        .then(function (results) {
            res.status(200).json({
                message: results.message
            })
        })
})

/**
 * 인증을 수행한다. (TODO)
 */
router.get('/authorization', function (req, res, next) {
    res.status(200)
})

/**
 * 폴더 목록을 회신한다. (TODO)
 */
router.get('/folders', function (req, res, next) {
    fileSystem.folders()
        .then(function (results) {
            console.log(results)
            res.status(200).json(results)
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            })
        })
})

/**
 * 파일 목록을 회신한다. (TODO)
 */
router.get('/files', function (req, res, next) {
    fileSystem.files()
        .then(function (results) {
            res.status(200).json(results)
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            })
        })
})

/* 참고 예제
router.get('/:resource/:id', function (req, res, next) {
    fileSystem.getById(req.params.id)
        .then(function (result) {
            res.status(200).json({
                result: result
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            })
        })
})

router.delete('/:resource/:id', function (req, res, next) {
    fileSystem.delete(req.params.id)
        .then(function (result) {
            res.status(200).json({
                result: {}
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            })
        })

})

router.post('/:resource/', function (req, res, next) {
    fileSystem.post(req.body)
        .then(function (result) {
            res.status(201).json({
                result: result
            })
        })
        .catch(function (err) {
            res.status(500).json({
                message: err
            })
        })

})
 */

module.exports = router