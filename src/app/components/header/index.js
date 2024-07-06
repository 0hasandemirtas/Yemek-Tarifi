import React from 'react'
import useStyles from './stylesheet'
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { VscColorMode } from "react-icons/vsc";
import { useTheme } from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';

const Header=()=> {
  const {activeTheme, changeTheme}=useTheme();
  const {activeLanguage , changeLanguage}=useLanguage();
  const [isOpen, setOpen]=useState(false);
  const classes=useStyles({colors: activeTheme.color},{isOpen});
  const lang=activeLanguage.translations;
  
  return (
    <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img className={classes.logo}  src="./images/yemekLogo.jpg" alt='yemekLogo'/>
        </div>
        <div className={isOpen ? classes.contentContainerVisible : classes.contentContainerHidden}>
          <div className={classes.titleContentContainer}>
            <div>
              <Link className={classes.titleContent} to="/">{lang.home}</Link>
            </div>
            <div>
              <Link className={classes.titleContent} to="recipes">{lang.recipes}</Link>
            </div>
            <div>
              <Link className={classes.titleContent} to="myrecipes">{lang.myrecipes}</Link>
            </div>
          </div>
          <div className={classes.memberContainer}>
              <Link  className={classes.memberContent} to="login">{lang.signIn}</Link>
              <span className={classes.slash}>/</span>
              <Link className={classes.memberContent}  to="register">{lang.signUp}</Link>
          </div>
          <div className={classes.iconGroup}>
            <div className={classes.icon}>
              <GrLanguage onClick={()=>changeLanguage()}/>
            </div>
            <div className={classes.icon}>
              <VscColorMode onClick={()=> changeTheme()} />
            </div> 
          </div>
        </div>
          <div className={classes.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
          </div>
    </div>
  )
}

export default Header
