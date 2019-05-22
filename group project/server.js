const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 6969
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


//connect to mongodb
mongoose.connect("mongodb://localhost:27017/rpg", {useNewUrlParser: true}, () => {
    console.log("DataBase Connection Nominal")
    console.log("Ready For Operations..")
    console.log("Good Morning")
})


app.use("/player", require('./routes/playerRoutes.js'))
app.use("/user", require('./routes/obectRoutes.js'))

//global sever error handler
app.use((err,req,res,next)=> {
console.error(err)
res.send({errMsg: err.message})
})




app.listen(PORT,() => {
    console.log("System Start") 
    console.log("Code: 6969")
    console.log("Server Systems Nominal")
})