module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('./users');
    });
    app.use('/app/users', require('./users'));
};