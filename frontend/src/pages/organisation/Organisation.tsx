import React from "react";
import {NavLink} from "react-router-dom";
import PageNavigation from "../../components/widgets/PageNavigation/PageNavigation";

const Organisation = () => {
    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/organisation" className="page-navigation-item">Organisation</NavLink>
            </PageNavigation>
            <div className="page">
            </div>
        </React.Fragment>
    )
}

export default Organisation;