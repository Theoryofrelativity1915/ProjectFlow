import { useState, createContext } from 'react'
import NavHeader from "./NavHeader"
import Sidebar from "./Sidebar"
export const OpenContext = createContext(false)
const userApi = 'http://52.3.221.82:3030/api/users'


const Layout = ({children}) => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open);
      }
      
    return (
        <div className="app">
            <OpenContext.Provider value={{open, toggleMenu}}>
                    <NavHeader/>
                    <div className='main'>
                        <Sidebar/>
                        {children}
                    </div>
            </OpenContext.Provider>
        </div>
    )
}

export default Layout
