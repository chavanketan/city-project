const {bus} = require('../models/Bus.js');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) =>{
    const busList = await bus.find();
    const { page = 1, limit = 10 } = req.query;
    console.log('in get bus',busList)
    try {
      // execute query with page and limit values
      const posts = await bus.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      // get total documents in the Posts collection 
      const count = await bus.countDocuments();
       console.log("in bus data",posts,count,limit,page)
      // return response with posts, total pages, and current page
      res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      console.error(err.message);
    }
    // if(!busList) {
    //     res.status(500).json({success: false})
    // } 
    // res.send(busList);
})

router.post(`/`, async (req, res) =>{
    const buses = await new bus({
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
router.delete('/:id',async (req,res)=>{
    console.log("inside delete bus",req.params.id)
    const busremove=await bus.deleteOne({bus_name:req.params.id})
    console.log("removed bus",busremove)
        if(busremove){
            return res.status(200).json({success: true,message:"bus removed from database "+busremove})
        }
        else{
            return res.status(404).json({success: false,message:"no bus data found "+busremove})
        }
    })

module.exports =router;
