'use strict';
 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const  districtSchema = new Schema({
    DistrictCode: {
        type: Number,
        required: true
    },
    DistrictName : {
        type: String,
        required: true
    },
    DistrictId: {
        type: Number,
        required: true
    },
    stateid : {
        type: Number,
        required: true
    },
});

// citySchema.plugin(require('mongoose-timestamp'));
// citySchema.plugin(require('mongoose-delete'), {
//     overrideMethods: true,
//     deletedAt: true
// });

module.exports = mongoose.model('district', districtSchema);
