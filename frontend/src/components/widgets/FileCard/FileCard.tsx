import "./FileCard.scss";
import {Link} from "react-router-dom";

const FileCard = ({_id, fileName, lastUpdatedAt}: any) => {
    return (
        <Link to={"/file/" + _id} className="file-card">
            <div className="file-card-preview"></div>
            <div className="file-card-footer titleText">
                <p className="titleText-title">{fileName}</p>
                <p className="titleText-text">{lastUpdatedAt}</p>
            </div>
        </Link>
    )
}

export default FileCard;