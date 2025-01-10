const ShortUniqueId = require('short-unique-id');
const validator = require('validator')
const {URL} = require('../models/url')
const {fetchId} = require('../utils/fetchid')

async function handlGenNewShortUrl(req, res) {
    try{
        const {url} = req.body;
        
        if (!url ){
        throw new Error("Invalid Url");
        }
        const checkUrlExists = await URL.findOne({redirectUrl : url})
        if(checkUrlExists){
            return res.json({
                "ShortId" : checkUrlExists.shortId
            })
        } 
        const uid = new ShortUniqueId({length : 8})
        const shortedId = uid.rnd();
        const urlObj = new URL({
            shortId: shortedId,
            redirectUrl: url,
        });
        await urlObj.save()
        return res.json({
            "ShortId" : shortedId
        });
    }catch(err){
        res.send("Error : "+err.message)
    }
}


async function handelRedirectUrl(req,res) {
        try {
        const id = req.params.id
        if(id.toString().length < 8 && id.toString().length > 8){
            throw new Error("Invalid ID");
        }
        const urlObj = await fetchId(id)
        urlObj.totalVisits += 1
        await urlObj.save()
        res.json({"redirectUrl" : urlObj.redirectUrl })
        // res.redirect(urlObj.redirectUrl)
        } catch (error) {
            res.send("Error : "+error.message)
        }
}

async function handelResetShortUrl(req,res) {
    try{
        const {url} = req.body;
        if (!url){
        throw new Error("Invalid Url");
        }
        const checkUrlExists = await URL.findOne({redirectUrl : url})
        if(!checkUrlExists){
            throw new Error("This url is Not Shorted Yet");
        }
        const uid = new ShortUniqueId({length : 8})
        const shortedId = uid.rnd();
        checkUrlExists.shortId = shortedId
        await checkUrlExists.save()
        return res.json({
            "ResetedShortId" : shortedId
        });
    }catch(err){
        res.send("Error : "+err.message)
    }
}

module.exports = {
    handlGenNewShortUrl,
    handelRedirectUrl,
    handelResetShortUrl
};
