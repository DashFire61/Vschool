const express = require('express')
const app = express()
const uuidv4 = require('uuid/v4')
console.log(app)

app.use(express.json())

let todos = [
    {
        name: "The Dude",
        description: "Aquire White Russian",
        imageUrl: "https://cdn.liquor.com/wp-content/uploads/2017/12/20073201/white-russian-720x720-article.jpg",
        completed: false,
        _id: uuidv4(),
    }
]

//get
app.get("/todos",(req,res)=>{
    res.send(todos)
})

//get single
app.get("/todos/:_id", (req,res)=>{
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

//put
app.put("/todos/:_id",(req,res)=>{
    const todoToUpdate = todos.find(todo => todo._id === req.params._id)
    const updatedTodo = Object.assign(todoToUpdate, req.body)
    const updatedDB = todo.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo)
    todos = updatedDB
    res.send(todos)
})

//post
app.post("/todos",(req,res)=>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(todos)
})

//delete
app.delete("/todos",(req,res)=>{
    const todoToDelete = todos.find(todo => todo._id === req.params._id)
    const updatedDB = todos.filter(todo => todo._id !== todoToDelete._id)
    todos = updatedDB
    res.send(todos)
})



app.listen(6969,() => {
    console.log('System Start 6969')
})