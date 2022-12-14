import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

import PageNavigation from "../../components/widgets/PageNavigation/PageNavigation";

const DeletedDrafts = ({setShowNavigation}: any) => {

    return (
        <div className="">
            <PageNavigation>
                <NavLink end to="/drafts" className="page-navigation-item">Drafts</NavLink>
                <NavLink end to="/drafts/deleted" className="page-navigation-item">Deleted</NavLink>
            </PageNavigation>
            <div className="page">
                <p>teet</p>
            </div>
        </div>
    )
}

export default DeletedDrafts;
