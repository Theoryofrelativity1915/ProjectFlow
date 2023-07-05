const express = require('express')
const router = express.Router()
const {projectsList, projectsData} = require('../temporary/temp')
const paginatedResults = require('../middleware')

router.get('/', paginatedResults(projectsList, "projects"), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})

router.get('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    res.status(200).send(projectsData[0].tickets)
})
router.get('/:id/tickets', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    res.status(200).send(projectsData[0].tickets)
})



module.exports = router