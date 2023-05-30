import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import Tickets from './pages/Tickets'
import Assign from './pages/Assign'
import RequireAuth from './components/RequireAuth'
import Error from './pages/Error'
import './css/app.css'


function App() {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path='' element={<RequireAuth/>}>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path='projects' element={<Layout><Projects/></Layout>}/>
        <Route path='assign' element={<Layout><Assign/></Layout>}/>
        <Route path='tickets' element={<Layout><Tickets/></Layout>}/>
        <Route path='admin' element={<Layout><Admin/></Layout>}/>
        <Route path='*' element={<Layout><Error/></Layout>}/>
      </Route>
    </Routes>
  );
}

export default App;

