const nodemailer = require("nodemailer")

function sendEmail(userExists) {
    console.log(userExists)
    // if(userExists){
    //     try {
    //         const transporter = nodemailer.createTransport({
    //             host: process.env.HOST,
    //             service: process.env.SERVICE,
    //             port: 587,
    //             secure: true,
    //             auth: {
    //                 user: process.env.USER,
    //                 pass: process.env.PASS,
    //             },
    //         })
    //         await transporter.sendMail({
    //             from: process.env.USER,
    //             to: email,
    //             subject: 'Password Reset Link',
    //         })
    //     } catch (err) {
    //         console.error(err.stack)
    //     }
    // }
    next()
    
}

module.exports = { sendEmail };