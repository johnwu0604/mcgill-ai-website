var request = require('request')

module.exports = function(app) {
    app.post('/email', function(req, res) {
        // Configure the request for sending to slack
        var options = {
            url: 'https://hooks.slack.com/services/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',
            method: 'POST',
            headers: {
                'User-Agent':       'Super Agent/0.0.1',
                'Content-Type':     'application/json'
            },
            json: {
                'text': 'New email received from McGill AI Society Website!',
                'attachments': [
                    {
                        'title': req.body.name + ' (' + req.body.email + ') ',
                        'text': req.body.message
                    }
                ]
            }
        }
        // Process the request
        request(options, function (error, response, body) {
            if (error) {
                console.log(error)
                res.send({
                    'success': false
                })
            }
            res.send({
                'success': true
            })
        })
    })

}