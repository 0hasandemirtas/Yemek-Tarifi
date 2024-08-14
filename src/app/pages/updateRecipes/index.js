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
    Link, useNavigate, useParams 
} from "react-router-dom";
import axios from "axios";

const UpdateRecipes = () => {
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
        id 
    } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({
        title: "",
        people: "",
        minute: "",
    });
    const navigate=useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/recipes/${id}`)
            .then((res) => {
                const recipes = res.data;
                if (recipes.code === 200) {
                    setRecipes(res.data.payload);
                    setIsLoading(false);
                } else {
                    throw new Error(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.error(err);
            })
            .finally(() => setIsLoading(false));
    }, []);
    const handleInput = (event) => {
        event && setPost({
            ...post, [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = (event) => {
        if (!post.title) {
            post.title = recipes.title;
        }
        if (!post.minute) {
            post.minute = recipes.minute;
        }
        if (!post.people) {
            post.people = recipes.people;
        }
        axios
            .put(`http://localhost:3001/api/recipes/${id}`, post)
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
                        placeholder={recipes.title}
                        type="text"
                        name="title"
                        onChange={handleInput}
                    />
                </form>
                <div className={classes.formContentContainer}>
                    <label className={classes.formGroup}>{lang.portion}</label>
                    <input
                        className={classes.formGroupInput}
                        placeholder={recipes.people}
                        name="people"
                        type="number"
                        onChange={handleInput}
                    />
                </div>
                <div className={classes.formContentContainer}>
                    <label className={classes.formGroup}>{lang.minute}</label>
                    <input
                        className={classes.formGroupInput}
                        placeholder={recipes.minute}
                        type="number"
                        name="minute"
                        onChange={handleInput}
                    />
                </div>
                <button className={classes.formButton} onClick={handleSubmit}>
                    {lang.update}
                </button>
            </div>
        </div>
    );
};

export default UpdateRecipes;
