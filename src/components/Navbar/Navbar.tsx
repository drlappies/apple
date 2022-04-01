import './navbar.css';
import { Outlet } from "react-router-dom";
import NavItem from './NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div>
            <div className="nav-root">
                <NavItem label={<FontAwesomeIcon icon={faAppleWhole} />} to="/" />
                <NavItem label="Store" to="/store" />
                <NavItem label="Mac" to="/mac" />
                <NavItem label="iPad" to="/ipad" />
                <NavItem label="iPhone" to="/iphone" />
                <NavItem label="Watch" to="/watch" />
                <NavItem label="Airpods" to="/airpods" />
                <NavItem label="TV & Home" to="tvhome" />
                <NavItem label="Only on Apple" to="onlyapple" />
                <NavItem label="Accessories" to="accessories" />
                <NavItem label="Support" to="support" />
                <NavItem label={<FontAwesomeIcon icon={faMagnifyingGlass} />} to="/" />
                <NavItem label={<FontAwesomeIcon icon={faBagShopping} />} to="/" />
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar