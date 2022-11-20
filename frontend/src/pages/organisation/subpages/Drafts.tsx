import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";

const OrganisationDrafts = ({setShowNavigation}: any) => {
    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/organisation/drafts" className="page-navigation-item">Drafts</NavLink>
                <NavLink end to="/organisation/drafts/settings" className="page-navigation-item">Settings</NavLink>
            </PageNavigation>
            <div className="page">
                <p>Drafts</p>
            </div>
        </React.Fragment>
    )
}

export default OrganisationDrafts;