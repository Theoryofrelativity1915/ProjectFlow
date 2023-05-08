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
            <NavLink to='/work' className='link' activeclassName='active'>
              <div className='container'>
                <WorkIcon className='icon'/>
                <span>Work Orders</span>
              </div>
            </NavLink>
            <NavLink to='/assigned' className='link' activeclassName='active'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Assigned Tasks</span>
              </div>
            </NavLink>
            <NavLink to='/unassigned' className='link' activeclassName='active'>
              <div className='container'>
                <ConstructionIcon className='icon'/>
                <span>Unassigned Tasks</span>
              </div>
            </NavLink>
            {/* Instead of list items i could put the icons inside a navlink and style those depending on which one is active? */}
            <NavLink to='/team' className='link' activeclassName='active'>
              <div className='container'>
                <PeopleIcon className='icon'/>
                <span>Team Members</span>
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