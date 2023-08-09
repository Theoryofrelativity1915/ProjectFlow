const router = require('express').Router();
const passport = require('passport');
const { insertUser } = require('../utils/utils');

// route middleware to ensure user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect("/login");
    }
}

router.get("/", isLoggedIn, (req, res) => {
    res.send("Hello!");
});

router.post('/register', (req, res) => {
    insertUser(req.body.name, req.body.email, req.body.password)
    res.redirect("/login");
});

router.post("/login",
    passport.authenticate("local-login", { failureRedirect: "/login", successRedirect: "/"}),
    (req, res) => {
        res.redirect("/");
});

router.get("/logout", (req, res) => {
    req.logout((err) => {
        req.session = null
        if(err)
        return next(err)
        res.send("logout success!")
    });
});

module.exports = router;