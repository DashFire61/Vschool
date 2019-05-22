const express = require('express')
const bountyRouter = express.Router()
const uuidv4 = require('uuid/v4')
const Bounty = require('../models/Bountys.js')


// //get all
// bountyRouter.get("/",(req,res,next)=>{
//     Bounty.find((err, bountys) =>{
//         if(err){
//             res.send(500)
//             return next(err)
//         }
//         return res.status(200).send(bountys)
//     })
//     res.send(bountys)
// })

//get all- with async -await
bountyRouter.get("/", async (req,res,next)=>{
    try{
        const Bountys = await Bounty.find()
        return res.status(200).send(Bountys)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})


//post
bountyRouter.post("/:userID", (req,res,next)=>{
    const newBounty = new Bounty(req.body)
    newBounty.user = req.params.userID
    newBounty.save((err, newSavedBounty)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(newSavedBounty)
    })
})

//get one
bountyRouter.get("/:_id", (req,res,next)=>{
    Bounty.findOne({_id: req.params._id}, (err, Bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Bounty)
    })
})

//put - update one variable
bountyRouter.get("/:_id", (req,res,next)=>{
    Bounty.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, (err, updateBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateBounty)
    })
})

//delete one
bountyRouter.delete("/:_id", (req,res,next)=>{
    Bounty.findOneAndRemove({_id: req.params._id}, (err, deletedBounty)=>{
        if(err){
            res.status(500)
            return(500)
        }
        return res.status(202).send(deletedBounty)
    })
})

module.exports = bountyRouter