const bcrypt = require('bcrypt')
const {pool} = require('../db')


const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const insertUser = async (name, email, password) => {
    try {
        
        const userExists = await pool.query('SELECT * FROM "user" WHERE user_email = $1', [email])        
        if (userExists.rows > 0){
            return {error: "Email already exists."}
        }
        hashedPassword = await hashPass(password)
        
        pool.query('INSERT INTO "user" (user_name, user_email, user_password) VALUES ($1,$2,$3)', [name, email, hashedPassword])
    } catch (err) {
       console.error(err)
    }
}

module.exports = { insertUser }