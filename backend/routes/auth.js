const express = require('express')
const router = express.Router();
const passport = require('passport');
const { insertUser } = require('../utils/utils');
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

// router.get("/", (req, res) => {
//     res.send("Hello")
// });

// router.get('/register', (req, res) => {
//     res.send("<p>Please register!</p><form method='post' action='/register'><input type='text' name='name'/><input type='text' name='email'/><input type='password' name='password'/><button type='submit' value='submit'>Submit</buttom></form>");
// })

router.post('/register', (req, res) => {
    insertUser(req.body.name, req.body.email, req.body.password)
    res.redirect("/login");
});

// router.get("/login", function (req, res) {
//     res.send("<p>Please login!</p><form method='post' action='/login'><input type='text' name='username'/><input type='password' name='password'/><button type='submit' value='submit'>Submit</buttom></form>");
// });

router.get('/authenticated', isLoggedIn, (req, res) => {
    res.status(200).send(true)
})

router.post("/login",
    passport.authenticate("local-login"),
    (req, res) => {
        res.send("good request")
    }
);

// router.get("/content", isLoggedIn, (req, res) => {
//     console.log(res)
//     res.send("Congratulations! you've successfully logged in.");
// });

router.get("/logout", (req, res) => {
    req.logout((err) => {
        req.session = null
        if(err)
        return next(err)
        res.send("logout success!")
    });
});
module.exports = router;