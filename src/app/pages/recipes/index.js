import React, { useEffect } from 'react'
import useStyles from './stylesheet'
import { useTheme } from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';
import axios from 'axios';
import RecipesSections from './views/recipesSection';

const Recipes=()=> {
    const {activeLanguage}=useLanguage(); 
    const {activeTheme}=useTheme();
    const lang=activeLanguage.translations;

    const classes=useStyles({colors: activeTheme.color});
  return (
    <div className={classes.container}>
        <div className={classes.operationsContainer} >
          <button>Ekle</button>
          <button>Sil</button>
          <button>Güncelle</button>
        </div>
        <div className={classes.recipesGroup} >
            <RecipesSections/>
      </div>
    </div>
  )
}

export default Recipes
