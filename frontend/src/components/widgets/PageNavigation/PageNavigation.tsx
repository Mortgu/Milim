import {NavLink} from "react-router-dom";
import React from "react";

import "./PageNavigation.scss";

const PageNavigation = ({children}: any) => {
    return (
        <div className="page-navigation">
            <div className="page-navigation-items">
                {children}
            </div>
        </div>
    )
}

export default PageNavigation;