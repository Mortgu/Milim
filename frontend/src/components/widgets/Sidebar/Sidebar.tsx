import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

import ClockIcon from "@material-ui/icons/Schedule";
import NoteIcon from "@material-ui/icons/NoteOutlined";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <section className="sidebar-section">
                <NavLink end to="/" className="sidebar-cta">
                    <ClockIcon className="icon" />
                    <p>Recents</p>
                </NavLink>
                <NavLink to="/subjects" className="sidebar-cta">
                    <NoteIcon className="icon" />
                    <p>Drafts</p>
                </NavLink>
            </section>
            <div className="sidebar-separator"></div>
        </div>
    )
}

export default Sidebar;