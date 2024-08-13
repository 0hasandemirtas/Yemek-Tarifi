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
    Link, Outlet, 
    useNavigate
} from "react-router-dom";

const MyRecipes = () => {
    const {
        activeLanguage 
    } = useLanguage();
    const {
        activeTheme 
    } = useTheme();
    const lang = activeLanguage.translations;
    const navigate =useNavigate();
    const classes = useStyles({
        colors: activeTheme.color 
    });
    return (
        <div className={classes.container}>
            
            <div className={classes.recipesGroup}>
                <RecipesSections />
            </div>
            <button 
                className={classes.addButton}
                onClick={() => navigate("/addRecipe")}
            >{lang.add}</button>
        </div>
    );
};

export default MyRecipes;
