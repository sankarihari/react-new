const express = require('express');
const router = express.Router();

const User =require("../model/User");
const cryptoJS = require("crypto-js");

router.use(express.json());
router.use(express.urlencoded({extended:true}));
 
// REGISTER
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.pass_sec).toString(),
    });
try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
}catch (err){
 res.status(500).json(err);
}
   
});




module.exports=router;