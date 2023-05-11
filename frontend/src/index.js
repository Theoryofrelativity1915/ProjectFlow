import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import { AuthProvider } from './contexts/AuthProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/*" element={<App/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);