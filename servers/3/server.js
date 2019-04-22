const express = require('express')
const app = express()
const morgan = require('morgan')
console.log(app)


app.use(express.json())
app.use(morgan('dev'))


app.use("/turtles", require('./routes/turtleRoutes.js'))




app.listen(6969, () =>{
    console.log("System Start")
    console.log("Code: 6969")
})