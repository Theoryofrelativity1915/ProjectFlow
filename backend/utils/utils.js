const bcrypt = require('bcrypt')
const {pool} = require('../db')


const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const userExists = async (email) => {
    console.log("Checking if user exists")
    try{
        const user = await pool.query('SELECT * FROM "user" WHERE email = $1', [email])        
        if (user.rows > 0){
            return true
        }
        else{
            return false
        }
    } catch(err){
        console.log(err)
    }
}

const insertUser = async (name, email, password) => {
    try {
        const user = await pool.query('SELECT * FROM "user" WHERE email = $1', [email])        
        if (user.rows > 0){
            return {error: "Email already exists."}
        }
        hashedPassword = await hashPass(password)
        
        pool.query('INSERT INTO "user" (name, email, password) VALUES ($1,$2,$3)', [name, email, hashedPassword])
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
    const id = req.params.id
    
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        if (id){
            client.query('SELECT ticket.project_id, ticket.title, ticket.status, ticket.date, ticket.submitter, ticket.developer, "user1".name as submitter, "user2".name as developer FROM ticket JOIN "user" as "user1" ON ticket.submitter="user1".user_id JOIN "user" as "user2" ON ticket.developer="user2".user_id WHERE ticket.project_id = $1', [id], (err, result) => {
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
        else{
            client.query('SELECT project.title as "Project Name", ticket.ticket_id, ticket.title, ticket.status, ticket.date,ticket.ticket_priority as priority,"user2".name as developer FROM ticket JOIN "user" as "user1" ON ticket.submitter="user1".user_id JOIN "user" as "user2" ON ticket.developer="user2".user_id JOIN project ON ticket.project_id = project.project_id;', (err, result) => {
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

function getProjectPersonnel(req, res, next) {
    const id = req.params.id
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT name, email, role, project_id FROM "user" WHERE project_id = $1', [id], (err, result) => {
                client.release()
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{                        
                    res.models = result.rows
                    res.type = 'users'
                    return next()
                }
            })
        }
    })
}

function getPersonnel(req, res, next) {
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT name, email, role, project_id FROM "user"', (err, result) => {
                client.release()
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{                        
                    res.models = result.rows
                    res.type = 'users'
                    return next()
                }
            })
        }
    })
}
function createProject(req, res, next) {
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query('INSERT INTO project (title, description) VALUES ($1,$2) RETURNING project_id', [req.body.title, req.body.description], (err, result) => {
                
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{
                    console.log(result.rows[0].project_id)
                    // console.log(req.body.users)
                    for(let i = 0; i < req.body.users.length; i++){
                        client.query('UPDATE "user" SET project_id = $1 WHERE name LIKE $2', [result.rows[0].project_id, req.body.users[i]], (err, result) => {})
                    }
                    
                    client.release()
                    return next()
                }
            })
        }
    })
}

module.exports = { insertUser, userExists, getProjects, getTickets, getProjectPersonnel, getPersonnel, createProject }