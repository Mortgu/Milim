import "./Navigation.scss";
import LogoIcon from '@material-ui/icons/AccountCircle';
import MobileMenuIcon from '@material-ui/icons/Menu';
import GlobalIcon from '@material-ui/icons/ExploreOutlined';

import React from "react";

const NavigationUnauthorized = () => {
    return (
        <div className="navigation">
            <div className="mobile-menu">
                <MobileMenuIcon />
            </div>
            <div className="navigation-center"></div>
            <button className="button-transparent icon-button full-height"><GlobalIcon /> Create your own.</button>
            <div className="navigation-right">
                <button className="button-transparent icon-button full-height cube-48">
                    <LogoIcon className="logo-icon" />
                </button>
            </div>
        </div>
    )
}

export default NavigationUnauthorized;