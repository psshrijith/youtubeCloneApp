import React, {useState, createContext} from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({children}) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled(!isToggled);

    return (
        <ToggleContext.Provider value={{isToggled, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext