import "./SideNavigation.scss";
import "./elements/items/SideNavigationItem.scss";

import ClockIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import OrganisationIcon from "@material-ui/icons/HouseOutlined";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import MailIcon from "@material-ui/icons/MailOutlined";
import PublicIcon from "@material-ui/icons/Public";
import MarketplaceIcon from "@material-ui/icons/Storefront";
import {MODAL_TYPES, useGlobalModalContext} from "../Models/GlobalModal";
import SideNavigationItemDropdown from "./elements/items/SideNavigationItemDropdown";
import SideNavigationItem from "./elements/items/SideNavigationItem";

const SideNavigation = () => {
    const {showModal} = useGlobalModalContext();

    const showJoinOrganisationModal = () => {
        showModal(MODAL_TYPES.JOIN_ORGANISATION_MODAL, {});
    }

    return (
        <div className="SideNavigation">
            <section className="SideNavigation-section">
                <SideNavigationItem icon={<MarketplaceIcon className="item-icon" />} text="Marketplace" end link="/" />
            </section>

            <div className="SideNavigation-separator"></div>

            <section className="SideNavigation-section">
                <SideNavigationItem icon={<ClockIcon className="item-icon" />} text="Resents" end link="/resents" />
                <SideNavigationItemDropdown icon={<NoteIcon className="item-icon" />} text="Drafts" link="/drafts">
                    <div className="dropdown-item">
                        <NoteIcon className="item-icon" />
                        <input className="input" type="text" placeholder="Datei Name..." />
                    </div>
                </SideNavigationItemDropdown>
                <SideNavigationItem icon={<PublicIcon className="item-icon" />} text="Published" link="/published" />
            </section>

            <div className="SideNavigation-separator"></div>

            <section className="SideNavigation-section">
                <SideNavigationItem icon={<OrganisationIcon className="item-icon" />} text="Organisation" end link="/organisation" />
                <SideNavigationItemDropdown icon={<NoteIcon className="item-icon" />} text="Drafts" end link="/organisation/drafts">
                    <div className="dropdown-item">
                        <NoteIcon className="item-icon" />
                        <input className="input"  type="text" placeholder="Datei Name..." />
                    </div>
                </SideNavigationItemDropdown>
                <SideNavigationItemDropdown icon={<PersonIcon className="item-icon" />} text="Members" end link="/organisation/members">
                    <div className="dropdown-item">
                        <MailIcon className="item-icon" />
                        <input className="input" type="text" placeholder="E-Mail..." />
                    </div>
                </SideNavigationItemDropdown>
            </section>

            <div className="SideNavigation-separator"></div>

            <div className="SideNavigation-message-box">
                <p className="message-box-text">
                    Join or create a Organization to connect with your Team and manage your Drafts together.
                </p>
                <div className="message-box-ctas">
                    <button className="button primary-button" onClick={showJoinOrganisationModal}>Join</button>
                    <button className="button primary-button-125">Create</button>
                </div>
            </div>
        </div>
    )
}

export default SideNavigation;