'use strict';
 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  UserSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } ,
    dob:{
        type:String,
        required:true
    },
    roleId: {
        type: Number,
        required: true
    },
    addressId: {
        type:  Number,
        // required: true
    },
    documentNumber:{
        type:String,
        required:true
    }
   
});


UserSchema.plugin(require('mongoose-timestamp'));
UserSchema.plugin(require('mongoose-delete'), {
    overrideMethods: true,
    deletedAt: true
});

module.exports = mongoose.model('User', UserSchema);
