import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/register.css'

function RegisterForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [emailExists, setEmailExists] = useState(false)
    const navigate = useNavigate()
    const passwordsMatchCheck = () => {
        if(password == confirmPassword){
            setPasswordsMatch(true)
        }
        else if (!(confirmPassword == null)){
            setPasswordsMatch(false)
        }
    }
    useEffect(() => {
        passwordsMatchCheck()
    })
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirm-password"){
            setConfirmPassword(value)
        }
    }

    const handleSubmit = (e) => {
        if (passwordsMatch){
            e.preventDefault()
            const form = e.target
            var obj = {
                username: e.target[0].value + " " + e.target[1].value,
                email: e.target[2].value,
                password: e.target[3].value
            }
            const json = JSON.stringify(obj)
            fetch('http://52.3.221.82:3030/register', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: json,
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': true
                },
            })
                .then((response) => {
                if (response.status == 200){
                    console.log(response)
                    navigate('/login')
                }
                else{
                    console.log(response)
                }
                })
            }
        }
  return (
    <div className="form">
    <form className="form-body" onSubmit={handleSubmit}>
        <div className="username">
            <label for="firstName"/>
            <input onChange={(e) => handleInputChange(e)} className="form-input" type="text" id="firstName" placeholder="First Name" required/>
        </div>
        <div className="lastname">
            <label for="lastName"/>
            <input onChange={(e) => handleInputChange(e)} type="text" name="" id="lastName"  className="form-input" placeholder="Last Name" required/>
        </div>
        <div className={emailExists ? "email-exists" : "email"}>
            <label for="email"/>
            <input onChange={(e) => handleInputChange(e)} type="email" id="email" className="form-input" placeholder="Email" required/>
        </div>
        <div className="password">
            <label for="password"/>
            <input onChange={(e) => setPassword(e.target.value)} className="form-input" type="password"  id="password" placeholder="Password" required/>
        </div>
        <div className={passwordsMatch ? "confirm-password" : "confirm-password-error"}>
            <label for="confirm-password"/>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" type="password" id="confirm-password" placeholder="Confirm Password" required/>
        </div>
        <div className="footer">
            <button type="submit" onSubmit ={ev =>{ev.preventDefault()}}>Register</button>
        </div>
    </form>
</div>  
  )
}

export default RegisterForm