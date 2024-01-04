// -------------------[Require statements]
require('dotenv').config()
const express = require('express')
const app = express()
const fs = require('fs')
const giftsss = require('./models/gifts')
const gifts = require('./models/gifts')
const Gift = require('./models/gift')
const mongoose = require('mongoose')


// -------------------[Middleware]
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next)=>{
    console.log("I run for all routes")
    next()
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')
})

//-------------------[Routes]
app.get("/", (req, res)=>{
    res.render("Home")
})

//--------------------[Index]
app.get("/gifts", (req, res)=>{
    Gift.find({}, (err, allGifts)=>{
        gifts: allGifts
    })
})

//--------------------[New]
app.get('/gifts/new', (req, res)=>{
    res.render('New')
})

//--------------------[Show]
app.post('/gifts',(req, res)=>{
    if(req.body.NaughtyOrNice === 'on'){
        req.body.NaughtyOrNice = true
    }else{
        req.body.NaughtyOrNice = false
    }
    Gift.create(req.body, (err, createdGift)=>{
        console.log("Created Gift: ", req.body)
        res.redirect('/gifts')
    })
    console.log(req.body)
})


app.get('/gifts/:indexOfGiftArray', (req, res)=>{
    res.render('Show', {
        gift: giftsss[req.params.indexOfGiftArray]
    })
})

// if statement to display if something's at that index of the array
// app.get('/:indexOfGiftArray', (req, res)=>{
//     if(giftsss[req.params.indexOfGiftArray]){
//         res.send(giftsss[req.params.indexOfGiftArray])
//     }else{
//         res.send('There are no more items in Santas bag here ' + req.params.indexOfGiftArray)
//     }
// })

//--------------------[Server]
app.listen("3000", (req, res)=>{
    console.log("Server listening on port 3000")
})