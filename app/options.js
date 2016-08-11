/**
 * Created by alex on 11.08.2016.
 */

module.exports = {
    smtp: {
        host: '10.3.0.1',
        port: 25,
        secure: false, // use SSL

    },
    mail: {
        from: 'test mailer', // sender address
        to: 'che603000@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ', // plaintext body
        html: '<b>Hello world</b>' // html body
    },
}