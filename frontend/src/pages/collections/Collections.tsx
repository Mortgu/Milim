import React from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";

const Collections = () => {

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/collections" className="page-navigation-item">Own</NavLink>
                <NavLink end to="/collections/saved" className="page-navigation-item">Saved</NavLink>
            </PageNavigation>
        </React.Fragment>
    )
}

export default Collections;