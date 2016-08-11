/**
 * Created by alex on 10.08.2016.
 */

require('../app/model');

const assert = require('assert'),
    mongoose = require('mongoose'),
    Profile = mongoose.model('profile'),
    options  = require('../app/options'),
    Mailer  = require('../app/mailer');

describe("mailer", function () {
    const model = new Mailer(options.smtp);
    before(() => {

        return mongoose.connect('mongodb://localhost/mailer')
    })

    // it("попытка записи секретного ключа",  () => {
    //     const key = 'key secret';
    //     return Profile.register({key, name: '8372749239842'})
    //         .then(doc=> {
    //             console.log(doc);
    //         })
    //         .catch(err=> {
    //             throw err.errors;
    //         })
    // });

    it("короткое имя ", function () {
        const name = 'name';
        assert.throws(() => Profile.register({name}), 'ValidationError');
            // .then(doc=> {
            //     throw {}
            // })
            // .catch(err=> {
            //     if (err.name !== 'ValidationError')
            //         throw  err;
            // })
    });

    it("хорошее имя имя ", function () {
        const name = 'name90';
        return Profile.register({name});
    });

    it("registration", function () {
       return model.register({name :'XRM', url:'/api/v1/reg'});
    });
});