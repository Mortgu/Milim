import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';
import BellIcon from '@material-ui/icons/NotificationsOutlined';
import MobileMenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/ArrowRightAlt';
import SearchIcon from '@material-ui/icons/Search';

import React, {useState} from "react";

import {clickHook} from "../../hooks/click.hook";
import {useAuthContext} from "../../context/auth.context";
import {SIDEBAR_TYPES, useGlobalSidebarContext} from "../Sidebars/GlobalSidebar";
import {useNavigationContext} from "../../context/navigations.context";

const Navigation = () => {
    const { user } = useAuthContext();
    const { useOutsideClick } = clickHook();

    const { showSidebar, hideSidebar } = useGlobalSidebarContext();
    const { showHiddenMenu, hiddenMenuOpen } = useNavigationContext();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const hideDropdown = () => {
        setDropdownIsOpen(false);
    }

    const openMobileMenu = () => {}

    const openNotificationSidebar = () => {
        showSidebar(SIDEBAR_TYPES.NOTIFICATION_SIDEBAR);
    }

    const ref = useOutsideClick(hideDropdown);

    return (
        <div className="navigation">
            <div className="mobile-menu" onClick={openMobileMenu}>
                <MobileMenuIcon />
            </div>
            <div className="navigation-left">
                <div ref={ref}  className="dropdown-wrapper">
                    <div className="navigation-user" onClick={showHiddenMenu}>
                        <LogoIcon className="logo-icon" />
                        <div className="content">
                            <p className="content-username">{user?.username || "Username"}</p>
                            <p className="content-email">{user?.email || "E-Mail"}</p>
                        </div>
                        <ArrowDownIcon style={{transform: `rotate(${hiddenMenuOpen ? '180deg' : '0deg'})`}} className="arrow-down" />
                    </div>
                    <div className="dropdown" data-open={dropdownIsOpen}>
                        <button className="dropdown-button icon-button"><PersonIcon /> Profile</button>
                        <div className="list-divider"></div>
                        <button className="dropdown-button icon-button"><SettingsIcon /> Settings</button>
                        <button className="dropdown-button icon-button"><LogoutIcon /> Log out</button>
                    </div>
                </div>
            </div>
            <div className="navigation-center">
                <div className="search-input">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="navigation-right">
                <div className="notifications" onClick={openNotificationSidebar}>
                    <BellIcon />
                </div>
                <div className="user-icon">
                    <LogoIcon className="logo-icon" />
                    <ArrowDownIcon className="arrow-down" />
                </div>
            </div>
        </div>
    )
}

export default Navigation;