import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {youtubeLogo} from "../index.js";
import React from "react";

const NavBarLeft = ({toggleSidebar}) => {

    return (
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
    )
}

export default NavBarLeft;