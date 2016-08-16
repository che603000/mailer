/**
 * Created by alex on 10.08.2016.
 */



const assert = require('assert'),
    request = require('request'),
    expect = require('Chai').expect,
    mongoose = require('mongoose'),
    options = require('../app/options'),
    Mailer = require('../app/mailer');




describe("http server", () => {

    before(() => {
        require('../bin/www');
        //return mongoose.connect('mongodb://localhost/mailer')
    })

    it('run http server', function (done) {
        request.get('http://localhost:3000',  function (err, res, body) {
            assert.equal(res.statusCode, 200);
            done();
        });
    });

    it('register', function (done) {
        request.post('http://localhost:3000/api/v1/register', {json: {name: 'name'}}, function (err, res, body) {
            assert.equal(res.statusCode, 200);
            //expect(res.body).to.equal('wrong header');
            done();
        });
    });

    after(()=> {
        mongoose.connection.close().then(()=>{
            console.log("server http: close db \n");

        })
    })
});
/*
describe("mailer", function () {
    const model = new Mailer(options.smtp);
    before(() => {
        require('../app/model');
        //Profile = mongoose.model('profile'),
        return mongoose.connect(options.db);
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
        //assert.throws(() => Profile.register({name}), (err)=>{'ValidationError'});
        Profile.register({name})
            .then(doc=> {
                throw {}
            })
            .catch(err=> {
                if (err.name !== 'ValidationError')
                    throw  err;
            })
    });

    it("хорошее имя имя ", function () {
        const name = 'name90';
        return Profile.register({name});
    });

    it("registration", function () {
        return model.register({name: 'XRM-API', url: '/api/v1/reg'});
    });

    after(()=> {
        mongoose.connection.close().then(()=>{
            console.log("mailer: close db ");
        })
    })
});
    */