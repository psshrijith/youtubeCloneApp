// ToggleButton.jsx
import React, { useContext } from 'react';
import ToggleContext  from '../contexts/ToggleContext';

function ToggleButton() {
    const { isToggled, toggle } = useContext(ToggleContext);

    return (
        <button
            onClick={toggle}
            style={{
                width: '55px',
                height: '25px',
                borderRadius: '15px',
                border: 'none',
                backgroundColor: isToggled ? 'gray' : 'black',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
            }}
        >
            <div
                style={{
                    height: '18px',
                    width: '18px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '3px',
                    left: isToggled ? '32px' : '4px',
                    transition: 'left 0.2s ease',
                }}
            />
        </button>
    );
}

export default ToggleButton;