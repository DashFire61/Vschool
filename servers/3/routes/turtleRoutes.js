const express = require('express')
const turtleRouter = express.Router()
const id = require('uuid/v4')



const ninjaTurtles = [
    {
        name: "Raphael",
        weapon: "sais",
        color: "red",
        killCount: 3240,
        _id: id()
    },
    {
        name: "Donatello",
        weapon: "Staff",
        color: "purple",
        killCount: 140,
        _id: id()
    },
    {
        name: "Leonardo",
        weapon: "Swords",
        color: "blue",
        killCount: 5893,
        _id: id()
    },
    {
        name: "Michaelangelo",
        weapon: "Nun-chucks",
        color: "orange",
        killCount: 689,
        _id: id()
    }
]



turtleRouter.route("/")
    .get((req,res,next)=>{
        res.status(200)
        res.send(ninjaTurtles)
    })
    .post((req,res,next)=>{
        const newTurtle = req.body
        newTurtle._id = id()
        ninjaTurtles.push(newTurtle)
        res.status(201)
        res.send(ninjaTurtles)
    })


turtleRouter.get("/search", (req,res,next)=>{
    const killCount = req.query.killCount
    const filteredTurtles = ninjaTurtles.filter(turtle => {
        if(turtle.killCount >= killCount){
            return turtle
        }
    })

    res.status(200)
    res.send(filteredTurtles)
})


turtleRouter.get("/:_id", (req,res,next)=>{
    const foundTurtle = ninjaTurtles.find(turtle => turtle._id === req.params._id)
    res.status(200)
    res.send(foundTurtle)
})







module.exports = turtleRouter