const express = require('express')
const router = express.Router();
const passport = require('passport');
const { insertUser, userExists } = require('../utils/utils');
const path = require('path')

// route middleware to ensure user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    else{
        res.status(401).send(false);
    }
}


router.post('/register', async(req, res) => {
    try{
        const usernameExists = await userExists(req.body.email)
        console.log(usernameExists)
        if(!(usernameExists)){
            console.log("creating user")
            insertUser(req.body.username, req.body.email, req.body.password)
            res.status(200).send("User created.")
        }
        else{
            console.log("not creating user")
            res.status(400).send("User exists.")
        }
    } catch(err){
        console.log(err)
    }
});

router.options('/authenticated', (req, res) => {
    console.log('options endpoint hit')
    next()
})

router.get('/authenticated', isLoggedIn, (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).send(true)
})

router.post("/login",
    passport.authenticate("local-login"),
    (req, res) => {
        res.send("good request")
    }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {
        req.session = null
        if(err)
        return next(err)
        res.send("logout success!")
    });
});
module.exports = router;