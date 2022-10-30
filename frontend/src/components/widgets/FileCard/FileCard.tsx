import React from "react";

import {Link} from "react-router-dom";

import "./FileCard.scss";

interface FileCardProps {
    cardId?: String,
    fileName: String,
    lastUpdatedAt: String,
}

const FileCard = ({cardId = "", fileName, lastUpdatedAt}: FileCardProps) => {
    return (
        <Link to={"/file/" + cardId} className="file-card">
            <div className="file-card-preview"></div>
            <div className="file-card-footer titleText">
                <p className="titleText-title">{fileName}</p>
                <p className="titleText-text">{lastUpdatedAt}</p>
            </div>
        </Link>
    )
}

export default FileCard;