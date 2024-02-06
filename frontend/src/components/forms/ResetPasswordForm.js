import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/resetPassword.css'
import '../../css/register.css'

function ResetPasswordForm() {
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
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
            console.log(json)
            console.log("object = ", obj)
            fetch('http://3.238.3.43:3030/register', {
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
    <form onSubmit={handleSubmit} className='reset-password-form'>
        <label for="password"/>
        <input onChange={(e) => setPassword(e.target.value)} className="form-input" type="password"  id="password" placeholder="Password" required/>
        <div className={passwordsMatch ? "confirm-password" : "confirm-password-error"}>
            <label for="confirm-password"/>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" type="password" id="confirm-password" placeholder="Confirm Password" required/>
        </div>
        <button className='general-button'>Reset Password</button>
    </form>
  )
}

export default ResetPasswordForm