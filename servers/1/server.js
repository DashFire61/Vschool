const express = require('express')
const app = express()
console.log(app)

app.get("/", (req, res)=>{
    res.send("hello")
})

app.get("/hi", (req, res)=>{
    res.send("fuck off")
})

app.listen(6969,() => {
    console.log('System Start 6969')
})