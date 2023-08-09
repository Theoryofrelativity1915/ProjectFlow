const express = require('express')
const router = express.Router()
// import { paginatedResults } from '../middleware.js'

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
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

module.exports = router