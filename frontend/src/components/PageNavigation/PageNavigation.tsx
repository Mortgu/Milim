import React from "react";

import "./PageNavigation.scss";

const PageNavigation = ({style, children}: any) => {
    return (
        <div className="page-navigation">
            <div style={style} className="page-navigation-items">
                {children}
            </div>
        </div>
    )
}

export default PageNavigation;