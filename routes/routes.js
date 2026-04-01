const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })
const express = require('express')
const router = express.Router()
const {createShortUrl,redirectToOriginalUrl,deleteUrl} = require('../controllers/url') 


// create short url
router.post('/createUrl', createShortUrl)

// find and redirect to original url
router.get('/:shortUrlId',redirectToOriginalUrl)

// delete single url
router.delete('/deleteUrl', deleteUrl)

router.get('/', (req, res) => {
    res.json({message: 'Success'})
})

module.exports = router