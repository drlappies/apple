import useInput from '../../hooks/useInput';
interface NavDropDownProps {
    children: JSX.Element[];
    isExpanded: boolean;
}

const NavDropdown = (props: NavDropDownProps) => {
    const { children, isExpanded } = props;
    const [queryState, handleQueryChange] = useInput('');

    return (
        <div className={`nav-dropdown-root ${isExpanded ? "expanded" : ""} `}>
            <div className="nav-dropdown-input">SEARCH BAR GOES HERE</div>
            children
        </div>
    )
}

export default NavDropdown