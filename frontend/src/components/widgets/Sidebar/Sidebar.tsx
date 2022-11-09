import "./Sidebar.scss";
import "./elements/items/SidebarItem.scss";

import ClockIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import OrganisationIcon from "@material-ui/icons/HouseOutlined";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import MailIcon from "@material-ui/icons/MailOutlined";
import PublicIcon from "@material-ui/icons/Public";
import {MODAL_TYPES, useGlobalModalContext} from "../Models/GlobalModal";
import SidebarItemDropdown from "./elements/items/SidebarItemDropdown";
import SidebarItem from "./elements/items/SidebarItem";

const Sidebar = () => {
    const {showModal} = useGlobalModalContext();

    const showJoinOrganisationModal = () => {
        showModal(MODAL_TYPES.JOIN_ORGANISATION_MODAL, {});
    }

    return (
        <div className="sidebar">
            <section className="sidebar-section">
                <SidebarItem icon={<ClockIcon className="item-icon" />} text="Recents" end link="/" />
                <SidebarItemDropdown icon={<NoteIcon className="item-icon" />} text="Drafts" link="/drafts">
                    <div className="dropdown-item">
                        <NoteIcon className="item-icon" />
                        <input className="input" type="text" placeholder="Datei Name..." />
                    </div>
                </SidebarItemDropdown>
                <SidebarItem icon={<PublicIcon className="item-icon" />} text="Published" link="/published" />
            </section>
            <div className="sidebar-separator"></div>
            <section className="sidebar-section">
                <SidebarItem icon={<OrganisationIcon className="item-icon" />} text="Organisation" end link="/organisation" />
                <SidebarItemDropdown icon={<NoteIcon className="item-icon" />} text="Drafts" end link="/organisation/drafts">
                    <div className="dropdown-item">
                        <NoteIcon className="item-icon" />
                        <input className="input"  type="text" placeholder="Datei Name..." />
                    </div>
                </SidebarItemDropdown>
                <SidebarItemDropdown icon={<PersonIcon className="item-icon" />} text="Members" end link="/organisation/members">
                    <div className="dropdown-item">
                        <MailIcon className="item-icon" />
                        <input className="input" type="text" placeholder="E-Mail..." />
                    </div>
                </SidebarItemDropdown>
            </section>
            <div className="sidebar-separator"></div>
            <div className="sidebar-message-box">
                <p className="message-box-text">
                    Join or create a Organization to connect with your Team and manage your Drafts together.
                </p>
                <div className="message-box-ctas">
                    <button className="button primary-button" onClick={showJoinOrganisationModal}>Join</button>
                    <button className="button primary-button-125">Create</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;