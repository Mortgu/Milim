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

import {useClickHook} from "../../hooks/useClickHook";
import {useAuthContext} from "../../context/AuthContext";

const NavigationUnauthorized = () => {
    return (
        <div className="navigation">
            <div className="mobile-menu">
                <MobileMenuIcon />
            </div>
            <div className="navigation-center"> </div>
            <div className="navigation-right">
                <div className="user-icon">
                    <LogoIcon className="logo-icon" />
                </div>
            </div>
        </div>
    )
}

export default NavigationUnauthorized;