const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const authRouter = require('./routes/auth')
const projectRouter = require('./routes/projects')
const ticketRouter = require('./routes/tickets')
const userRouter = require('./routes/users')
const {postgreStore} = require('./db')
const cors = require('cors')

require('dotenv').config()
require('./middleware/passport.js')

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

 
// initialize passposrt and and session for persistent login sessions
app.use(session({
    store: postgreStore,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    },
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(authRouter)
app.use('/api/projects', projectRouter)
app.use('/api/tickets', ticketRouter)
app.use('/api/users', userRouter)

// launch the app
app.listen(3030);
console.log("App running at localhost:3030");