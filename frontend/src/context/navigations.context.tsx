import {createContext, useContext, useState} from "react";
import {clickHook} from "../hooks/click.hook";

const NavigationContext = createContext({
    showHiddenMenu: () => { },
    hiddenMenuOpen: false,
});
export const useNavigationContext = () => useContext(NavigationContext);

export const Navigations = ({ children }: any) => {
    const [hiddenMenuOpen, setHiddenMenuOpen] = useState(false);

    const { useOutsideClick } = clickHook();

    const showHiddenMenu = () => {
        setHiddenMenuOpen(!hiddenMenuOpen);
    }

    const hideHiddenMenu = () => {
        setHiddenMenuOpen(false);
    }

    const HiddenMenuRef = useOutsideClick(hideHiddenMenu);

    return (
        <NavigationContext.Provider value={{showHiddenMenu, hiddenMenuOpen}}>
            <div className="navigations" ref={HiddenMenuRef}>
                {children}
            </div>
        </NavigationContext.Provider>
    )
}