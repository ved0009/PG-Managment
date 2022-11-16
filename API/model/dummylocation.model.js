'use strict';
 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  dummylocationschema = new Schema({
    postal: {
        type: Number,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    } ,
    longitude:{
        type:String,
        required:true
    },
    IPv4: {
        type: String,
        required: true
    } 
   
});


dummylocationschema.plugin(require('mongoose-timestamp'));
dummylocationschema.plugin(require('mongoose-delete'), {
    overrideMethods: true,
    deletedAt: true
});

module.exports = mongoose.model('DummyLocationByCostumers', dummylocationschema);
