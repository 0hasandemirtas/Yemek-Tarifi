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
    Link, Outlet 
} from "react-router-dom";

const MyRecipes = () => {
    const {
        activeLanguage 
    } = useLanguage();
    const {
        activeTheme 
    } = useTheme();
    const lang = activeLanguage.translations;

    const classes = useStyles({
        colors: activeTheme.color 
    });
    return (
        <div className={classes.container}>
            <div className={classes.operationsContainer}>
                <Link to="/addRecipe">
                    <button>{lang.add}</button>
                </Link>
            </div>
            <div className={classes.recipesGroup}>
                <RecipesSections />
            </div>
        </div>
    );
};

export default MyRecipes;
