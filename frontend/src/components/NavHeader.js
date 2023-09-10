import React, { useContext, useState } from 'react'
import { OpenContext } from './Layout'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import '../css/navHeader.css';
import '../css/sidebar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NavHeader() {
    const {open, toggleMenu} = useContext(OpenContext)
    const [notificationModalOpen, setNotificationModalOpen] = useState(false)
    const [userModalOpen, setUserModalOpen] = useState(false)

    return (
    <div className='navigation-bar'>
        <button className={open ? "hamburger-menu active" : "hamburger-menu"} onClick={toggleMenu}>
              <span className='hamburger-bar'/>
        </button>
        <h1>Issue Tracker</h1>
        <ul className={open ? 'navigation-list closed' : 'navigation-list'}>
            <li className={open ? 'search-bar closed' : 'search-bar'}>
                {/* <input placeholder='Search...'/> */}
                {/* <SearchIcon className='icon' sx={{width: '1.5rem', height: '1.5rem'}}/> */}
            </li>
            <li>
                <PersonIcon className='icon' id={"person"} sx={{width: '2rem', height: '2rem'}} onClick={() => setUserModalOpen(!userModalOpen)}/>
                <div className={userModalOpen ? 'drop-down-open' : 'drop-down-closed'}></div>
            </li>
        </ul>
      </div>
  )
}

export default NavHeader