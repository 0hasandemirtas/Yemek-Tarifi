import React, {
    useEffect, useState 
} from "react";
import useStyles from "./stylesheet";
import {
    useTheme 
} from "../../context/themeContext";
import {
    useLanguage 
} from "../../context/languageContext";
import {
    Link, 
    useNavigate
} from "react-router-dom";
import axios from "axios";
import {
    updatedUser 
} from "../../context/userContext";

const AddRecipe = () => {
    const {
        user
    }=updatedUser();
    console.log(user);
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
    const [post, setPost] = useState({
        title: "",
        people: "",
        minute: "",
    });
    const navigate=useNavigate();
    const handleInput = (event) => {
        setPost({
            ...post, [event.target.name]: event.target.value 
        });
        console.log({
            ...post 
        });
    };
    const handleSubmit = (event) => {
        console.log(post);
        axios
            .post("http://localhost:3001/api/recipes", post)
            .then((response) => console.log(response))
            .catch((err) => {
                alert(err.message);
                console.error(err);
            });
        navigate("/myRecipes");
    };
    console.log(post);
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <form className={classes.formContentContainer} onSubmit={handleSubmit}>
                    <label className={classes.formGroup}>{lang.recipeTitle}</label>
                    <input
                        className={classes.formGroupInput}
                        placeholder={lang.recipeTitle}
                        type="text"
                        name="title"
                        onChange={handleInput}
                    />
                </form>
                <div className={classes.formContentContainer}>
                    <label className={classes.formGroup}>{lang.portion}</label>
                    <input
                        className={classes.formGroupInput}
                        placeholder={lang.portion}
                        name="people"
                        type="number"
                        onChange={handleInput}
                    />
                </div>
                <div className={classes.formContentContainer}>
                    <label className={classes.formGroup}>{lang.minute}</label>
                    <input
                        className={classes.formGroupInput}
                        placeholder={lang.minute}
                        type="number"
                        name="minute"
                        onChange={handleInput}
                    />
                </div>
                <button className={classes.formButton} onClick={handleSubmit}>
                    {lang.add}
                </button>
            </div>
        </div>
    );
};

export default AddRecipe;
