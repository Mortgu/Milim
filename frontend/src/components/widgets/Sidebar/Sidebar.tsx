import "./Sidebar.scss";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";

const Sidebar = ({ title, text }: any) => {
    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <ArrowBackIcon/>
                <div className="head-content">
                    <h3 className="head-title">{title}</h3>
                    <p className="head-text">Frau Morando</p>
                </div>
            </div>
            <div className="sidebar-ctas">
                <div className="input search-input">
                    <div className="icon">
                        <SearchIcon />
                    </div>
                    <input type="text" placeholder="Search..." />
                </div>
                <button className="button button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                         viewBox="0 0 24 24" width="24">
                        <g>
                            <path d="M0,0h24 M24,24H0" fill="none"/>
                            <path
                                d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Sidebar;