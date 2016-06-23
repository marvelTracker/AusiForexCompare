var express = require('express');
var router = express.Router();

router.get('/currency', function (req, res, next) {
    return res.status(201).json();
});

module.exports = router;

