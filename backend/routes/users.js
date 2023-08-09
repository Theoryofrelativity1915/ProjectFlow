const express = require('express')
const {pool} = require('../db.js')
const bcrypt = require('bcrypt')
// import { paginatedResults } from '../middleware.js'
const router = express.Router()

router.get('/', paginatedResults(users, "users"), (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({"results" : res.paginatedResults, "totalPages" : res.totalPages})
})


router.get('/all-users', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users')
        res.json({users: users.rows})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post('/create', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *', 
            [req.body.name, req.body.email, hashedPassword])
        res.json({users:newUser.rows[0]})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router