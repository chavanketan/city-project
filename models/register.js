const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    username: String,
    password:String,
    email: String,
    longitude: double,
    latitude:double,
    IsActive: Boolean,
    business: object,
    mobile_number:Number,
    gender:String,
    password: String,
    created_date:Date,
    updated_date:Date,
    profile_image:String,
    auth_method:String,
    address:String
})

exports.register = mongoose.model('Register', registerSchema);
