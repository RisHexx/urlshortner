const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        unique : true,
        required : true
    },
    redirectUrl : {
        type : String,
        required : true,
        unique:true
    },
    totalVisits: {
       type : Number,
       default : 0
    }
},{timestamps:true})


const URL = mongoose.model("URL",urlSchema)

module.exports = {
    URL
}