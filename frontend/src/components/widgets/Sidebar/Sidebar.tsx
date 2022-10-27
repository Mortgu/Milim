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
                <NavLink to="/organisation" className="sidebar-cta">
                    <OrganisationIcon className="icon" />
                    <p>Organisation</p>
                </NavLink>
                <SidebarCTA
                    icon={<PersonIcon className="icon" />}
                    text="Members"
                    link="/members"
                />
            </section>
        </div>
    )
}

export default Sidebar;