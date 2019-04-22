const express = require('express')
const bountyRouter = express.Router()
const uuidv4 = require('uuid/v4')
const Bounty = require('../models/Bountys.js')


//get all
bountyRouter.get("/",(req,res,next)=>{
    Bounty.find((err, bountys) =>{
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(200).send(bountys)
    })
    res.send(bountys)
})


//post
bountyRouter.post("/", (req,res,next)=>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedBounty)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(newSavedBounty)
    })
})


module.exports = bountyRouter