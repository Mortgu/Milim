import "./Navigation.scss";
import LogoIcon from '@material-ui/icons/AccountCircle';
import MobileMenuIcon from '@material-ui/icons/Menu';
import GlobalIcon from '@material-ui/icons/ExploreOutlined';

import React from "react";
import {NavLink} from "react-router-dom";
import ThemeSwitcherIcon from "@material-ui/icons/Brightness6";
import {useThemeContext} from "../../context/theme.context";

const NavigationUnauthorized = () => {
    const { theme, setTheme } = useThemeContext();

    const switchTheme = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    }

    return (
        <div className="navigation">
            <div className="mobile-menu">
                <MobileMenuIcon />
            </div>
            <div className="navigation-center"></div>
            <button className="button-transparent icon-button full-height"><GlobalIcon /> <NavLink to="/resents">Get Started.</NavLink></button>
            <div className="navigation-right">
                <div className="navigation-icon theme-switcher" onClick={switchTheme}>
                    <ThemeSwitcherIcon />
                </div>
                <button className="navigation-icon button-transparent icon-button full-height ">
                    <LogoIcon className="logo-icon" />
                </button>
            </div>
        </div>
    )
}

export default NavigationUnauthorized;