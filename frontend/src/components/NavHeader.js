import React, { useContext, useEffect, useRef, useState } from 'react'
import { OpenContext } from './Layout'
import useLogout from '../hooks/useLogout';
import PersonIcon from '@mui/icons-material/Person';
import '../css/navHeader.css';
import '../css/sidebar.css';

function NavHeader() {
  const { open, toggleMenu } = useContext(OpenContext)
  const [userModalOpen, setUserModalOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.className = 'drop-down-closed'
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [])

  return (
    <div className='navigation-bar'>
      <button className={open ? "hamburger-menu active" : "hamburger-menu"} onClick={toggleMenu}>
        <span className='hamburger-bar' />
      </button>
      <h1>ProjectFlow</h1>
      <ul className={open ? 'navigation-list closed' : 'navigation-list'}>
        <li className={open ? 'search-bar closed' : 'search-bar'}>
          {/* <input placeholder='Search...'/> */}
          {/* <SearchIcon className='icon' sx={{width: '1.5rem', height: '1.5rem'}}/> */}
        </li>
        <li>
          <PersonIcon className='icon' id={"person"} sx={{ width: '2rem', height: '2rem' }} onClick={() => setUserModalOpen(!userModalOpen)} />
          <div className={userModalOpen ? 'drop-down-open' : 'drop-down-closed'} ref={ref}>
            <button onClick={() => useLogout}>Logout</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default NavHeader
