import React from 'react';
import { youtubeShorts, subscription, youtubeMusic, youtubeHome } from '../index';
import ToggleContext from "../contexts/ToggleContext";
import {useContext} from "react";

function SideBar({ isSidebarOpen }) {

    const {isToggled} = useContext(ToggleContext);

    return (
    <aside
      className={`
        fixed top-0 left-0 pt-14 h-full z-20
        transition-[width] duration-300 ease-in-out
        ${isSidebarOpen ? 'w-48' : 'w-16'}
        ${isToggled ? 'bg-black text-white' : 'bg-white text-black'}
      `}
      style={{
        boxShadow: 'none',
        borderRight: 'none',
        transitionProperty: 'width',
      }}
      aria-label="Sidebar navigation"
    >
      {/* Navigation Links ONLY */}
      <nav className={`flex flex-col space-y-2 px-2
          ${isToggled ? 'bg-black text-white' : 'bg-white text-black'}
      `}>
        {[
          { icon: youtubeHome, label: "Home" },
          { icon: youtubeShorts, label: "Shorts" },
          { icon: subscription, label: "Subscriptions" },
          { icon: youtubeMusic, label: "Music" },
        ].map(({ icon, label }) => (
          <a
            href={`#${label.toLowerCase()}`}
            key={label}
            className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 cursor-pointer select-none ${isToggled ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}
`}
            title={label}
          >
            <img src={icon} alt={`${label} icon`} className={`w-6 h-6 ${isToggled ? 'filter invert' : ''}`}/>
            {isSidebarOpen && <span className="text-sm font-medium">{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
