import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';
import BellIcon from '@material-ui/icons/NotificationsOutlined';
import MobileMenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/ArrowRightAlt';

import React, {useState} from "react";

import {useClickHook} from "../../../hooks/useClickHook";
import {useAuthContext} from "../../../context/AuthContext";

const Navigation = () => {
    const { user } = useAuthContext();
    const { useOutsideClick } = useClickHook();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const handleAddButton = (event: any) => {
        setDropdownIsOpen(true);
    }

    const hideDropdown = () => {
        setDropdownIsOpen(false);
    }

    const openMobileMenu = () => {

    }

    const ref = useOutsideClick(hideDropdown);

    return (
        <div className="navigation">
            <div className="mobile-menu" onClick={openMobileMenu}>
                <MobileMenuIcon />
            </div>
            <div ref={ref} className="dropdown-wrapper">
                <div className="navigation-left" onClick={handleAddButton}>
                    <LogoIcon className="logo-icon" />
                    <div className="content">
                        <p className="content-username">{user?.username || "Username"}</p>
                        <p className="content-email">{user?.email || "E-Mail"}</p>
                    </div>
                    <ArrowDownIcon className="arrow-down" />
                </div>
                <div className="dropdown" data-open={dropdownIsOpen}>
                    <div className="button-list">
                        <button className="button list-button"><PersonIcon /> Profile</button>
                        <div className="list-divider"></div>
                        <button className="button list-button"><SettingsIcon /> Settings</button>
                        <button className="button list-button"><LogoutIcon /> Log out</button>
                    </div>
                </div>
            </div>

            <div className="navigation-center"></div>
            <div className="navigation-right">
                <div className="notifications">
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