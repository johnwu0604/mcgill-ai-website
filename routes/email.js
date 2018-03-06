module.exports = function(app) {
    app.get('/email', function(req, res) {
        res.send('Email');
    })
}