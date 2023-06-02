import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import '../css/header.css';

function Header() {
  return (
    <div className='navigation-bar'>
        <h1>Issue Tracker</h1>
        
        <ul className='navigation-list'>
            <li className='search-bar'>
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

export default Header