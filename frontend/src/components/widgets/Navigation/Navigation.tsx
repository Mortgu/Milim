import "./Navigation.scss";

import DiscoverIcon from "@material-ui/icons/Explore";
import DescriptionIcon from "@material-ui/icons/Description";
import SettingsIcon from "@material-ui/icons/Settings";

import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            {/**<div className="navigation-head">

            </div>
            <hr className="navigation-section-separator" />**/}
            <div className="navigation-body">
                <NavLink end to="/" className={({isActive}) => (isActive ? 'navigation-item active' : 'navigation-item')}>
                    <DiscoverIcon />
                </NavLink>
                <NavLink to="/subjects" className={({isActive}) => (isActive ? 'navigation-item active' : 'navigation-item')}>
                    <DescriptionIcon />
                </NavLink>
            </div>
            <hr className="navigation-section-separator" />
            <div className="navigation-footer">
                <NavLink to="/settings" className={({isActive}) => (isActive ? 'navigation-item active' : 'navigation-item')}>
                    <SettingsIcon />
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation;