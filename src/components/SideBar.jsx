import React from 'react';
import { youtubeShorts, subscription, youtubeMusic, youtubeHome } from '../index';

function SideBar({ isSidebarOpen }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 pt-14 h-full bg-white z-20
        transition-[width] duration-300 ease-in-out
        ${isSidebarOpen ? 'w-48' : 'w-16'}
      `}
      style={{
        boxShadow: 'none',
        borderRight: 'none',
        transitionProperty: 'width',
      }}
      aria-label="Sidebar navigation"
    >
      {/* Navigation Links ONLY */}
      <nav className="flex flex-col mt-4 space-y-2 px-2">
        {[
          { icon: youtubeHome, label: "Home" },
          { icon: youtubeShorts, label: "Shorts" },
          { icon: subscription, label: "Subscriptions" },
          { icon: youtubeMusic, label: "Music" },
        ].map(({ icon, label }) => (
          <a
            href={`#${label.toLowerCase()}`}
            key={label}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer select-none"
            title={label}
          >
            <img src={icon} alt={`${label} icon`} className="w-6 h-6" />
            {isSidebarOpen && <span className="text-sm font-medium">{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
