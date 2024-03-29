const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {pool} = require('../db.js')
const bcrypt = require('bcryptjs')

const verifyCallback = (username, password, done) => {
    pool.query('SELECT user_id, name, password, role FROM "user" WHERE email=$1', [username], (err, result) => {
      if(err) {
        console.error(err)
        return done(err)
      }
      if(result.rows.length === 0){
        done(null, false)
      }
      else if("result is: ", result) {
        bcrypt.compare(password, result.rows[0].password, function(err, res) {
          if(res) {
            done(null, { id: result.rows[0].user_id, username: result.rows[0].name, role: result.rows[0].role })
           } else {
            done(null, false)
           }
         })
       } else {
        done(null, false)
       }
    })
  }

const strategy = new LocalStrategy(verifyCallback)

passport.use('local-login', strategy)

// passport needs ability to serialize and unserialize users out of session
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    const query = pool.query('SELECT user_id FROM "user" WHERE user_id = $1', [user.user_id], (err, results) => {
      if(err) {
        console.error(err)
        return done(err)
      }
    done(null, user)
    })
  })