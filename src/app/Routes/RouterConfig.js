import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Register from '../pages/register';
import Recipes from '../pages/recipes';
import Login from '../pages/login';
function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="login" element={<Login/>} />
            <Route path="recipes" element={<Recipes/>} />
        </Routes>
    </div>
  )
}

export default RouterConfig