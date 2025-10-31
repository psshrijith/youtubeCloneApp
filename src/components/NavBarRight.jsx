import CreateButton from "./CreateButton.jsx";
import NotificationBell from "./NotificationBell.jsx";
import ProfileAvatar from "./ProfileAvatar.jsx";
import ToggleButton from "./ToggleButton.jsx";
import React from "react";

const NavBarRight = ({isSearchExpanded, notificationCount}) => {
    return (
        <>
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
        </>
    )
}

export default NavBarRight;