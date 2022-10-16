const {riksha} = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const rikshaList = await riksha.find();

    if(!rikshaList) {
        res.status(500).json({success: false})
    } 
    res.send(rikshaList);
})

router.post(`/`, (req, res) =>{
    const product = new riksha({
        riksha_name: req.body.riksha_name,
        riksha_root: req.body.riksha_root,
    })

    product.save().then((newriksha=> {
        res.status(201).json(newriksha)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;