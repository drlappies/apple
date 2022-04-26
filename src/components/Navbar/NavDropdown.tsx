import { useState } from 'react';
import NavSearch from './NavSearch'

interface NavDropDownProps {
    children: JSX.Element[];
    isExpanded: boolean;
}

const NavDropdown = (props: NavDropDownProps) => {
    const { children, isExpanded } = props;

    return (
        <div className={`nav-dropdown-root ${isExpanded ? "expanded" : ""} `}>
            <NavSearch />
            {children}
        </div>
    )
}

export default NavDropdown