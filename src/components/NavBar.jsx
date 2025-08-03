import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import SearchBar from './SearchBar';
import VoiceSearchButton from './VoiceSearchButton';
import NotificationBell from './NotificationBell';
import ProfileAvatar from './ProfileAvatar';
import CreateButton from './CreateButton';
import {youtubeLogo} from "../index.js";
import ToggleButton from "./ToggleButton.jsx";

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
      {/* Menu + Logo */}
      <div className="flex items-center pl-2 gap-2">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="h-14 w-14 flex items-center justify-center hover:bg-gray-200 focus:outline-none transition"
          data-tooltip-id="menu-tooltip"
          data-tooltip-content="Toggle Sidebar"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-700" />
        </button>
        <a
          href="/"
          className="flex items-center h-10"
          data-tooltip-id="logo-tooltip"
          data-tooltip-content="Home"
        >
          <img
            src={youtubeLogo}
            alt="YouTube logo"
            className="h-12"
            draggable={false}
            loading="eager"
          />
        </a>
      </div>
      {/* Center: Search */}
      <div className="flex-1 flex justify-center items-center px-4">
        {isSearchExpanded ? (
          <div className="flex items-center w-full max-w-xl gap-2">
            <button
              onClick={toggleSearch}
              aria-label="Back"
              className="p-2 rounded-full hover:bg-gray-200"
              data-tooltip-id="back-tooltip"
              data-tooltip-content="Back"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 text-gray-600" />
            </button>
            <SearchBar
              onSearch={onSearch || (() => {})}
              className="flex-grow"
              placeholder="Search"
              autoFocus
              data-tooltip-id="search-tooltip"
              data-tooltip-content="Search"
            />
          </div>
        ) : (
          <>
            <div className="hidden md:flex items-center w-full max-w-xl gap-3">
              <SearchBar
                onSearch={onSearch || (() => {})}
                className="flex-grow"
                placeholder="Search"
                data-tooltip-id="search-tooltip"
                data-tooltip-content="Search"
              />
              <VoiceSearchButton
                className="ml-2"
                data-tooltip-id="voice-search-tooltip"
                data-tooltip-content="Voice Search"
              />
            </div>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200"
              aria-label="Open Search"
              onClick={toggleSearch}
              data-tooltip-id="search-toggle-tooltip"
              data-tooltip-content="Open Search"
            >
              <FontAwesomeIcon icon={faSearch} className="h-6 w-6 text-gray-600" />
            </button>
          </>
        )}
      </div>
      {/* Right side */}
      {!isSearchExpanded && (
        <div className="flex items-center gap-4 pr-4">
          <CreateButton
            className="p-2 hover:bg-gray-200 rounded-full"
            data-tooltip-id="create-tooltip"
            data-tooltip-content="Create"
          />
          <NotificationBell
            count={notificationCount}
            data-tooltip-id="notification-tooltip"
            data-tooltip-content={`Notifications (${notificationCount})`}
          />
          <ProfileAvatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="rounded-full w-9 h-9 cursor-pointer"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content="Profile"
          />
          <ToggleButton/>
        </div>
      )}

      {/* Tooltips */}
      {tooltips.map(({ id, place }) => (
        <ReactTooltip key={id} id={id} place={place} />
      ))}
    </nav>
  );
};

export default Navbar;
