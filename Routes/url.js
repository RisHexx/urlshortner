const express = require('express')
const urlRouter = express.Router()
const {URL} = require('../models/url')
const { handlGenNewShortUrl , handelRedirectUrl , handelResetShortUrl} = require('../controllers/url')



urlRouter.get("/:id", handelRedirectUrl)
urlRouter.post("/",handlGenNewShortUrl)
urlRouter.patch("/reset",handelResetShortUrl)

module.exports = {
    urlRouter
}