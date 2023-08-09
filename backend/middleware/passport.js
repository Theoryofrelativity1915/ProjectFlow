const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {pool} = require('../db.js')
const bcrypt = require('bcrypt')

const verifyCallback = (username, password, done) => {
  console.log('test')
    pool.query('SELECT user_id, user_name, user_password FROM "user" WHERE user_name=$1', [username], (err, result) => {
      if(err) {
        console.log('Error when selecting user on login', err)
        return done(err)
      }
      if("result is: ", result) {
        bcrypt.compare(password, result.user_password, function(err, res) {
          if(res) {
            done(null, { id: result.user_id, username: result.user_name})
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
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    const query = pool.query('SELECT user_id FROM "user" WHERE user_id = $1', [user.user_id], (err, results) => {
      if(err) {
        console.log('Error when selecting user on session deserialize', err)
        return done(err)
      }
    done(null, user)
    })
  })