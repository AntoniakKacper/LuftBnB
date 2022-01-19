import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from "react";
import { string } from "yup";

interface UserContextProps {
    children: JSX.Element;
}
type AppContextState = { isMenuOpen: boolean; isSideOpen: boolean }
// omitting additional array wrapped around context value

type AppContextValue = {
    state: AppContextState;
    // type, you get when hovering over `setState` from `useState`
    setState: Dispatch<SetStateAction<AppContextState>>;
};

const appCtxDefaultValue: AppContextValue = {
    state: { isMenuOpen: false, isSideOpen: false },
    setState: state => { } // noop default callback
};

export const AppContext = React.createContext(appCtxDefaultValue);

export const UserContext: React.FC<UserContextProps> = ({ children }) => {
    const [state, setState] = useState(appCtxDefaultValue.state);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
