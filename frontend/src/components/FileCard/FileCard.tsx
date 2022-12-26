import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import PenIcon from "@material-ui/icons/Edit";
import DotIcon from "@material-ui/icons/MoreVert";

import "./FileCard.scss";
import {clickHook} from "../../hooks/click.hook";
import SettingsIcon from "@material-ui/icons/Settings";
import TrashIcon from "@material-ui/icons/Delete";

interface FileCardProps {
    cardId?: String,
    fileName: String,
    lastUpdatedAt: String,
    isPublic?: Boolean,
    canCTAS?: Boolean
}

const FileCard = ({cardId = "", fileName, lastUpdatedAt, isPublic, canCTAS = false}: FileCardProps) => {
    const { useOutsideClick } = clickHook();

    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const enableEditMode = (event: any) => {
        setIsEditMode(true);
    }

    const disableEditMode = () => {
        setIsEditMode(false);
    }

    const handleInputChange = (event: any) => {}

    const hideDropdown = () => {
        setDropdownIsOpen(false);
    }

    const ref = useOutsideClick(disableEditMode);
    const dropdownRef = useOutsideClick(hideDropdown);

    useEffect(() => {
        if (!isEditMode) {}
    }, [isEditMode]);

    const handleDropdown = (event: any) => {
        setDropdownIsOpen(true);
    }

    return (
        <div className="file-card">
            <div className="badges">
                <p className="badge">{isPublic ? 'Public' : 'Private'}</p>
            </div>
            <Link to={"/file/" + cardId} className="file-card-preview"></Link>
            <div ref={ref} className="file-card-footer">
                <div className="titleText">
                    <p contentEditable={isEditMode} suppressContentEditableWarning={true} onInput={handleInputChange} className="titleText-title">{fileName}</p>
                    <p className="titleText-text">{lastUpdatedAt}</p>
                </div>
                {canCTAS && <div className="file-card-cta">
                    <div ref={dropdownRef} className="dropdown-wrapper" onClick={handleDropdown}>
                        <button className="icon-button"><DotIcon /></button>
                        <div className="dropdown" data-open={dropdownIsOpen}>
                            <button className="dropdown-button" onClick={enableEditMode}>Rename</button>
                            <button className="dropdown-button">Settings</button>
                            <button className="dropdown-button">Delete</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default FileCard;