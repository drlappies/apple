import { Link } from 'react-router-dom'

interface NavItemProps {
    label: string | JSX.Element;
    to: string;
}

const NavItem = ({ label, to }: NavItemProps) => {
    return <Link className="nav-item-root" to={to}>{label}</Link>
}

export default NavItem;