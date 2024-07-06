import React, { useEffect } from 'react'
import useStyles from './stylesheet'
import { useTheme } from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';
import axios from 'axios';

const Recipes=()=> {
    const {activeLanguage}=useLanguage(); 
    const {activeTheme}=useTheme();
    const lang=activeLanguage.translations;
    const classes=useStyles({colors: activeTheme.color});
  return (
    <div className={classes.container}>
        <div className={classes.recipesGroup} >
            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>
            <div className={classes.recipesContentContainer} >
                <img  src='./images/yemek1.jpg' alt='yemek'/>
                <h2>Crispy Chicken Meatballs Recipe</h2>
                <div className={classes.titleGroup} >
              <div className={classes.recipesContent}>
                <img src='./images/zaman.png' alt='zaman'/>
                <span>20 {lang.minute}</span>
              </div>
                <div className={classes.recipesContent}>
                  <img src='./images/kişi.png' alt='zaman'/>
                  <span>4 {lang.people}</span>
                </div>
              </div>
            </div>

            
      </div>
    </div>
  )
}

export default Recipes
