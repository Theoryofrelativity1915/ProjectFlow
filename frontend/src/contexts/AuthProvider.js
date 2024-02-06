import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);
    fetch('http://52.3.221.82:3030/authenticated', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': true
          },
    }).then((res) => {
        if (res.status == 200){
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;