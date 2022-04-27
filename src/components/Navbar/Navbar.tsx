import './navbar.css';
import { useEffect, useContext, useCallback } from 'react';
import { NavContext, INavContext } from '../../contexts/NavContext';
import NavItem from './NavItem';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faMagnifyingGlass, faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavDropdownItem from './NavDropdownItem';


const Navbar = () => {
    const navContext = useContext(NavContext) as INavContext

    const handleWindowResize = useCallback((event: UIEvent) => {
        const target = event.target as Window;
        if (target.innerWidth > 768) {
            navContext.setIsDropdownExpanded(false);
            navContext.setIsSearchInputFocus(false);
        }
    }, [navContext])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)


        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [handleWindowResize])

    return (
        <nav className="nav-root">
            <div className={`nav-root-content-root ${navContext.isDropdownExpanded ? "expanded" : ""} ${navContext.isSearchInputFocus ? "hidden" : ""}`}>
                <div className="nav-content">
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

                <div className="nav-content-collapsed">
                    <NavButton label={<FontAwesomeIcon icon={navContext.isDropdownExpanded ? faXmark : faBars} onClick={() => navContext.setIsDropdownExpanded(prevState => !prevState)} />} />
                    <NavButton label={<FontAwesomeIcon icon={faAppleWhole} onClick={() => console.log("opens navbar")} />} />
                    <NavButton label={<FontAwesomeIcon icon={faBagShopping} />} onClick={() => console.log("opens navbar")} />
                </div>

            </div>



            <NavDropdown>
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
            </NavDropdown>

        </nav>
    )
}

export default Navbar