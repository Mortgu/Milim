import "./SideNavigation.scss";
import "./elements/items/SideNavigationItem.scss";

import ClockIcon from "@material-ui/icons/Schedule";
import FolderIcon from "@material-ui/icons/Folder";
import SubdirectoryIcon from "@material-ui/icons/SubdirectoryArrowRight";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import PublicIcon from "@material-ui/icons/Public";
import MarketplaceIcon from "@material-ui/icons/Storefront";
import ForumIcon from "@material-ui/icons/Forum";
import {MODAL_TYPES, useGlobalModalContext} from "../Models/GlobalModal";
import SideNavigationItemDropdown from "./elements/items/SideNavigationItemDropdown";
import SideNavigationItem from "./elements/items/SideNavigationItem";
import {useNavigationContext} from "../../context/navigations.context";
import {clickHook} from "../../hooks/click.hook";

const SideNavigation = () => {
    const { hiddenMenuOpen } = useNavigationContext();
    const { useOutsideClick } = clickHook();

    const {showModal} = useGlobalModalContext();
    const showJoinOrganisationModal = () => {
        showModal(MODAL_TYPES.JOIN_ORGANISATION_MODAL, {});
    }

    const hiddenMenuRef = useOutsideClick(() => hiddenMenuOpen);

    return (
        <div className="SideNavigation-wrapper">
            <div className={`SideNavigation-hiddenMenu ${hiddenMenuOpen ? '' : 'hide'}`}>
                <section className="SideNavigation-section">
                    <SideNavigationItem icon={<ClockIcon className="item-icon" />} text="Profile" end link="/profile" />
                    <SideNavigationItem icon={<PublicIcon className="item-icon" />} text="Settings" link="/logout" />
                    <SideNavigationItem icon={<PublicIcon className="item-icon" />} text="Logout" link="/logout" />
                </section>
            </div>
            <div className="SideNavigation">
                <section className="SideNavigation-section">
                    <SideNavigationItem icon={<MarketplaceIcon className="item-icon" />} text="Marketplace" end link="/" />
                    <SideNavigationItem data-disabled={true} icon={<ForumIcon className="item-icon" />} text="Forum" end link="/forum" />
                </section>

                <div className="SideNavigation-separator"></div>

                <section className="SideNavigation-section">
                    <SideNavigationItem icon={<ClockIcon className="item-icon" />} text="Resents" end link="/resents" />
                    <SideNavigationItemDropdown icon={<NoteIcon className="item-icon" />} text="Drafts" link="/drafts">
                        <div className="dropdown-item">
                            <SubdirectoryIcon className="item-icon" />
                            <NoteIcon className="item-icon" />
                            <input className="input" type="text" placeholder="File Name..." />
                        </div>
                    </SideNavigationItemDropdown>
                    <SideNavigationItem icon={<PublicIcon className="item-icon" />} text="Published" link="/published" />
                </section>

                <div className="SideNavigation-separator"></div>

                <section className="SideNavigation-section">
                    <SideNavigationItemDropdown icon={<FolderIcon className="item-icon" />} text="Collections" link="/collections">
                        <div className="dropdown-item">
                            <SubdirectoryIcon className="item-icon" />
                            <FolderIcon className="item-icon" />
                            <input className="input" type="text" placeholder="Folder Name..." />
                        </div>
                    </SideNavigationItemDropdown>
                </section>

                <div className="SideNavigation-separator"></div>
            </div>
        </div>
    )
}

export default SideNavigation;