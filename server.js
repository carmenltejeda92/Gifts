// -------------------[Require statements]
const express = require('express')
const app = express()
const fs = require('fs')
const giftsss = require('./models/gifts')


// -------------------[Middleware]
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.urlencoded({extended:false}))

//-------------------[Routes]
app.get("/", (req, res)=>{
    res.send("<h1>Hello Bish</h1>")
})

app.get("/home", (req, res)=>{
    res.render("Home")
})



app.get('/:indexOfGiftArray', (req, res)=>{
    res.send(giftsss[req.params.indexOfGiftArray])
})

//--------------------[Server]
app.listen("3000", (req, res)=>{
    console.log("Server listening on port 3000")
})