const express = require('express')
const userRouter = express.Router()
const User = require("../models/user.js")


userRouter.post("/signup", (req,res,next)=>{
    const newUser = new User(req.body)
    newUser.save((err,savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

userRouter.get("/", (req,res,next) => {
    userRouter.find((err,user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})


userRouter.get("/:username", (req,res,next)=>{
    User.findOne({username:req.params.username},(err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})


module.exports = userRouter