const {Bus} = require('../models/Bus.js');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const busList = await Bus.find();

    if(!busList) {
        res.status(500).json({success: false})
    } 
    res.send(busList);
})

router.post(`/`, (req, res) =>{
    const product = new bus({
        bus_name: req.body.bus_name,
        bus_root: req.body.bus_root,
    })

    product.save().then((newBus=> {
        res.status(201).json(newBus)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;