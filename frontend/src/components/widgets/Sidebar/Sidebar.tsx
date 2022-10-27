import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

import ClockIcon from "@material-ui/icons/Schedule";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import OrganisationIcon from "@material-ui/icons/HouseOutlined";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <section className="sidebar-section">
                <NavLink end to="/" className="sidebar-cta">
                    <ClockIcon className="icon" />
                    <p>Recents</p>
                </NavLink>
                <NavLink to="/subjects" data-active="false" className="sidebar-cta">
                    <NoteIcon className="icon" />
                    <p>Drafts</p>
                    <div className="on-hover-cta">
                        <AddIcon className="icon" />
                    </div>
                    <div className="dropdown" data-open="false"></div>
                </NavLink>
            </section>
            <div className="sidebar-separator"></div>
            <section className="sidebar-section">
                <NavLink to="/organisation" className="sidebar-cta">
                    <OrganisationIcon className="icon" />
                    <p>Organisation</p>
                </NavLink>
                <NavLink to="/members" className="sidebar-cta">
                    <PersonIcon className="icon" />
                    <p>Members</p>
                    <div className="on-hover-cta">
                        <AddIcon className="icon" />
                    </div>
                </NavLink>
            </section>
        </div>
    )
}

export default Sidebar;