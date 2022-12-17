import {createContext, useContext, useState} from "react";

const NavigationContext = createContext({
    showHiddenMenu: () => { },
    hiddenMenuOpen: false,
});
export const useNavigationContext = () => useContext(NavigationContext);

export const Navigations = ({ children }: any) => {
    const [hiddenMenuOpen, setHiddenMenuOpen] = useState(false);

    const showHiddenMenu = () => {
        setHiddenMenuOpen(!hiddenMenuOpen);
    }

    return (
        <NavigationContext.Provider value={{showHiddenMenu, hiddenMenuOpen}}>
            <div className="navigations">
                {children}
            </div>
        </NavigationContext.Provider>
    )
}