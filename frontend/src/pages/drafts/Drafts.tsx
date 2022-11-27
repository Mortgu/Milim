import React, {useEffect, useState} from "react";
import moment from "moment/moment";

import {NavLink} from "react-router-dom";

import PageNavigation from "../../components/PageNavigation/PageNavigation";
import {C_Draft, DraftHandler} from "../resents/Resents.service";
import FileCard from "../../components/FileCard/FileCard";
import {useSocketHook} from "../../hooks/socket.hook";

const Drafts = () => {
    const {socket} = useSocketHook();

    const [loading, setLoading] = useState(true);

    const [drafts, setDrafts] = useState<{ _id: string, fileName: string, meta: { lastUpdatedAt: string } }[]>(C_Draft);

    const fetchDrafts = async () => {
        setLoading(true);

        await new DraftHandler("http://localhost:4000/drafts", "GET")
            .filter("meta.public", false)
            .build((data: any) => {
                setDrafts(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchDrafts();

        socket.on('drafts:added', (args: any) => {
            console.log(args);
            fetchDrafts();
        });
    }, []);

    if (loading) {
        return (
            <div className="">
                <PageNavigation>
                    <NavLink end to="/drafts" className="page-navigation-item">Drafts</NavLink>
                    <NavLink end to="/drafts/deleted" className="page-navigation-item">Deleted</NavLink>
                </PageNavigation>
                <div className="page">
                    <div className="loader-wrapper">
                        <div className="loader"></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <PageNavigation>
                <NavLink end to="/drafts" className="page-navigation-item">Drafts</NavLink>
                <NavLink end to="/drafts/deleted" className="page-navigation-item">Deleted</NavLink>
            </PageNavigation>
            <div className="page">
                <div className="file-card-wrapper">
                    {drafts?.map((row: any, index: any) => {
                        return <FileCard key={index} cardId={row._id} fileName={row.fileName} isPublic={row.meta.public}
                                         canCTAS={true}
                                         lastUpdatedAt={moment(row.meta.lastUpdatedAt).format('DD.MM.YYYY HH:MM')}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Drafts;
