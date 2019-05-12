module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/api/users');
    });
    app.use('/api/users', require('./users'));
};