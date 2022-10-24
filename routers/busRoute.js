const {bus} = require('../models/Bus.js');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const busList = await bus.find();

    if(!busList) {
        res.status(500).json({success: false})
    } 
    res.send(busList);
})

router.post(`/`, (req, res) =>{
    const buses = new bus({
        bus_name: req.body.bus_name,
        bus_root: req.body.bus_root,
    })

    buses.save().then((newBus=> {
        res.status(201).json(newBus)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})
router.delete('/:id',(req,res)=>{
    const busremove=bus.findIdAndRemove(req.params.id).then(buss=>{
        if(buss){
            return res.status(200).json({success: true,message:"bus removed from database "+buss})
        }
        else{
            return res.status(2404).json({success: false,message:"no bus data found "+buss})
        }
    })
})

module.exports =router;