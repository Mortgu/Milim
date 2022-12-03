import {NavLink} from "react-router-dom";

const SideNavigationItem = ({ icon, text, link, children, ...props }: any) => {
    return (
        <NavLink {...props} to={link} className="sidebar-item">
            {icon}
            <p className="item-text">{text}</p>
            {children}
        </NavLink>
    )
}

export default SideNavigationItem;