const express = require('express')
const authRouter = express.Router()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')




//SIGNUP//////////////////////////////////////////////////////////////////////////////////

authRouter.post("/signup", (req, res, next) =>{
    //does a user by that name exits
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
        //user name is taken throw err
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(500)
            return next(new Error("That username is taken."))
        
    }  
    //save new user
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        } 
    // create our token
    const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
    return res.status(201).send({user: savedUser.withoutPassword(), token })
        })
    })
})
 

//LOGIN////////////////////////////////////////////////////////////////////////////////////

authRouter.post("/login", (req, res, next) =>{
    //Find User by their username
    User.findOne({username:req.body.username.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        //does user exist?
        if(!user){
            res.status(401)
            return next(new Error("Username or password incorrect."))
        }
        //does thier password match
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(401)
                return next(err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error("Username or Password incorrect."))
            }
            //What does the front-end need? user object, token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ user: user.withoutPassword(), token })
        })
    })
})


module.exports = authRouter