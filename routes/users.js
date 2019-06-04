const express=require('express');
const router =express.Router();
const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const userModel=require('../models/userModel');



router.get('/',function(req,res){
    const newUser= new userModel({
        _id: new mongoose.Types.ObjectId(),
        userName:req.body.userName,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,10),
        phoneNumber:req.body.phoneNumber,
        city:req.body.city,
        instrument:req.body.instrument,
        genre:req.body.genre,
        level:req.body.level,

 });



 userModel.find({email:req.body.email})
 .exec()
 .then(users=>{
     if(users.length>0){
         res.send("Account already exits").status(400);
     }
     else{
         
 userModel.find({userName:req.body.userName})
 .exec()
 .then(user=>{
     if(user.length>0){
         res.send("Account already exits").status(400);
     }
     else{
         newUser.save();
        res.sendStatus(201);
     }
 });
     }
 });



});
 


module.exports =router;