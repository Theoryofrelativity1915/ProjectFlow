import NavHeader from "./NavHeader"
import Sidebar from "./Sidebar"
import { useState, createContext } from 'react'
export const OpenContext = createContext(false)
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
