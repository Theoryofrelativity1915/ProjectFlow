import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import Team from './pages/Team'
import Work from './pages/Work'
import Unassigned from './pages/Unassigned'
import Assigned from './pages/Assigned'
import './css/app.css'



function App(props) {
  return (
    <div className="App">
      <Header/>
      <Router>
      <div className='main'>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/assigned' element={<Assigned/>}/>
          <Route path='/unassigned' element={<Unassigned/>}/>
          <Route path='/team' element={<Team/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
