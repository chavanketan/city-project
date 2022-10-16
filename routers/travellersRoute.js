const {travellers} = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const travellersList = await travellers.find();

    if(!travellersList) {
        res.status(500).json({success: false})
    } 
    res.send(travellersList);
})

router.post(`/`, (req, res) =>{
    const product = new travellers({
        travellers_name: req.body.travellers_name,
        travellers_root: req.body.travellers_root,
    })

    product.save().then((newtravellers=> {
        res.status(201).json(newtravellers)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;