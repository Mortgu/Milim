import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

const IndexPage = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <div className="page-navigation">
                <div className="page-navigation-items">
                    <NavLink end to="/" className="page-navigation-item">Recently added</NavLink>
                    <NavLink to="/deleted" className="page-navigation-item">Recently deleted</NavLink>
                </div>
            </div>
            <div className="page">
            </div>
        </React.Fragment>
    )
}

export default IndexPage;