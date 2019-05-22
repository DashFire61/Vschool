const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 6969
const mongoose = require('mongoose')
const path = require("path")


app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/bountys", {useNewUrlParser: true}, () => {
    console.log("DataBase Connection Nominal")
    console.log("Ready For Operations..")
    console.log("Good Morning Bounty Hunter")
})


app.use("/bountys", require('./routes/bountysRoutes.js'))
app.use("/user", require('./routes/userRoutes.js'))

//global sever error handler
app.use((err,req,res,next)=> {
console.error(err)
res.send({errMsg: err.message})
})





app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// axios.post("/bountys", {}).then(res =>{
//     console.log(res)
// })


app.listen(PORT,() => {
    console.log("System Start") 
    console.log("Code: 6969")
    console.log("Server Systems Nominal")
})