import React, { useContext } from 'react'
import {OpenContext} from './Layout'
import '../css/sidebar.css';
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

function Sidebar() {
  const {open, toggleMenu} = useContext(OpenContext)
  const logout = () => {

  }

  return (
    <div className={open ? 'sidebar' : 'sidebar closed'}>
        <aside>
          <ul className={open ? 'sidebar-list' : 'sidebar-list closed'}>
            <div className='open-icon-container' onClick={toggleMenu}>
              <ArrowForwardIosIcon className='open-icon' sx={{width: '1rem', height: '1rem', rotate: '0deg', transition: 'rotate 200ms ease-in-out'}}/>
            </div>
            <NavLink to = '/' className='link'>
              <div className='container'>
                <HomeIcon className='icon'/>
                <span>Home</span>    
              </div>
            </NavLink>
            <NavLink to='/projects' className='link'>
              <div className='container'>
                <WorkIcon className='icon'/>
                <span>Projects</span>
              </div>
            </NavLink>
            <NavLink to='/tickets' className='link'>
              <div className='container'>
                <ConstructionIcon className='icon'/>
                <span>Tickets</span>
              </div>
            </NavLink>
            <NavLink to='/assign' className='link'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Assign Projects</span>
              </div>
            </NavLink>
            <NavLink to='/admin' className='link'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Manage Roles</span>
              </div>
            </NavLink>
            <NavLink to='/login' className='link' onClick={() => logout}>
              <div className='container'>
                <PersonIcon className='icon'/>
                <span>Logout</span>
              </div>
            </NavLink>
          </ul>
      </aside>
    </div>
  )
}

export default Sidebar