const ShortUniqueId = require('short-unique-id');
const {URL} = require('../models/url')
const {fetchUrl} = require('../utils/fetchUrl')

async function handlGenNewShortUrl(req, res) {
    try{
        const {url} = req.body;
        if (!url){
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
        const url = await fetchUrl(id)
        res.json({"redirectUrl" : url })
        } catch (error) {
            res.send("Erro : "+error.message)
        }
}

module.exports = {
    handlGenNewShortUrl,
    handelRedirectUrl
};
