import React, {useEffect, useState} from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import {DraftHandler} from "../../utils/DraftHandler";
import FileCard from "../../components/FileCard/FileCard";
import moment from "moment";

const Marketplace = () => {
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
                <NavLink end to="/" className="page-navigation-item">Marketplace</NavLink>
                <NavLink end to="/dwa" className="page-navigation-item">Most Popular</NavLink>
            </PageNavigation>
            <div className="page">
                {drafts?.map((row: any, index: any) => {
                    return <FileCard key={index} cardId={row._id} fileName={row.fileName} isPublic={row.meta.public}
                                     lastUpdatedAt={moment(row.meta.lastUpdatedAt).format('DD.MM.YYYY HH:MM')} canCTAS={false}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Marketplace;