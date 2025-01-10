const {URL} = require('../models/url')
async function fetchId(shortid) {
    const urlObj = await URL.findOne({shortId : shortid})
    // const redirectUrl = url.redirectUrl
    return urlObj
}


module.exports = {
    fetchId
}

