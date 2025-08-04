import React, { useContext } from 'react';
import ToggleContext from '../contexts/ToggleContext';

function ToggleButton() {
    const { isToggled, toggle } = useContext(ToggleContext);

    return (
        <button
            onClick={toggle}
            className={`w-[55px] h-[25px] rounded-full border-none relative cursor-pointer transition-colors duration-200 ${
                isToggled ? 'bg-gray-500' : 'bg-black'
            }`}
        >
            <div
                className={`h-[18px] w-[18px] bg-white rounded-full absolute top-[3px] transition-all duration-200 ${
                    isToggled ? 'left-[32px]' : 'left-[4px]'
                }`}
            />
        </button>
    );
}

export default ToggleButton;
