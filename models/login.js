const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username: String,
    password: String
})

exports.login = mongoose.model('Login', loginSchema);