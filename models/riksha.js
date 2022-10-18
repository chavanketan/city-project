const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    riksha_owner_name: String,
    contact: Number,
    
})

exports.riksha = mongoose.model('Riksha', busSchema);
