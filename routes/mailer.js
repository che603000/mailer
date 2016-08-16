var express = require('express');
var router = express.Router();
require('../app/model');
var Mailer = require('../app/mailer'),
    options = require('../app/options');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('This service mailer. Coole !!!');
});

router.post('/register', function (req, res, next) {
    const mailer = new Mailer(options.smtp);
    mailer.register(req.body)
        .then(id=> res.json({id}))
        .catch(err=>next(err));
});

router.post('/send', function (req, res, next) {
    const mailer = new Mailer(options.smtp);
    mailer.send(body.id, body.options)
        .then(id=> res.json({id}))
        .catch(err=>next(err));
});

module.exports = router;
