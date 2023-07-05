const express = require('express')
const bcrypt = require('bcryptjs')
const path = require('path')
const app = express()
const port = 5000
const projectRouter = require(path.join(__dirname, 'routes', 'projects'))
const userRouter = require(path.join(__dirname, 'routes', 'users'))
const ticketRouter = require(path.join(__dirname, 'routes', 'tickets'))

// app.use(express.static(path.join(__dirname, "..", "frontend", "build")))
app.use(express.json({ limit: '100mb' }))
app.use('/api/projects', projectRouter)
app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(port, () => console.log(`listening on port ${port}`))