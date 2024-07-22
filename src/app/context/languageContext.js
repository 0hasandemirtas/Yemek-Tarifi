import {
    useState ,createContext, useContext 
} from "react";
import locales from "../locales";

const LanguageContext=createContext();
export const LanguageProvider=({
    children
})=>{

    const [activeLanguage,setActiveLanguage]=useState(locales[1]);
    const changeLanguage=()=>{
        setActiveLanguage(activeLanguage===locales[0] ? locales[1] : locales[0]);
    };
    const values={
        activeLanguage,
        changeLanguage
    };

    return (<LanguageContext.Provider value={values}>
        {children}
    </LanguageContext.Provider>);
};
export const useLanguage = ()=>useContext(LanguageContext);