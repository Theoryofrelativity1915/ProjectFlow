import React, { useState, useContext } from 'react'
import { OpenContext } from './Layout'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import '../css/navHeader.css';
import '../css/sidebar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NavHeader() {
    const {open, toggleMenu} = useContext(OpenContext)
    return (
    <div className='navigation-bar'>
        <button className={open ? "hamburger-menu active" : "hamburger-menu"} onClick={toggleMenu}>
              <span className='hamburger-bar'/>
        </button>
        <h1>Issue Tracker</h1>
        <ul className={open ? 'navigation-list closed' : 'navigation-list'}>
            <li className={open ? 'search-bar closed' : 'search-bar'}>
                <input placeholder='Search...'/>
                <SearchIcon className='icon' sx={{width: '1.5rem', height: '1.5rem'}}/>
            </li>
            <li>
                <NotificationsIcon className='icon' id={"bell"} sx={{width: '2rem', height: '2rem'}}/>
                <div className='drop-down'></div>
            </li>
            <li>
                <PersonIcon className='icon' id={"person"} sx={{width: '2rem', height: '2rem'}}/>
                <div className='drop-down'></div>
            </li>
        </ul>
      </div>
  )
}

export default NavHeader