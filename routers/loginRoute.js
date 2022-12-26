const {login} = require('../models/login.js');
const {register} = require('../models/register.js');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    try{
    //console.log("username",req.query.username)
    const loginList = await register.findOne({username:req.query.username});
   // console.log("loginList",loginList,loginList.password,req.query.password)

    if(loginList.password==req.query.password) {
        console.log("password is right")
        res.status(200).json({success: true})
    } 
    else{
        console.log("passwordwrong")
}}
    catch{
        console.log("error in fetchiung id")
    }
})


router.post(`/`, async (req, res) =>{
    const logines = await new register({
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        longitude:req.body.longitude,
        latitude:req.body.latitude,
        IsActive:req.body.isActive,
        business:req.body.business,
        mobile_number:req.body.mobile_number,
        gender:req.body.gender,
        created_date:req.body.created_date,
        updated_date:req.body.updated_date,
        profile_image:req.body.profile_image,
        auth_method:req.body.auth_method,
        address:req.body.address
    })

    logines.save().then((newlogin=> {
        res.status(201).json(newlogin)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})
// router.delete('/:id',async (req,res)=>{
//     console.log("inside delete login",req.params.id)
//     const loginremove=await req.db.get("logines").remove(req.params.id)
//     console.log("removed login",loginremove)
//         if(loginremove){
//             return res.status(200).json({success: true,message:"login removed from database "+loginremove})
//         }
//         else{
//             return res.status(404).json({success: false,message:"no login data found "+loginremove})
//         }
//     })

module.exports =router;
