import './navbar.css';
import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import NavButton from './NavButton';
import NavDropdown from './NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faMagnifyingGlass, faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleWindowResize = (event: UIEvent) => {
        const target = event.target as Window;
        if (target.innerWidth > 768) {
            setIsDropdownOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)


        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    return (
        <nav className="nav-root">
            <div className={`nav-root-content-root ${isDropdownOpen ? "expanded" : ""} `}>
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
                    <NavButton label={<FontAwesomeIcon icon={isDropdownOpen ? faXmark : faBars} onClick={() => setIsDropdownOpen(prevState => !prevState)} />} />
                    <NavButton label={<FontAwesomeIcon icon={faAppleWhole} onClick={() => console.log("opens navbar")} />} />
                    <NavButton label={<FontAwesomeIcon icon={faBagShopping} />} onClick={() => console.log("opens navbar")} />
                </div>

            </div>


            <NavDropdown isExpanded={isDropdownOpen}>
                <div>NAV ITEM</div>
                <div>testuibng</div>
                <div>testuibng</div>
                <div>testuibng</div>
                <div>testuibng</div>
                <div>testuibng</div>
            </NavDropdown>

        </nav>
    )
}

export default Navbar