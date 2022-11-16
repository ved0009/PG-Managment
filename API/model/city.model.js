'use strict';
 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  citySchema = new Schema({
    CitiesId : {
        type: Number,
        required: true
    },
    CityName: {
        type: String,
        required: true
    },
    Districtid : {
        type: Number,
        required: true
    },
});
 

// citySchema.plugin(require('mongoose-timestamp'));
// citySchema.plugin(require('mongoose-delete'), {
//     overrideMethods: true,
//     deletedAt: true
// });

module.exports = mongoose.model('cities', citySchema);
