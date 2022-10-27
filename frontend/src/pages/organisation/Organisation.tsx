import React, {useEffect} from "react";
import {NavLink, Outlet, useOutletContext} from "react-router-dom";

const Organisation = ({setShowNavigation}: any) => {


    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <div className="page-navigation">
                <div className="page-navigation-items">
                    <NavLink end to="/organisation" className="page-navigation-item">Organisation</NavLink>
                    <NavLink to="/organisation/members" className="page-navigation-item">Members</NavLink>
                </div>
            </div>
            <div className="page">
                <Outlet context={{test:"test"}} />
            </div>
        </React.Fragment>
    )
}

export default Organisation;