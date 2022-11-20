import {C_Draft, DraftHandler} from "./Resents.service";
import React, {useEffect, useState} from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import CreationTopBar from "../../components/CreationTopbar/CreationTopBar";
import FileCard from "../../components/FileCard/FileCard";

import moment from 'moment'

const Resents = () => {
    const [drafts, setDrafts] = useState<{ _id: string, fileName: string, meta: { lastUpdatedAt: string } }[]>(C_Draft);

    useEffect(() => {
        new DraftHandler("http://localhost:4000/drafts", "GET")
            .filter("meta.public", false)
            .build((data: any) => {
                setDrafts(data);
            });
    }, []);

    return (
        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/resents" className="page-navigation-item">Recently viewed</NavLink>
            </PageNavigation>
            <div className="page">
                <CreationTopBar/>
                <div className="file-card-wrapper">
                    {drafts?.map((row: any, index: any) => {
                        return <FileCard key={index} cardId={row._id} fileName={row.fileName} isPublic={row.meta.public} canCTAS={true}
                                         lastUpdatedAt={moment(row.meta.lastUpdatedAt).format('DD.MM.YYYY HH:MM')}/>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Resents;