import {useState} from "react";

import {NavLink} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from "@material-ui/icons/Send";

import {useClickHook} from "../../../../hooks/useClickHook";

const SidebarCTA = ({icon, text, link, children}: any) => {
    const { useOutsideClick } = useClickHook();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const handleAddButton = (event: any) => {
        setDropdownIsOpen(true);
    }

    const hideDropdown = () => {
        setDropdownIsOpen(false);
    }

    const ref = useOutsideClick(hideDropdown);

    return (
        <NavLink ref={ref} to={link} data-active={dropdownIsOpen} className="sidebar-cta">
            {icon}
            <p>{text}</p>
            <div className="on-hover-cta" onClick={handleAddButton}>
                <AddIcon className="icon" />
            </div>
            <div className="dropdown" data-open={dropdownIsOpen}>
                {children}
            </div>
        </NavLink>
    )
}

export default SidebarCTA;