import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string) => {
    const [inputState, setInputState] = useState(initialValue);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState(event.target.value);
    };

    return [inputState, handleInputChange];
};

export default useInput;
