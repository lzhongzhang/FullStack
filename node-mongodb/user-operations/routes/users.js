const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myApp', {useNewUrlParser: true});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'hooray! welcome to our app!'
    })
});
router.get('/getall', (req, res) => {
    User.find({}, function (err, users) {
        if (err)
            res.end(err.toString());
        res.status(200).json(users);
    });
});

router.get('/getone/:id', (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.end(err.toString());
        res.status(200).json(user);
    })
});

router.post('/insertone', (req, res) => {
    var user = new User();
    user.name = req.body.name;
    user.sex = req.body.sex;
    user.age = req.body.age;
    user.title = req.body.title;
    user.startDate = req.body.startDate;

    user.save((err, doc) => {
        if (err)
            res.send(err.toString());
        res.status(200).json(doc);
    })
});

router.put('/updateone/:id', (req, res) => {
    var newUser = req.body;
    User.findOneAndUpdate(req.params.id, newUser, {upsert:true, new: true}, (err, doc) => {
        if (err) return res.send(500, { error: err });
        return res.status(200).json(doc);
    });

     
});

router.delete('/deleteone/:id', (req, res) => {
    User.remove({
        _id: req.params.id
    }, (err) => {
        if (err)
            res.send(500, { error: err });
        res.status(200).json({message: 'Successfully deleted!'});
    })
});

module.exports = router;