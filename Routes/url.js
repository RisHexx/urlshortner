const express = require('express')
const urlRouter = express.Router()
const {URL} = require('../models/url')
const { handlGenNewShortUrl , handelRedirectUrl } = require('../controllers/url')



urlRouter.get("/:id", handelRedirectUrl)
urlRouter.post("/",handlGenNewShortUrl)

module.exports = {
    urlRouter
}