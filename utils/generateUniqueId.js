const {nanoid} = require('nanoid')
const Url = require('../models/Url')

module.exports = async () => {
    let urlId = nanoid(6)//creates new urlid 6 character id
    while(true){
        const urlObject = await Url.findOne({urlId})
        if(!urlObject) break;//*if the urlid is not present in the DB then break,no need to create new urlid as it is unique and not saved before, else create new urlid 
        urlId = nanoid(6)
    }
    return urlId;
} 