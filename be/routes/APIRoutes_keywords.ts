const express = require('express')

const route = express.Router()
// importing the function
const data = require('../dictDataInterface/htmlDataExtractor/htmlWorker')
data('absolute path')
// route.get(
//     '/bookmarkPage/:keyword',
//     (req, res) => {
//         const userKeywordInput = req.params.keyword
//
//     })
//
// module.exports = route