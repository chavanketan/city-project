const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    bus_name: String,
    bus_root: String,
    
})

exports.bus = mongoose.model('Bus', busSchema);
