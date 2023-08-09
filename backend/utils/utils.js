const bcrypt = require('bcrypt')
const {pool} = require('../db')


const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const insertUser = async (name, email, password) => {
    try {
        const userExists = pool.query('SELECT * FROM users WHERE user_email = $1', [email])
        if (userExists){
            return {error: "Email already exists."}
        }
        hashedPassword = await hashPass(password)
        pool.query('INSERT INTO "user" (user_name, user_email, user_password) VALUES ($1,$2,$3)', [name, email, hashedPassword])
    } catch (err) {
       console.log(err)
    }
}

module.exports = { insertUser }