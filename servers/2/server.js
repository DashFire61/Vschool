const express = require('express')
const app = express()
const uuidv4 = require('uuid/v4')
console.log(app)

app.use(express.json())

// fake database

let wizards = [
    {
        name: "Harry Potter",
        age: 16,
        isGood: true,
        favClasses: ["Potions", "Defense Against Dark Arts", "Quidditch"],
        hasOwl: true,
        house: "Stair-closet/Gryffindor",
        _id:  uuidv4(),
    },
    {
        name: "Ron Weasley",
        age: 16,
        isGood: true,
        favClasses: ["Potions", "Defense Against Dark Arts"],
        hasOwl: false,
        house: "Mystical house/Gryffindor",
        _id:  uuidv4(),
    },
    {
        name: "Belatrix Lestrange",
        age: 40,
        isGood: false,
        favClasses: ["forbidden spells", "Dark magic", "killing good guys"],
        hasOwl: false,
        house: "none/voldemort",
        _id:  uuidv4(),
    }
]


// Routes - Endpoints



//GET ALL
//GET COLLECTION
app.get('/wizards',(req,res)=>{
    res.send(wizards)
})





//GET ONE
//GET SINGLE RESOURCE
app.get("/wizard/:_id",(req,res)=>{
    const foundWizard = wizards.find(wizard => wizard._id === req.params._id)
    res.send(foundWizard)
})


//POST - INSERT ONE

app.post("/wizards",(req,res)=>{
    const newWizard = req.body
    newWizard._id = uuidv4()
    wizards.push(newWizard)
    res.send(wizards)
})


//DELETE

app.delete("/wizards/:_id",(req,res)=>{
    //find wizard
    const wizardToDelete = wizards.find(wizard => wizard._id === req.params._id)
    //created updated array without that wizard
    const updatedDB = wizards.filter(wizard => wizard._id !== wizardToDelete._id)
    //reassign DB to updated Array
    wizards = updatedDB
    //return DB
    res.send(wizards)
})


//PUT

app.put("/wizards/:_id",(req,res)=>{
    //find wizard
    const wizardToUpdate = wizards.find(wizard => wizard._id === req.params._id)
    // object.assign()
    const updatedWizard = Object.assign(wizardToUpdate, req.body)
    const updatedDB = wizards.map(wizard => wizard._id === updatedWizard._id ? updatedWizard : wizard)
    wizards = updatedDB
    res.send(wizards)
})




app.listen(6969,() => {
    console.log('System Start 6969')
})