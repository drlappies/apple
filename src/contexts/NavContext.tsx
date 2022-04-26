import React, { createContext, useState } from 'react';

export interface INavContext {
    isSearchInputFocus: boolean;
    isDropdownExpanded: boolean;
    setIsSearchInputFocus: React.Dispatch<React.SetStateAction<boolean>>
    setIsDropdownExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export interface NavContextProps {
    children: React.ReactNode
}

export const NavContext = createContext<INavContext | null>(null);

export const NavContextProvider = (props: NavContextProps) => {
    const [isSearchInputFocus, setIsSearchInputFocus] = useState<boolean>(false);
    const [isDropdownExpanded, setIsDropdownExpanded] = useState<boolean>(false);

    return (
        <NavContext.Provider value={{ isSearchInputFocus, isDropdownExpanded, setIsSearchInputFocus, setIsDropdownExpanded }}>{props.children}</ NavContext.Provider>
    )
}