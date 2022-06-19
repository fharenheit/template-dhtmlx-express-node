/////////////////////////////////////////////////
// File Browser Web
/////////////////////////////////////////////////

var express = require('express');
var router = express.Router();

/**
 * 홈페이지로 이동한다.
 */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
