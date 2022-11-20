import {C_Draft, getDrafts} from "./HomePage.service";
import React, {useEffect, useState} from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import CreationTopBar from "../../components/CreationTopbar/CreationTopBar";
import FileCard from "../../components/FileCard/FileCard";

const HomePage = () => {
    const [drafts, setDrafts] = useState<{ _id: string, fileName: string, meta: { lastUpdatedAt: string } }[]>(C_Draft);

    useEffect(() => {
        getDrafts("http://localhost:4000/drafts", "GET")
            .then((data: any) => setDrafts(data))
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
                        return <FileCard key={index} cardId={row._id} fileName={row.fileName}
                                         lastUpdatedAt={row.meta.lastUpdatedAt}/>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;