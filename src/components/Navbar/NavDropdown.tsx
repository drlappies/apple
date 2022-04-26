import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

interface NavDropDownProps {
    children: JSX.Element[];
    isExpanded: boolean;
}

const NavDropdown = (props: NavDropDownProps) => {
    const { children, isExpanded } = props;
    const [search, setSearch] = useState<string>("");

    const handleSearch = (event: any): void => {
        event.preventDefault();

        console.log("handle search")
    }

    const handleCancel = (event: any): void => {
        event.preventDefault();

        console.log("handle clear search input")

        setSearch("");

    }

    const handleUpdate = (event: any): void => {
        setSearch(event.target.value)
    }

    return (
        <div className={`nav-dropdown-root ${isExpanded ? "expanded" : ""} `}>
            <form className="nav-dropdown-content">
                <div className="nav-dropdown-input-root">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={`nav-dropdown-input-logo ${search.trim().length > 0 ? "clickable" : ""}`} onClick={handleSearch} />
                    <input
                        className="nav-dropdown-input"
                        id="navbar-search-input"
                        placeholder={"Search apple.com"}
                        type="text"
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        value={search}
                        onChange={handleUpdate}
                    />
                    <FontAwesomeIcon icon={faCircleXmark} className={`nav-dropdown-input-logo ${search.trim().length > 0 ? "clickable" : "hidden"}`} onClick={handleCancel} />
                </div>
                <input id="navbar-search-input" type="hidden" name="navbar-search-input" />
                <button>Cancel</button>
            </form>

            {children}
        </div>
    )
}

export default NavDropdown