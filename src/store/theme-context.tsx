import React, { useContext, useEffect, useState } from "react";

export interface Themes {
    theme: string;
    changeTheme: (theme: any) => void;
}
export const themes = {
    dark: "dark",
    light: "light",
};

export const ThemeContext = React.createContext<Themes>({
    theme: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changeTheme: (theme: string) => { },
});

export default function ThemeContextProvider(props: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState(themes.light);

    function changeTheme(themeObtained: string) {

        if (themeObtained === "light") {
            setTheme("dark");
        } else if (themeObtained === "dark") {
            setTheme("light");
        }
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const themeCtx = useContext(ThemeContext);
    return themeCtx;
}
