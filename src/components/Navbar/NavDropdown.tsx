import { useContext } from 'react';
import { NavContext, INavContext } from '../../contexts/NavContext';
import NavSearch from './NavSearch'

interface NavDropDownProps {
    children: JSX.Element[];
}

const NavDropdown = (props: NavDropDownProps) => {
    const navContext = useContext(NavContext) as INavContext
    const { children } = props;

    return (
        <div className={`nav-dropdown-root ${navContext.isDropdownExpanded ? "expanded" : ""} `}>
            <NavSearch />
            {children}
        </div>
    )
}

export default NavDropdown