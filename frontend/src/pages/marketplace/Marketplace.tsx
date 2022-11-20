import React from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";

const Marketplace = () => {

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/" className="page-navigation-item">Marketplace</NavLink>
                <NavLink end to="/dwa" className="page-navigation-item">Most Popular</NavLink>
            </PageNavigation>
            <div className="page">
            </div>
        </React.Fragment>
    )
}

export default Marketplace;