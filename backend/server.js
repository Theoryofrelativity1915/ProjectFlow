const express = require('express')
const app = express()
const router = express.Router()
const passport = require('passport')
const session = require('express-session')
const authRouter = require('./routes/auth')
const projectRouter = require('./routes/projects')
const ticketRouter = require('./routes/tickets')
const {postgreStore} = require('./db')
const path = require('path')
const cors = require('cors')

require('dotenv').config()
require('./middleware/passport.js')

const pool = require('./db.js')


app.use(cors())
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

// app.use((req, res, next) => {
//     for(let i = 0; i < comments.length; i++){
//         pool.query('SELECT user_id from "user" WHERE user_name=$1', [comments[i].Commenter], (err, result) => {
//         const query = pool.query('INSERT INTO comment (message, commenter, ticket_id, date) VALUES ($1,$2,$3,$4)',
//          [comments[i].Message, result.user_id, 'a3bd2ea7-2dd5-4a41-8c1d-61e7ea7de3c1', comments[i]['Date Created']], (err, results) => {
//             if(err) {
//               console.log('Error when selecting user on session deserialize', err)
//               return next()
//             }
//           console.log("Done")
//           })
//         })
        
//     }
//     next()
// })


// const isLoggedIn = (req, res, next) => {
//     console.log('test')
//     if (req.isAuthenticated()){
//         return next();
//     }
//     else{
//         return res.redirect('/login')
//     }
// }


app.use(passport.initialize());
app.use(passport.session());


app.use(authRouter)
app.use('/api/projects', projectRouter)
// console.log(path.join(__dirname, "..", "frontend", "build"))
// app.use(express.static(path.join(__dirname, "..", "frontend", "build")))
// app.use('/api/projects', projectRouter)
// app.use('/api/tickets', ticketRouter)


// launch the app
app.listen(3030);
console.log("App running at localhost:3030");