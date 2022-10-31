import "./BlockOptionsDropdownList.scss";

import NotesIcon from "@material-ui/icons/Notes";
import BlockOptionsDropdownListItem from "./BlockOptionsDropdownListItem";

const BlockOptionsDropdownList = ({editor, blockType}: any) => {
    return (
        <div className="block-dropdown">
            <BlockOptionsDropdownListItem formatAction="paragraph" blockType={blockType} editor={editor} />
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Normal</span>
            </button>
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Large Heading</span>
            </button>
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Small Heading</span>
            </button>
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Bullet List</span>
            </button>
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Numbered List</span>
            </button>
            <button className="dropdown-item">
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Quote</span>
            </button>
            <button className="dropdown-item" >
                <NotesIcon className="icon dropdown-item-icon" />
                <span className="text">Code Block</span>
            </button>
        </div>
    )
}

export default BlockOptionsDropdownList;