const express = require('express')
const router = express.Router()
const { tickets } = require('../temporary/temp')
const paginatedResults = require('../middleware')

router.get('/', paginatedResults(tickets, "tickets"), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({"results" : res.paginatedResults, "totalPages" : res.totalPages})

})

module.exports = router