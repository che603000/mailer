/**
 * Created by alex on 09.08.2016.
 */

const mongoose = require('mongoose');

module.exports = require('./db')
    .then(function () {
        console.log("db start...");
    })
    .catch(err=> {
        console.log(err);
    });

