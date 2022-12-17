import {createContext, useContext, useState} from "react";

type T_ThemeContext = {
    theme: string,
    setTheme: (theme: string) => void
}

const initialState: T_ThemeContext = {
    theme: '',
    setTheme: () => {}
}

const ThemeContext = createContext(initialState);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeManager = ({ children }: any) => {
    const isBrowserDefaultDark = () =>
        window.matchMedia('(prefers-color-schema: dark)').matches;

    const getDefaultTheme = (): string => {
        const localStorageTheme = localStorage.getItem("theme");
        const browserPreferredTheme = isBrowserDefaultDark() ? 'dark' : 'light';

        return localStorageTheme  || browserPreferredTheme;
    }

    const [theme, setTheme] = useState(getDefaultTheme());

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`background theme-${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}