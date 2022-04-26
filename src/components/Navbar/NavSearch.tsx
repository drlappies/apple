import useInput from '../../hooks/useInput';

const NavSearch = () => {
    const [query, handleQueryChange] = useInput("");

    return (
        <div>
            <input type="text" name="query" />
        </div>
    )
}

export default NavSearch