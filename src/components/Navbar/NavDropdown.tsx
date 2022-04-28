import { useContext } from 'react';
import { NavContext, INavContext } from '../../contexts/NavContext';
import NavSearch from './NavSearch'
import NavDropdownItem from './NavDropdownItem';

const NavDropdown = () => {
    const navContext = useContext(NavContext) as INavContext

    return (
        <div className={`nav-dropdown-root ${navContext.isDropdownExpanded ? "expanded" : ""}`}>
            <NavSearch />
            <div className={`nav-dropdown-content ${navContext.isSearchInputFocus ? "fade-in" : ""}`}>

            </div>

            <div className={`nav-dropdown-content ${navContext.isSearchInputFocus ? "fade-out" : "fade-in"}`}>
                <NavDropdownItem label={"Store"} to="/store" />
                <NavDropdownItem label={"Mac"} to="/mac" />
                <NavDropdownItem label={"iPad"} to="/ipad" />
                <NavDropdownItem label={"iPhone"} to="/ipad" />
                <NavDropdownItem label={"Watch"} to="/watch" />
                <NavDropdownItem label={"Airpods"} to="/airpods" />
                <NavDropdownItem label={"TV & Home"} to="/tvhome" />
                <NavDropdownItem label={"Only on Apple"} to="/onlyapple" />
                <NavDropdownItem label={"Accessories"} to="/accessories" />
                <NavDropdownItem label={"Support"} to="/support" />
            </div>
        </div>
    )
}

export default NavDropdown