import NotesIcon from "@material-ui/icons/Notes";

const BlockOptionsDropdownListItem = ({ editor, blockType, formatAction }: any) => {

    const handleFormat = () => {
        if (blockType !== formatAction) {

        }
    }

    return (
        <button className="dropdown-item" onClick={handleFormat}>
            <NotesIcon className="icon dropdown-item-icon"/>
            <span className="text">Bullet List</span>
        </button>
    )
}

export default BlockOptionsDropdownListItem;