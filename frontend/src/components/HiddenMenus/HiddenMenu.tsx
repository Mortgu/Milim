import "./HiddenMenu.scss";

import UserActionsMenu from "./components/UserActionsMenu";

export const HIDDE_MENU_TYPES = {
    USER_ACTIONS_MENU: "USER_ACTIONS_MENU"
}

const HIDDEN_MENU_COMPONENTS: any = {
    [HIDDE_MENU_TYPES.USER_ACTIONS_MENU]: UserActionsMenu
}

export const useHiddenMenu = () => {

    const showHiddenMenu = (type: string, props: any = {}) => {
        const HiddenMenuComponent = HIDDEN_MENU_COMPONENTS[type];

        const components = document.querySelectorAll(`.${HiddenMenuComponent().props.className.replaceAll(" ", ".")}`)

        components.forEach(component => component.classList.add('show'));
    }
    const hideHiddenMenu = () => {}

    return { showHiddenMenu, hideHiddenMenu };
}

const HiddenMenu = ({ children }: any) => {
    return (
        <div className="hidden-menu">
            {children}
        </div>
    )
}

export default HiddenMenu;