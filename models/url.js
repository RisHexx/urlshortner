const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        unique : true,
        required : true
    },
    redirectUrl : {
        type : String,
        required : true
    },
    visitHistory: {
        type : [{timeStamp : {type : Number}}]
    }
},{timestamps:true})


const URL = mongoose.Model("URL",urlSchema)

module.exports = {
    URL
}