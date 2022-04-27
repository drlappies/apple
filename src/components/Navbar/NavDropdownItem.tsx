import { Link } from 'react-router-dom'

interface NavDropdownItemProps {
    label: string | JSX.Element
    to: string;
}

const NavDropdownItem = (props: NavDropdownItemProps) => {
    const { label, to } = props;

    return (
        <li className="nav-dropdown-item">
            <Link className="nav-dropdown-item-link" to={to}>
                <span className="nav-dropdown-item-label">{label}</span>
            </Link>
        </li>
    )
}

export default NavDropdownItem