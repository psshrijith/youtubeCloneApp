import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import NotificationBell from './NotificationBell';
import ProfileAvatar from './ProfileAvatar';
import CreateButton from './CreateButton';
import ToggleButton from "./ToggleButton.jsx";
import NavBarLeft from "./NavBarLeft";
import NavBarCenter from "./NavBarCenter";
import NavBarRight from "./NavBarRight";

const defaultTooltipPlacement = 'bottom';

const tooltips = [
  { id: 'menu-tooltip', place:  defaultTooltipPlacement},
  { id: 'logo-tooltip', place: defaultTooltipPlacement},
  { id: 'back-tooltip', place: defaultTooltipPlacement},
  { id: 'search-tooltip', place: defaultTooltipPlacement},
  { id: 'search-toggle-tooltip', place: defaultTooltipPlacement },
  { id: 'voice-search-tooltip', place: defaultTooltipPlacement },
  { id: 'create-tooltip', place: defaultTooltipPlacement },
  { id: 'notification-tooltip', place: defaultTooltipPlacement },
  { id: 'profile-tooltip', place: defaultTooltipPlacement },
];

const Navbar = ({ onSearch, toggleSidebar }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const notificationCount = 3;
  const toggleSearch = () => setIsSearchExpanded(v => !v);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-14 flex items-center bg-white z-30 select-none"
      style={{ boxShadow: 'none', borderBottom: 'none' }}
    >
        <NavBarLeft
            toggleSidebar={toggleSidebar}
        />
        <NavBarCenter
            toggleSearch={toggleSearch}
            isSearchExpanded={isSearchExpanded}
            onSearch={onSearch}
        />
        <NavBarRight
            isSearchExpanded={isSearchExpanded}
            notificationCount={notificationCount}
        />

      {/* Tooltips */}
      {tooltips.map(({ id, place }) => (
        <ReactTooltip key={id} id={id} place={place} />
      ))}
    </nav>
  );
};

export default Navbar;
