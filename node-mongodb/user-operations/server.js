const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// const User = require('./models/user');

// User.create({name: "Hall", sex: "M", age: 20, title: "Student", startDate: "2019-04-10"}, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
app.use((req, res, next) => {
    console.log('System is working!');
    next();
});

routes(app);
app.listen(8080);


