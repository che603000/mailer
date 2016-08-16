/**
 * Created by alex on 09.08.2016.
 */
"use strict";

require('./model');

const nodemailer = require('nodemailer'),
    mongoose = require('mongoose'),
    Profile = mongoose.model('profile'),
    Mail = mongoose.model('mail');


class Mailer {
    constructor(options) {
        // create reusable transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport(options);

    }

    send(idUser, options, callback) {
        return Profile.findById(idUser)
            .then(doc=> {
                if (doc)
                    return doc;
                else
                    throw {cod: 1, message: 'not found user', err: {}}
            })
            .then(doc=>this.transporter.sendMail(options).catch(err=> {
                throw {cod: 2, message: 'mailer error', err: err}
            }))
            .then(info=>(new Mail({idUser, options})).save().catch(err=> {
                throw {cod: 3, message: 'db error', err: err}
            }))
    }

    register(options) {
        return Profile.register(options)
            .then(doc=> {
                return {id: doc.id.toString()}
            })
            .catch(err=> {
                throw {cod: 3, message: 'validation error', err: err}
            })
    }

}


module.exports = Mailer;

// const mailer = new Mailer(smtpConfig);
//
// mailer.register({name: 'XRM', url: '/api/test/reg'})
//     .then(id=>console.log(id))
//     .catch(err=> console.log(err))
//
//mailer.send('57a9f0dd878dbc341626cb86', mailOptions, (err, info) => {
//     console.log(err, info);
// })



