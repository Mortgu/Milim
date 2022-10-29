import React, {useEffect} from "react";
import CreationTopBar from "../../components/widgets/CreationTopbar/CreationTopBar";
import {NavLink} from "react-router-dom";
import PageNavigation from "../../components/widgets/PageNavigation/PageNavigation";

const Index = ({setShowNavigation}: any) => {
    useEffect(() => {
        setShowNavigation(true);
    }, []);

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/" className="page-navigation-item">Recently viewed</NavLink>
            </PageNavigation>
            <div className="page">
                <CreationTopBar></CreationTopBar>
            </div>
        </React.Fragment>
    )
}

export default Index;