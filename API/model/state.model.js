'use strict';
 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const  stateSchema = new Schema({
    CountryId  : {
        type: Number,
        required: true
    },
    StateId   : {
        type: Number,
        required: true
    },
    StateName : {
        type: String,
        required: true
    },
    Type  : {
        type: String,
        required: true
    },
    stateCode  : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('state', stateSchema);
