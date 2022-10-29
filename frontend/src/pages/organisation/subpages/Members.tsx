import React, {useEffect} from "react";
import {Outlet, useOutletContext} from "react-router-dom";

const OrganisationMembers = ({setShowNavigation}: any) => {

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

export default OrganisationMembers;