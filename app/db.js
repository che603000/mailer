/**
 * Created by alex on 09.08.2016.
 */

const mongoose = require('mongoose'),
    options = require('./options');

mongoose.Promise = global.Promise;
module.exports =  mongoose.connect(options.db);
