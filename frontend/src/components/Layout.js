import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({children}) => {
    return (
        <div className="app">
            <Header/>
            <div className='main'>
            <Sidebar/>
                {children}
            </div>
        </div>
    )
}

export default Layout
