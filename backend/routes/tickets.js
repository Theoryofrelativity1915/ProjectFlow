const express = require('express')
const router = express.Router()
const paginatedResults = require('../middleware/paginatedResults')
const { getTickets, getTicket, getTicketComments, createTicket, addComment } = require('../utils/utils')

router.get('/', getTickets, paginatedResults, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})

router.get('/:id', getTicket, (req, res) => {
    console.log('polling')
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(res.ticket)
})

router.get('/:id/comments', getTicketComments, paginatedResults, (req, res) => {
    console.log("Getting comments")
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})

router.post('/create', createTicket, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send("Good Request")
})

router.post('/:id/comment', addComment, (req, res) => {
    console.log("adding comment")
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send("Good Request")
})

module.exports = router