import "./FileCard.scss";

const FileCard = ({fileName, lastUpdatedAt}: any) => {
    return (
        <div className="file-card">
            <div className="file-card-preview"></div>
            <div className="file-card-footer titleText">
                <p className="titleText-title">{fileName}</p>
                <p className="titleText-text">{lastUpdatedAt}</p>
            </div>
        </div>
    )
}

export default FileCard;