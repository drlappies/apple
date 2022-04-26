import { useState, useContext } from 'react';
import { NavContext, INavContext } from '../../contexts/NavContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const NavSearch = () => {
    const navContext = useContext(NavContext) as INavContext
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
        <div className="nav-dropdown-input-root">
            <div className={`nav-dropdown-input-container ${navContext.isSearchInputFocus ? "focused" : ""}`}>
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
                    onFocus={() => navContext.setIsSearchInputFocus(true)}
                />
                <input id="navbar-search-input" type="hidden" name="navbar-search-input" />
                <FontAwesomeIcon icon={faCircleXmark} className={`nav-dropdown-input-logo ${search.trim().length > 0 ? "clickable" : "hidden"}`} onClick={handleCancel} />

            </div>
            {navContext.isSearchInputFocus && <button onClick={() => navContext.setIsSearchInputFocus(false)} className="nav-dropdown-input-cancel-btn-container">
                <span className="nav-dropdown-input-cancel-btn">Cancel</span>
            </button>}

        </div>
    )
}

export default NavSearch