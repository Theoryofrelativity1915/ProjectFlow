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
	origin: 'http://52.3.221.82:3000',
    credentials: true
}


app.use(cors(corsOptions))
//app.options('', function (req, res) {
//	console.log(req)
//  res.setHeader("Access-Control-Allow-Origin", 'http://52.3.221.82:3000');
//  res.setHeader('Access-Control-Allow-Methods', '*');
//  res.setHeader("Access-Control-Allow-Headers", "*");
  //res.end();
//});

//app.use('', function (req, res) {
//  res.setHeader("Access-Control-Allow-Origin", 'http://52.3.221.82:3000');
//  res.setHeader('Access-Control-Allow-Methods', '*');
//  res.setHeader("Access-Control-Allow-Headers", "*");
  //res.end();
//});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://52.3.221.82:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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
