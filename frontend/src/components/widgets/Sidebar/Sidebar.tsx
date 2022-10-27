import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

import ClockIcon from "@material-ui/icons/Schedule";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import AddIcon from "@material-ui/icons/Add";

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
                    <div className="on-hover-cta">
                        <AddIcon className="icon" />
                    </div>
                </NavLink>
            </section>
            <div className="sidebar-separator"></div>
        </div>
    )
}

export default Sidebar;