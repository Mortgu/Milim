import {C_Draft, DraftHandler} from "../../utils/DraftHandler";
import React, {useEffect, useState} from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {NavLink} from "react-router-dom";
import CreationTopBar from "../../components/CreationTopbar/CreationTopBar";
import FileCard from "../../components/FileCard/FileCard";

import moment from 'moment'
import {useSocketHook} from "../../hooks/socket.hook";

const Resents = () => {
    const {socket} = useSocketHook();

    const [loading, setLoading] = useState(true);
    const [drafts, setDrafts] = useState<{ _id: string, fileName: string, meta: { lastUpdatedAt: string } }[]>(C_Draft);

    const fetchDrafts = async () => {
        setLoading(true);

        await new DraftHandler("http://localhost:4000/drafts", "GET")
            .build((data: any) => {
                setDrafts(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchDrafts()

        socket.on('drafts:update', (args: any) => {
            fetchDrafts();
        });
    }, []);

    if (loading) {
        return (

        <React.Fragment>
            <PageNavigation>
                <NavLink end to="/resents" className="page-navigation-item">Recently viewed</NavLink>
            </PageNavigation>
            <div className="page">
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            </div>
        </React.Fragment>
        )
    }

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
                <div className="file-card-wrapper highlighted">
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Resents;