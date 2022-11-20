import React from "react";
import {NavLink} from "react-router-dom";

import PageNavigation from "../../components/PageNavigation/PageNavigation";

const Drafts = () => {
    return (
        <div className="">
            <PageNavigation>
                <NavLink end to="/drafts" className="page-navigation-item">Drafts</NavLink>
                <NavLink end to="/drafts/deleted" className="page-navigation-item">Deleted</NavLink>
            </PageNavigation>
            <div className="page">
            </div>
        </div>
    )
}

export default Drafts;
