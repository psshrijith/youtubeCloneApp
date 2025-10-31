import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar.jsx";
import VoiceSearchButton from "./VoiceSearchButton.jsx";
import React from "react";

const NavBarCenter = ({isSearchExpanded, toggleSearch, onSearch}) => {
    return (
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
    )
}

export default NavBarCenter