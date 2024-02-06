import React from 'react'
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate();
    const logout = () => {
        console.log("logout clicked")
        fetch('http://3.238.3.43:3000/api/logout', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': true
        },
      }).then(() => navigate("/login"))
  }
  return (
    <button onClick={() => logout()}>Logout</button>
  )
}

export default LogoutButton