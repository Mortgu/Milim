import "./BlockOptionsDropdownList.scss";

import NotesIcon from "@material-ui/icons/Notes";
import BlockOptionsDropdownListItem from "./BlockOptionsDropdownListItem";

const BlockOptionsDropdownList = ({editor, blockType}: any) => {
    return (
        <div className="block-dropdown">
            <BlockOptionsDropdownListItem formatAction="paragraph" blockType={blockType} editor={editor}>
                <NotesIcon className="icon dropdown-item-icon"/>
                <span className="text">Normal</span>
            </BlockOptionsDropdownListItem>
            <BlockOptionsDropdownListItem formatAction="h1" blockType={blockType} editor={editor}>
                <NotesIcon className="icon dropdown-item-icon"/>
                <span className="text">Large Heading</span>
            </BlockOptionsDropdownListItem>
            <BlockOptionsDropdownListItem formatAction="h2" blockType={blockType} editor={editor}>
                <NotesIcon className="icon dropdown-item-icon"/>
                <span className="text">Medium Heading</span>
            </BlockOptionsDropdownListItem>
            <BlockOptionsDropdownListItem formatAction="h3" blockType={blockType} editor={editor}>
                <NotesIcon className="icon dropdown-item-icon"/>
                <span className="text">Small Heading</span>
            </BlockOptionsDropdownListItem>
        </div>
    )
}

export default BlockOptionsDropdownList;