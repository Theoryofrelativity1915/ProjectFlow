const express = require('express')
const { pool } = require('../db.js')
const bcrypt = require('bcryptjs')
const paginatedResults = require('../middleware/paginatedResults')
const { getPersonnel, assignPersonnel } = require('../utils/utils')
const router = express.Router()

router.get('/', getPersonnel, paginatedResults, (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send({ "results": res.paginatedResults, "totalPages": res.totalPages })
})

router.put('/assign', assignPersonnel, (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send('Good request.')
})


module.exports = router
