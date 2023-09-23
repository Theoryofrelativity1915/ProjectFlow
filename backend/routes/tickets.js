const express = require('express')
const router = express.Router()
const paginatedResults = require('../middleware/paginatedResults')
const { getTickets, createTicket } = require('../utils/utils')

router.get('/', getTickets, paginatedResults, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({tickets: 'Ticket 1'})
})

router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
})

router.post('/create', createTicket, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send("Good Request")
})

module.exports = router