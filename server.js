// -------------------[Require statements]
require('dotenv').config()
const express = require('express')
const app = express()
const fs = require('fs')
const Gift = require('./models/gift')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


// -------------------[Middleware]
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(methodOverride('_method'))
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

//--------------------[Index [R]]
app.get("/gifts", (req, res)=>{
    Gift.find({}, (err, allGifts)=>{
        res.render('Index',{
            gifts: allGifts
        })
    })
})

//--------------------[New]
app.get('/gifts/new', (req, res)=>{
    res.render('New')
})

//--------------------[POST [C]]
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

//--------------------[Edit [U]]
app.get('/gifts/:id/edit', (req, res)=>{
    Gift.findById(req.params.id, (err, foundGift)=>{
        if(!err){
            res.render('Edit', {
                gift: foundGift
            })
        }else{
            res.send({msg: err.messge})
        }
    })
})

//--------------------[PUT/PATCH [U]]
app.put('/gifts/:id', (req, res)=>{
    if(req.body.NaughtyOrNice === 'on'){
        req.body.NaughtyOrNice == true
    }else{
        req.body.NaughtyOrNice = false
    }
    Gift.findByIdAndUpdate(req.params.id, req.body, (err, updatedGift)=>{
        console.log(updatedGift)
        res.redirect(`/gifts/${req.params.id}`)
    })
})

//--------------------[Delete [D]]
app.delete('/gifts/:id', (req, res)=>{
    Gift.findByIdAndRemove(req.params.id,(err, data)=>{
        res.redirect('/gifts')
    })
})

//--------------------[Show]
app.get('/gifts/:id', (req, res)=>{
    Gift.findById(req.params.id, (err, foundGift)=>{
        res.render('Show', {
            gift: foundGift
        })
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