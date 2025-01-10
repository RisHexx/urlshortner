const {URL} = require('../models/url')
async function fetchUrl(shortid) {
    const url = await URL.findOne({shortId : shortid})
    const redirectUrl = url.redirectUrl
    return redirectUrl  
}

module.exports = {
    fetchUrl
}