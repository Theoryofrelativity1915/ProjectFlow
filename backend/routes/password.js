
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/email')
const { userExists, resetPassword } = require('../utils/utils')


// const secret = process.env.secret
// const payload = {
//     email: email,
//     user_id: user_id
// }
// const token = jwt.sign(payload, secret, {expiresIn: '15m'})
// const link = `http://localhost:/3000/reset-password/${user_id}/${token}`

router.post('/forgot', userExists, sendEmail, (req, res) => {
    console.log('endpoint hit')
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send('Good request.')
})

router.post('/reset/:id/token', resetPassword, (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send('Good request.')
})


module.exports = router