import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Layout from './components/Layout';
import Work from './pages/Work'
import Unassigned from './pages/Unassigned'
import Assigned from './pages/Assigned'
import RequireAuth from './components/RequireAuth'
import Error from './pages/Error'
import './css/app.css'


function App() {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path='' element={<RequireAuth/>}>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path='work' element={<Layout><Work/></Layout>}/>
        <Route path='assigned' element={<Layout><Assigned/></Layout>}/>
        <Route path='unassigned' element={<Layout><Unassigned/></Layout>}/>
        <Route path='team' element={<Layout><Team/></Layout>}/>
        <Route path='*' element={<Layout><Error/></Layout>}/>
      </Route>
    </Routes>
  );
}

export default App;

