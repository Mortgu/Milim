import React from "react";

import {Link} from "react-router-dom";

import PenIcon from "@material-ui/icons/Edit";

import "./FileCard.scss";

interface FileCardProps {
    cardId?: String,
    fileName: String,
    lastUpdatedAt: String,
    isPublic?: Boolean,
}

const FileCard = ({cardId = "", fileName, lastUpdatedAt, isPublic}: FileCardProps) => {
    return (
        <div className="file-card">
            <div className="badges">
                <p className="badge">{isPublic ? 'Public' : 'Private'}</p>
            </div>
            <Link to={"/file/" + cardId} className="file-card-preview"></Link>
            <div className="file-card-footer titleText">
                <div className="text-iconOnHover">
                    <p className="titleText-title">{fileName}</p>
                    <PenIcon />
                </div>
                <p className="titleText-text">Updated: {lastUpdatedAt}</p>
            </div>
        </div>
    )
}

export default FileCard;