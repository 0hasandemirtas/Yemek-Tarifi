import {
    useState, createContext, useContext 
} from "react";
import themes from "../themes";

const ThemeContext=createContext();
export const ThemeProvider=({
    children
})=>{
    
    const [activeTheme, setActiveTheme]=useState(themes[0]);
    const changeTheme=()=>{
        setActiveTheme(activeTheme===themes[0] ? themes[1] : themes[0]);
    };
    const values={
        activeTheme,
        changeTheme,
    };
    return (<ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>);
};
export const useTheme = ()=>useContext(ThemeContext);