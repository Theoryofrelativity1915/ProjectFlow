const bcrypt = require('bcrypt')
const {pool} = require('../db')


const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const insertUser = async (name, email, password) => {
    try {
        const user = await pool.query('SELECT * FROM "user" WHERE user_email = $1', [email])        
        if (user.rows > 0){
            return {error: "Email already exists."}
        }
        hashedPassword = await hashPass(password)
        
        pool.query('INSERT INTO "user" (user_name, user_email, user_password) VALUES ($1,$2,$3)', [name, email, hashedPassword])
    } catch (err) {
       console.error(err)
    }
}

function getProjects(req, res, next) {
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query("SELECT * FROM project", (err, result) => {
                client.release()
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{
                    res.models = result.rows
                    res.type = 'projects'
                    return next()
                }
                
            })
        }
    })
}


function getTickets(req, res, next) {
    console.log('test')
    const id = req.params.id
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query("SELECT * FROM ticket WHERE project_id=$1", [id], (err, result) => {
                client.release()
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{
                    res.models = result.rows
                    res.type = 'tickets'
                    return next()
                }
                
            })
        }
    })
}
module.exports = { insertUser, getProjects, getTickets }