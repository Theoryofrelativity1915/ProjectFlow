const express = require('express')
const router = express.Router()
const { users } = require('../temporary/temp')
const paginatedResults = require('../middleware')

router.get('/', paginatedResults(users, "users"), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})


module.exports = router