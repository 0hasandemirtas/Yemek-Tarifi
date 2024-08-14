import React, {
    useEffect, useState 
} from "react";
import useStyles from "./stylesheet";
import axios from "axios";
import RecipesGroup from "../../../../components/recipesGroup";
import {
    MdDelete 
} from "react-icons/md";
import {
    Audio 
} from "react-loader-spinner";
import {
    userAuth 
} from "../../../../context/userContext";
const RecipesSections = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();
    const apiURL = "http://localhost:3001";
    const {
        user
    }=userAuth();
    console.log("usersnamesss",user.data.data);
    useEffect(()=>{
        axios
            .get(`http://localhost:3001/api/recipes/users/${user.data.data.userName}`,{
                headers:{
                    Authorization: `Bearer ${user.data.data.token}`
                }
            })
            .then((res) => {
                const recipes = res.data;
                console.log("recipess",recipes);
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
    console.log("recipes",recipes);
    return (
        <>
            {isLoading ? (
                <Audio 
                   
                />
            ) : (
                recipes.map((item, index) => {
                    return (
                        <RecipesGroup
                            key={`recipes-${index}`}
                            photoURL="./images/yemek1.jpg"
                            title={item.title}
                            minute={item.minute}
                            people={item.people}
                            id={item.id}
                            controller="flex"
                        />
                    );
                })
            )}
        </>
    );
};

export default RecipesSections;
