import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';
import BellIcon from '@material-ui/icons/NotificationsOutlined';
import SendIcon from "@material-ui/icons/Send";
import {useState} from "react";
import {useClickHook} from "../../../hooks/useClickHook";

const Navigation = () => {
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
        <div className="navigation">
            <div ref={ref} className="navigation-left" onClick={handleAddButton}>
                <LogoIcon className="logo-icon" />
                <div className="content">
                    <p className="content-username">Mortis</p>
                    <p className="content-email">Mortgu.dev@gmail.com</p>
                </div>
                <ArrowDownIcon className="arrow-down" />
                <div className="dropdown" data-open={dropdownIsOpen}>
                    <div className="button-list">
                        <button className="button list-button">Profile</button>
                        <div className="list-divider"></div>
                        <button className="button list-button">Settings</button>
                        <button className="button list-button">Log out</button>
                    </div>
                </div>
            </div>
            <div className="navigation-center"></div>
            <div className="navigation-right">
                <div className="notifications">
                    <BellIcon />
                </div>
                <div className="user-icon">
                    <LogoIcon className="logo-icon" />
                    <ArrowDownIcon className="arrow-down" />
                </div>
            </div>
        </div>
    )
}

export default Navigation;