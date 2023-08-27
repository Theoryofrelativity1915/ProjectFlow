const express = require('express')
const router = express.Router()
const paginatedResults = require('../middleware/paginatedResults')
const { pool } = require('../db.js')
const { getProjects, getTickets } = require('../utils/utils')


router.get('/', getProjects, paginatedResults, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({"results" : res.paginatedResults, "totalPages" : res.totalPages})

})

router.get('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    pool.query('Select * FROM project WHERE project_id=$1', [id], (err, result) => {
        res.status(200).send(result.rows[0])
    })
})

router.get('/:id/tickets', getTickets, paginatedResults, (req, res) => {
   
    res.setHeader('Content-Type', 'application/json')
    // pool.query('SELECT * FROM ticket WHERE project_id=$1', [id], (err, result) => {
    //     console.log(result)
    //     res.status(200).send(result.rows[0])
    // })
    res.status(200).send({"results" : res.paginatedResults, "totalPages": res.totalPages})
})


router.get('/:id/personnel', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    pool.query('SELECT user_name, user_email, user_role FROM "user"', (err, result) => {
        res.status(200).send(result)
    })
    // res.status(200).send({"results" : res.paginatedResults, "totalPages": res.totalPages})
})

module.exports = router