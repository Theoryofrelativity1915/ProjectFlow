const express = require('express')
const router = express.Router()
// const paginatedResults = require('../middleware.js')
const { pool } = require('../db.js')


router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    pool.connect((err, client, done) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query("SELECT * FROM project", (err, result) => {
                if (err){
                    console.error(err.stack)
                }
                else{
                    console.log(result.rows)
                    res.send(result.rows)
                }
                client.release()
            })
        }
    })
    
})

router.get('/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    pool.query('Select * FROM project WHERE title LIKE $1', [id], (err, result) => {
        res.status(200).send(result)
    })
})

router.get('/:id/tickets', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = req.params.id
    pool.query('SELECT * FROM ticket WHERE title LIKE $1', [id], (err, result) => {
        res.status(200).send(result)
    })
    // res.status(200).send({"results" : res.paginatedResults, "totalPages": res.totalPages})
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