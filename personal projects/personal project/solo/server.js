const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.port || 7000

//middlewares for every request
app.use(express.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({ secret: process.env.SECRET})) //req.user


//DB connections
mongoose.connect(
    "mongodb://localhost:27017/Steam-App",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    () =>{
        console.log("Remote Database Connection Engaged"),
        console.log("All Systems Nominal")
    })

//Routes
app.use("/auth", require('./routes/authRouter.js'))
app.use("/api/steam", require('./routes/steamRouter.js'))


// Global Server Err handler
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){

    }
    return res.send({errMsg:err.message})
})


app.listen(PORT,() => {
    console.log("System Start") 
    console.log("Code: 7000")
    console.log("Local Server Systems Engaged")
})