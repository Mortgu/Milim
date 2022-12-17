import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';
import BellIcon from '@material-ui/icons/NotificationsOutlined';
import MobileMenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/ArrowRightAlt';
import SearchIcon from '@material-ui/icons/Search';
import ThemeSwitcherIcon from '@material-ui/icons/Brightness6';

import React, {useState} from "react";

import {clickHook} from "../../hooks/click.hook";
import {useAuthContext} from "../../context/auth.context";
import {SIDEBAR_TYPES, useGlobalSidebarContext} from "../Sidebars/GlobalSidebar";
import {useNavigationContext} from "../../context/navigations.context";
import {useThemeContext} from "../../context/theme.context";

const Navigation = () => {
    const { user } = useAuthContext();

    const { theme, setTheme } = useThemeContext();

    const { showSidebar } = useGlobalSidebarContext();
    const { showHiddenMenu, hiddenMenuOpen } = useNavigationContext();

    const openMobileMenu = () => {}

    const openNotificationSidebar = () => {
        showSidebar(SIDEBAR_TYPES.NOTIFICATION_SIDEBAR);
    }

    const switchTheme = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    }

    return (
        <div className="navigation">
            <div className="mobile-menu" onClick={openMobileMenu}>
                <MobileMenuIcon />
            </div>
            <div className="navigation-left">
                <div className="navigation-user" onClick={showHiddenMenu}>
                    <LogoIcon className="logo-icon" />
                    <div className="content">
                        <p className="content-username">{user?.username || "Username"}</p>
                        <p className="content-email">{user?.email || "E-Mail"}</p>
                    </div>
                    <ArrowDownIcon style={{transform: `rotate(${hiddenMenuOpen ? '180deg' : '0deg'})`}} className="arrow-down" />
                </div>
            </div>
            <div className="navigation-center">
                <div className="search-input">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="navigation-right">
                <div className="navigation-icon notifications" onClick={openNotificationSidebar}>
                    <BellIcon />
                </div>
                <div className="navigation-icon theme-switcher" onClick={switchTheme}>
                    <ThemeSwitcherIcon />
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