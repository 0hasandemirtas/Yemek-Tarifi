import React from "react";
import {
    Routes, Route 
} from "react-router-dom";
import { 
    Recipes, Login, MyRecipes, AddRecipe, RecipeContent, UpdateRecipes, SignUp,
    Home
} from "../pages";
function RouterConfig() {
    return (
        <div className="RouterConfig">
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home/>}/>
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
