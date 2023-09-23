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
        console.error(err)
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
            client.query('SELECT ticket.project_id,\
                ticket.title,\
                ticket.status,\
                ticket.date,\
                ticket.submitter,\
                ticket.developer,\
                "user1".name as submitter,\
                "user2".name as developer\
                FROM ticket\
                JOIN "user" as "user1"\
                ON ticket.submitter="user1".user_id\
                JOIN "user" as "user2"\
                ON ticket.developer="user2".user_id\
                WHERE ticket.project_id = $1', [id], (err, result) => {
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
            client.query('SELECT project.title as "Project Name",\
                ticket.ticket_id,\
                ticket.title,\
                ticket.status,\
                ticket.date,\
                ticket.ticket_priority as priority,\
                "user2".name as developer\
                FROM ticket JOIN "user" as "user1"\
                ON ticket.submitter="user1".user_id\
                JOIN "user" as "user2"\
                ON ticket.developer="user2".user_id\
                JOIN project\
                ON ticket.project_id = project.project_id;', (err, result) => {
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

function createTicket(req, res, next){
    const title = req.body.title
    const description = req.body.description
    const submitter = '8831bb4f-f150-4de7-b177-5e3e8541d98e'
    const developer = req.body.dev
    const priority = req.body.priority
    const type = req.body.type
    const deviceType = req.body['deviceType']
    const projectTitle = req.body.projectTitle
    console.log(projectTitle)
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT project_id FROM project WHERE title = $1', [projectTitle], (err, result) => {
                if(err){
                    console.error(err.stack)
                }
                else{
                    const project_id = result.rows[0].project_id
                    client.query("INSERT INTO ticket\
                    (title,\
                    description,\
                    submitter,\
                    ticket_priority,\
                    status,\
                    ticket_type,\
                    developer,\
                    project_id,\
                    device_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [title, description, submitter, priority, true, type, developer, project_id, deviceType], (err, result) => {
                        client.release()
                        if(err){
                            console.error(err.stack)
                        }
                        else{
                            return next()
                        }
                    })
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
            client.query('SELECT name, email, role, project_id, user_id FROM "user"', (err, result) => {
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
            client.query('INSERT INTO project\
             (title, description) VALUES ($1,$2) RETURNING project_id', [req.body.title, req.body.description], (err, result) => {
                
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{
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

function deleteProject(req, res, next) {
    const id = req.body.id
    pool.connect((err, client) => {
        if (err){
            console.error(err.stack)
        }
        else{
            client.query('DELETE FROM project WHERE project_id = $1', [id], (err, result) => {
                client.release()
                if (err){
                    console.error(err.stack)
                    next()
                }
                else{                        
                    return next()
                }
            })
        }
    })
}

module.exports = { insertUser, userExists, getProjects, getTickets, createTicket, getProjectPersonnel, getPersonnel, createProject, deleteProject }