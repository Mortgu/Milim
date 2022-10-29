import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import PageNavigation from "../../../components/widgets/PageNavigation/PageNavigation";

const OrganisationMembers = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/organisation/members" className="page-navigation-item">Members</NavLink>
                <NavLink end to="/organisation/members/settings" className="page-navigation-item">Settings</NavLink>
            </PageNavigation>
            <div className="page">
                <p>Members</p>
            </div>
        </React.Fragment>
    )
}

export default OrganisationMembers;