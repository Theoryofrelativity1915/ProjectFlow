const bcrypt = require('bcryptjs')
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
                ON ticket.project_id = project.project_id\
                ORDER BY date', (err, result) => {
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

function getTicket(req, res, next){
    const id = req.params.id
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT\
            ticket_id,\
            ticket.title,\
            ticket.description,\
            status,\
            date,\
            ticket_priority AS priority,\
            "user1".name AS developer,\
            "user2".name AS submitter,\
            project.title AS project\
            FROM ticket \
            JOIN "user" AS "user1"\
            ON ticket.developer="user1".user_id\
            JOIN "user" AS "user2"\
            ON ticket.submitter = "user2".user_id\
            JOIN project\
            ON ticket.project_id = project.project_id\
            WHERE ticket_id = $1;', [id], (err, result) => {
                client.release()
                if(err){
                    console.error(err)
                }
                else{
                    res.ticket = result.rows[0]
                    return next()
                }
            })
        }
    })
}

function getTicketComments(req, res, next){
    const id = req.params.id
    
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT \
            message,\
            date,\
            "user".name as commenter\
            FROM comment\
            JOIN "user"\
            ON comment.commenter = "user".user_id WHERE ticket_id = $1', [id], (err, result) => {
                if(err){
                    console.error(err)
                }
                else{
                    res.models = result.rows
                    res.type = 'comments'
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

function addComment(req, res, next){
    const id = req.params.id
    const message = req.body.message
    console.log(message)
    const commenter = '8831bb4f-f150-4de7-b177-5e3e8541d98e'
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('INSERT INTO comment(\
                message,\
                commenter,\
                ticket_id)\
                VALUES ($1,$2,$3)', [message, commenter, id], (err, result) => {
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

function assignPersonnel(req, res, next){
    const users = req.body.users
    const type = req.body.type
    const task = req.body.task
    const role = req.body.role
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            if(type == 'Project'){
                client.query('SELECT project_id FROM project WHERE title LIKE $1', [task], (err, result) => {
                    const project_id = result.rows[0].project_id
                    if(err){
                        console.error(err.stack)
                    }
                    else{
                        for(let i = 0; i < users.length; i++){
                            console.log(project_id)
                            client.query('UPDATE "user" SET project_id = $1, role = $2 WHERE name = $3', [project_id, role, users[i]], (err, result) => {
                                if(err){
                                    console.error(err)
                                }
                            })
                        }
                    }
                })
            }
            else{
                client.query('SELECT user_id FROM "user" WHERE name LIKE $1', [users[0]], (err, result) => {
                    if(err){
                        console.error(err.stack)
                    }
                    else{
                        const user_id = result.rows[0].user_id
                        client.query('UPDATE ticket SET developer = $1 WHERE title LIKE $2', [user_id, task])
                    }
                })
            }
            client.release()
            return next()
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


function resetPassword(req, res, next){
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('UPDATE "user" SET password = $1 WHERE email = $2', [password, email], (err, result) => {
                if(err){
                    console.error(err.stack)
                }
                else{
                    return next()
                }
            })
        }
        client.release()
    })
}

function checkUser(req, res, next){
    console.log('checking')
    pool.connect((err, client) => {
        if(err){
            console.error(err.stack)
        }
        else{
            client.query('SELECT user_id, password FROM "user" WHERE email = $1', [req.body.email], (err, result) => {
                if(err){
                    console.error(err.stack)
                }
                else{
                    return next(result.rows)
                }
            })
        }
        client.release()
    })
}

module.exports = { insertUser, userExists, getProjects, getTickets, getTicket, getTicketComments, createTicket, addComment, getProjectPersonnel, getPersonnel, assignPersonnel, createProject, deleteProject, resetPassword, checkUser }