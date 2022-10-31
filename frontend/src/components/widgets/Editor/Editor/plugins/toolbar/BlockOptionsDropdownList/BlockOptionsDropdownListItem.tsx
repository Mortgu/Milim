import NotesIcon from "@material-ui/icons/Notes";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {useState} from "react";
import {useClickHook} from "../../../../../../../hooks/useClickHook";

const BlockOptionsDropdownListItem = ({children}: any) => {
    const { useOutsideClick } = useClickHook();

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdownVisibility = () => {
        setShowDropdown(!showDropdown);
    }

    const ref = useOutsideClick(() => {
        setShowDropdown(false);
    });

    return (
        <div ref={ref} className="dropdown-wrapper">
            <button className="toolbar-item toolbar-dropdown-item block-controls" onClick={toggleDropdownVisibility}>
                <div className="dropdown-selected-item">
                    <NotesIcon className="toolbar-item-icon dropdown-selected-icon" />
                    <span className="dropdown-selected-text">Normal</span>
                </div>
                <KeyboardArrowDownIcon className="toolbar-item-icon" />
            </button>
            <div className="dropdown" data-open={showDropdown}>
                {children}
            </div>
        </div>
    )
}

export default BlockOptionsDropdownListItem;