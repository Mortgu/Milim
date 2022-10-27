import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

import ClockIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import OrganisationIcon from "@material-ui/icons/HouseOutlined";
import SidebarCTA from "./elements/SidebarCTA";
import NoteIcon from "@material-ui/icons/NoteOutlined";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <section className="sidebar-section">
                <NavLink end to="/" className="sidebar-cta">
                    <ClockIcon className="icon" />
                    <p>Recents</p>
                </NavLink>
                <SidebarCTA
                    icon={<NoteIcon className="icon" />}
                    text="Drafts"
                    link="/subjects"
                />
            </section>
            <div className="sidebar-separator"></div>
            <section className="sidebar-section">
                <NavLink end to="/organisation" className="sidebar-cta">
                    <OrganisationIcon className="icon" />
                    <p>Organisation</p>
                </NavLink>
                <SidebarCTA
                    icon={<PersonIcon className="icon" />}
                    text="Members"
                    link="/organisation/members"
                />
                <SidebarCTA
                    icon={<NoteIcon className="icon" />}
                    text="Drafts"
                    link="/organisation/drafts"
                />
            </section>
            <div className="sidebar-separator"></div>
            <div className="sidebar-message-box">
                <p className="message-box-text">
                    Join or create a Organization to connect with your Team and manage your Drafts together.
                </p>
                <div className="message-box-ctas">
                    <button className="button button-primary">Join</button>
                    <button className="button button-secondary">Create</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;