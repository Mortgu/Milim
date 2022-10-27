import "./Navigation.scss";

import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LogoIcon from '@material-ui/icons/AccountCircle';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation-user-left">
                <LogoIcon className="logo-icon" />
                <div className="content">
                    <p className="content-username">Mortis</p>
                    <p className="content-email">Mortgu.dev@gmail.com</p>
                </div>
                <ArrowDownIcon className="arrow-down" />
            </div>
        </div>
    )
}

export default Navigation;