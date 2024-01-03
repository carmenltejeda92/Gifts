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
// app.get("/", (req, res)=>{
//     res.send("<h1>Hello Bish</h1>")
// })

app.get("/", (req, res)=>{
    res.render("Home")
})


// if statement to display if something's at that index of the array
app.get('/:indexOfGiftArray', (req, res)=>{
    if(giftsss[req.params.indexOfGiftArray]){
        res.send(giftsss[req.params.indexOfGiftArray])
    }else{
        res.send('There are no more items in Santas bag here ' + req.params.indexOfGiftArray)
    }
})

//--------------------[Server]
app.listen("3000", (req, res)=>{
    console.log("Server listening on port 3000")
})