const mongoose = require('mongoose');

const travellersSchema = mongoose.Schema({
    travellers_name: String,
    contact: Number,
    
})

exports.travellers = mongoose.model('Travellers', travellersSchema);
