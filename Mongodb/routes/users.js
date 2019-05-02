const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myApp', {useNewUrlParser: true});

router.get('/', (req, res) => {
    res.json({
        message: 'hooray! welcome to our app!'
    })
});
router.get('/getall', (req, res) => {
    User.find({}, function (err, users) {
        if (err)
            res.end(err.toString());
        res.json(users);

    });
});

router.get('/getone/:id', (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.end(err.toString());
        res.json(user);
    })
});

router.post('/insertone', (req, res) => {
    var user = new User();
    user.name = req.body.name;
    user.sex = req.body.sex;
    user.age = req.body.age;
    user.title = req.body.title;
    user.startDate = req.body.startDate;

    user.save(function (err) {
        if (err)
            res.send(err.toString());
        res.json({message: 'New user created!'});
    })
});

router.delete('/deleteone/:id', (req, res) => {
    User.remove({
        _id: req.params.id
    }, function (err, user) {
        if (err)
            res.send(err.toString());
        res.json({message: 'Successfully deleted!'});
    })
});

module.exports = router;