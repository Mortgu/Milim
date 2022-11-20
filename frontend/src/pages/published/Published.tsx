import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {DraftHandler} from "../resents/Resents.service";
import FileCard from "../../components/FileCard/FileCard";
import moment from "moment/moment";

const Published = () => {
    const [drafts, setDrafts] = useState<[]>();

    useEffect(() => {
        new DraftHandler("http://localhost:4000/drafts", "GET")
            .filter("meta.public", true)
            .build((data: any) => {
                setDrafts(data);
            });
    }, []);

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/published" className="page-navigation-item">Published</NavLink>
                <NavLink end to="/published/deleted" className="page-navigation-item">Deleted</NavLink>
                <NavLink end to="/published/settings" className="page-navigation-item">Access Control</NavLink>
            </PageNavigation>
            <div className="page">
                {drafts?.map((row: any, index: any) => {
                    return <FileCard key={index} cardId={row._id} fileName={row.fileName} isPublic={row.meta.public} canCTAS={true}
                                     lastUpdatedAt={moment(row.meta.lastUpdatedAt).format('DD.MM.YYYY HH:MM')}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Published;