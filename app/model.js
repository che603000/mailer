/**
 * Created by alex on 09.08.2016.
 */


const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    guid = require('guid');

var SchemaProfile = new Schema({
    name: {
        type: String,
        minlength: [5, 'имя не менее чем {MINLENGTH} символов'],
        required: true
    },
    url: String,
    key: {
        type: String,
        set(value){
            return null;
        },
        default: guid.create
    }
});

SchemaProfile.static({
    register(options){
        const {name, url} = options;
        return (new Profile({name, url})).save();
    }
})

const Profile = mongoose.model('profile', SchemaProfile);


var mail = new Schema({
    idUser: String,
    options: {}
});

mongoose.model('mail', mail);