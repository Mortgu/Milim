import React, {useEffect} from "react";
import {Outlet, useOutletContext} from "react-router-dom";

const OrganisationDrafts = ({setShowNavigation}: any) => {

    const test = useOutletContext();

    useEffect(() => {
        console.log(test)
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <p>test</p>
        </React.Fragment>
    )
}

export default OrganisationDrafts;