const mongoose = require('mongoose');

const travellersSchema = mongoose.Schema({
    travellers_name: String,
    root: String,
    
})

exports.travellers = mongoose.model('Travellers', travellersSchema);
