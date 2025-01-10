const express = require('express')
const {urlRouter} = require('./Routes/url')
const {dbConnection} = require('./connection')
const app = express()
const PORT = 3000

app.use(express.json())
app.use("/",urlRouter)

dbConnection()
    .then(()=>{
    console.log("Db Connection Sucessful");
    app.listen(PORT,()=>{
        console.log(`Server Started at Port : ${PORT}`);
    })})
    .catch(()=>{
        console.log("Failed Db Connection");
    })