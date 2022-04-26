import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import { NavContextProvider } from "../contexts/NavContext";

const Main = () => {
    return (
        <div>
            <NavContextProvider>
                <Navbar />
            </NavContextProvider>
            <Outlet />
        </div>
    )
}

export default Main