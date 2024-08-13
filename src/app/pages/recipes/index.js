import React, {
    useEffect 
} from "react";
import useStyles from "./stylesheet";
import {
    useTheme 
} from "../../context/themeContext";
import {
    useLanguage 
} from "../../context/languageContext";
import RecipesSections from "./views/recipesSection";
import {
    Link 
} from "react-router-dom";
import {
    useState 
} from "react";
const Recipes = () => {
    const {
        activeLanguage 
    } = useLanguage();
    const {
        activeTheme 
    } = useTheme();
    const lang = activeLanguage.translations;
    const [open, setOpen] = useState(false);
    const Controller = () => {
        setOpen(!open);
    };

    const classes = useStyles({
        colors: activeTheme.color 
    });
    return (
        <div className={classes.container}>
            <div className={classes.boxContainer} onClick={Controller}>
                <div className={classes.box}></div>
            </div>
            <div className={classes.recipesGroup}>
                <RecipesSections />
            </div>
        </div>
    );
};

export default Recipes;
