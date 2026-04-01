const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
  shortUrlId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    required: true
  },
},
{timeStamps:true});

module.exports = mongoose.model('Url', UrlSchema);