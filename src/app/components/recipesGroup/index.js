import React , {useState, useEffect} from "react";
import useStyles from "./stylesheet";
import { useTheme } from "../../context/themeContext";
import { useLanguage } from "../../context/languageContext";

const RecipesGroup=({
    photoURL,
    title,
    minute,
    people
}) =>{
    const {activeLanguage}=useLanguage();
    const {activeTheme}=useTheme();
    const lang=activeLanguage.translations;
    
    const classes=useStyles({color: activeTheme.color});
    return (
        <div className={classes.container}>
            <div className={classes.recipesContentContainer} >
                <img  src={photoURL}/>
                <h2>{title}</h2>
                <div className={classes.titleGroup} >
                <div className={classes.recipesContent}>
                    <img src='./images/zaman.png' alt='zaman'/>
                    <span>{minute} {lang.minute}</span>
                </div>
                <div className={classes.recipesContent}>
                    <img src='./images/kişi.png' alt='zaman'/>
                    <span>{people}{lang.people}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesGroup;