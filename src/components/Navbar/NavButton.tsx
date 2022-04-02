interface NavButtonProps {
    onClick?: React.MouseEventHandler
    label: string | JSX.Element
}

const NavButton = ({ label, onClick }: NavButtonProps) => {
    return (
        <div className="nav-button-root" onClick={onClick}>
            {label}
        </div>
    )
}

export default NavButton;