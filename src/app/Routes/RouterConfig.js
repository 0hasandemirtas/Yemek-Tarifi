import React from "react";
import {
    Routes, Route 
} from "react-router-dom";
import Recipes from "../pages/recipes";
import Login from "../pages/login";
import MyRecipes from "../pages/myRecipes";
import AddRecipe from "../pages/addRecipes";
import RecipeContent from "../pages/recipeContent";
import UpdateRecipes from "../pages/updateRecipes";
import SignUp from "../pages/signUp";
import './RouterConfig.css';
function RouterConfig() {
    return (
        <div className="RouterConfig">
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/myRecipes" element={<MyRecipes />} />
                <Route path="/addRecipe" element={<AddRecipe />} />
                <Route path="/recipeContent/:id" element={<RecipeContent />} />
                <Route path="/updateRecipes/:id" element={<UpdateRecipes />} />
            </Routes>
        </div>
    );
}

export default RouterConfig;
