import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const NavSearch = () => {
    const [search, setSearch] = useState<string>("");
    const [isFocus, setIsFocus] = useState<boolean>(false);

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
            <div className={`nav-dropdown-input-container ${isFocus ? "focused" : ""}`}>
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
                    onFocus={() => setIsFocus(true)}
                />
                <input id="navbar-search-input" type="hidden" name="navbar-search-input" />
                <FontAwesomeIcon icon={faCircleXmark} className={`nav-dropdown-input-logo ${search.trim().length > 0 ? "clickable" : "hidden"}`} onClick={handleCancel} />

            </div>
            {isFocus && <button onClick={() => setIsFocus(false)} className="nav-dropdown-input-cancel-btn-container">
                <span className="nav-dropdown-input-cancel-btn">Cancel</span>
            </button>}

        </div>
    )
}

export default NavSearch