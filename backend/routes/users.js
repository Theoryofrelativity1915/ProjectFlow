const express = require('express')
const {pool} = require('../db.js')
const bcrypt = require('bcrypt')
const paginatedResults = require('../middleware/paginatedResults')
const { getPersonnel } = require('../utils/utils')
const router = express.Router()

router.get('/', getPersonnel, paginatedResults, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({"results" : res.paginatedResults, "totalPages": res.totalPages})
})


module.exports = router