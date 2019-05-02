const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('matrix', {
    })
});

router.get('/:id', function(req, res) {
    res.render('matrix', {
    })
});

module.exports = router;