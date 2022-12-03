import {useState} from "react";
import AddIcon from "@material-ui/icons/Add";

import {useClickHook} from "../../../../hooks/useClickHook";
import SideNavigationItem from "./SideNavigationItem";

const SideNavigationItemDropdown = ({ icon, text, link, children }: any) => {
    const { useOutsideClick } = useClickHook();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const toggleAction = (event: any) => {
        setDropdownIsOpen(!dropdownIsOpen);
    }

    const hideDropdown = () => {
        setDropdownIsOpen(false);
    }

    const ref = useOutsideClick(hideDropdown);

    return (
        <div ref={ref} className="sidebar-item-wrapper">
            <SideNavigationItem icon={icon} text={text} link={link}>
                <div className="onHover" onClick={toggleAction}>
                    <AddIcon className="icon hover-icon" />
                </div>
            </SideNavigationItem>
            <div className="cta-action" data-open={dropdownIsOpen}>
                {children}
            </div>
        </div>
    )
}

export default SideNavigationItemDropdown;