import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';
import BellIcon from '@material-ui/icons/NotificationsOutlined';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation-left">
                <LogoIcon className="logo-icon" />
                <div className="content">
                    <p className="content-username">Mortis</p>
                    <p className="content-email">Mortgu.dev@gmail.com</p>
                </div>
                <ArrowDownIcon className="arrow-down" />
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