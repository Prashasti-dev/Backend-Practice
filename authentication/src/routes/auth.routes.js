const express= require("express")
const userModel = require("../models/user.model")
const jwt=require("jsonwebtoken")

const authRouter=express.Router()

authRouter.post("/register", async(req,res)=>{
        const{name,email,password}=req.body

//alrady existed check
const isUserAreadyExist=await userModel.findOne({email})
if(isUserAreadyExist){
    return res.status(400).json({
        message:"user already exists"
    })
    
}

        //data ko save

      const user= await userModel.create({
            name,email,password
        })
        console.log(user)

        res.status(201).json({
            message:"user registered",
            user
        })
})

module.exports=authRouter