const mongoose = require('mongoose')

const giftSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    NaughtyOrNice: Boolean
})

const Gift = mongoose.model('Gift', giftSchema)

module.exports = Gift