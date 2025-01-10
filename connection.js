const mongoose = require('mongoose')

async function dbConnection(){
    await mongoose.connect("mongodb+srv://rishex:G7XWX0r8ybiVFUvk@rishex.3cjff.mongodb.net/urlShortner")
}

module.exports = {
    dbConnection
}