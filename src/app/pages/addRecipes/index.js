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
    userAuth 
} from "../../context/userContext";

const AddRecipe = () => {
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
    const {
        user
    }=userAuth();
    const [post, setPost] = useState({
        title: "",
        people: "",
        minute: "",
        users: user.userName,
    });
    const navigate=useNavigate();
    const handleInput = (event) => {
        setPost({
            ...post, [event.target.name]: event.target.value 
        });
    };
    const handleSubmit = async(event) => {
        console.log(post);
        await axios
            .post("http://localhost:3001/api/recipes", post)
            .then((response) => console.log(response))
            .catch((err) => {
                alert(err.message);
                console.error(err);
            });
        navigate("/myRecipes");
    };
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
