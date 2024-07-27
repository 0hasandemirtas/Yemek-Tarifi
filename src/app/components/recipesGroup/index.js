import React, {
    useState, useEffect 
} from "react";
import useStyles from "./stylesheet";
import {
    useTheme 
} from "../../context/themeContext";
import {
    useLanguage 
} from "../../context/languageContext";
import {
    Link, useNavigate 
} from "react-router-dom";
import {
    MdDelete 
} from "react-icons/md";
import {
    FaEdit 
} from "react-icons/fa";
import axios from "axios";

const RecipesGroup = ({
    photoURL, title, minute, people, id 
}) => {
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

    const navigate = useNavigate();
    const recipeDelete = () => {
        axios
            .delete(`http://localhost:3001/api/questions/${id}`)
            .catch((err) => {
                alert(err.message);
                console.error(err);
            })
            .finally();
    };
    return (
        <div className={classes.recipesContentContainer}>
            <img src={photoURL} onClick={() => navigate("/recipeContent/" + id)} />
            <h2>{title}</h2>
            <div className={classes.titleGroup}>
                <div className={classes.recipesContent}>
                    <img src="./images/zaman.png" alt="zaman" />
                    <span>
                        {minute} {lang.minute}
                    </span>
                </div>
                <div className={classes.recipesContent}>
                    <img src="./images/kişi.png" alt="zaman" />
                    <span>
                        {people} {lang.people}
                    </span>
                </div>
            </div>
            <div className={classes.controlContainer}>
                <button
                    onClick={() => navigate("/recipeContent/" + id)}
                    className={classes.button}
                >
          Detay
                </button>
                <MdDelete onClick={recipeDelete} />
                <FaEdit onClick={() => navigate("/updateRecipes/" + id)} />
            </div>
        </div>
    );
};

export default RecipesGroup;
