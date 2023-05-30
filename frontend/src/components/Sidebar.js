import React, { useState } from 'react'
import '../css/sidebar.css';
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Sidebar(props) {
  const [open, setOpen] = useState(true);
  //Replace user with signed in authenticated user later
  const user = "Demo user";
  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className='sidebar'>
        
        <aside>
          <ul className={open ? 'sidebar-list' : 'sidebar-list closed'}>
            <div className='open-icon-container' onClick={toggleMenu}>
              <ArrowForwardIosIcon className='open-icon' sx={{width: '1rem', height: '1rem', rotate: '0deg', transition: 'rotate 200ms ease-in-out'}}/>
            </div>
            <button className={open ? "hamburger-menu active" : "hamburger-menu"} onClick={toggleMenu}>
              <span className='hamburger-bar'/>
            </button>
            <NavLink to = '/' className='link' activeclassName='active'>
              <div className='container'>
                <HomeIcon className='icon'/>
                <span>Home</span>    
              </div>
            </NavLink>
            <NavLink to='/projects' className='link' activeclassName='active'>
              <div className='container'>
                <WorkIcon className='icon'/>
                <span>Projects</span>
              </div>
            </NavLink>

            <NavLink to='/tickets' className='link' activeclassName='active'>
              <div className='container'>
                <ConstructionIcon className='icon'/>
                <span>Tickets</span>
              </div>
            </NavLink>
            <NavLink to='/assign' className='link' activeclassName='active'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Assign Projects</span>
              </div>
            </NavLink>
            <NavLink to='/admin' className='link' activeclassName='active'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Manage Roles</span>
              </div>
            </NavLink>
            <li>
                <NotificationsIcon className='icon'/>
            </li>
            <li>
              <PersonIcon className='icon'/>
            </li>
          </ul>
      </aside>
    </div>
  )
}

export default Sidebar