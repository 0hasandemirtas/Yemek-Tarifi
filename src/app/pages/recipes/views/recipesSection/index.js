import React, {
    useEffect, useState 
} from "react";
import useStyles from "./stylesheet";
import axios from "axios";
import RecipesGroup from "../../../../components/recipesGroup";
import {
    userAuth 
} from "../../../../context/userContext";
import {
    Audio 
} from "react-loader-spinner";

const RecipesSections = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();
    const apiURL = "http://localhost:3001";
    
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/recipes")
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
    return (
        <>
            {isLoading ? (
                <Audio/>
            ) : (
                recipes.map((item, index) => {
                    return (
                        <RecipesGroup
                            key={`recipes-${index}`}
                            photoURL="./images/yemek1.jpg"
                            title={item.title}
                            minute={item.minute}
                            people={item.people}
                            controller="none"
                        />
                    );
                })
            )}
        </>
    );
};

export default RecipesSections;
