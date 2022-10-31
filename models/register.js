const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    username: String,
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