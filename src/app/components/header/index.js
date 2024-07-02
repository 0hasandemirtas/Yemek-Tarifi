import React from 'react'
import useStyles from './stylesheet'
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { VscColorMode } from "react-icons/vsc";
import { useTheme } from '../../context/themeContext';

const Header=()=> {
  const {theme, setTheme}=useTheme();
  const [isOpen, setOpen]=useState(false);
  const classes=useStyles();
  return (
    <div className={classes.container}>
        <img className={classes.logo}  src="./images/yemekLogo.jpg"/>
        <div className={classes.titleContentContainer}>
          <div>
            <Link className={classes.titleContent} to="/">Home</Link>
          </div>
          <div>
            <Link className={classes.titleContent} to="recipes">Recipes</Link>
          </div>
          <div>
            <Link className={classes.titleContent} to="myrecipes">My Recipes</Link>
          </div>
        </div>
        <div className={classes.memberContainer}>
            <Link  className={classes.memberContent} to="login">Sign In</Link>
            <span className={classes.slash}>/</span>
            <Link className={classes.memberContent}  to="register">Sign Up</Link>
        </div>
        <div className={classes.iconGroup}>
          <div className={classes.icon}>
            <GrLanguage />
          </div>
          <div className={classes.icon}>
            <VscColorMode onClick={()=> setTheme(theme ==="light" ? "dark" : "light")} />
          </div> 
        </div>
        <div className={classes.hamburger}>
          <Hamburger   toggled={isOpen} toggle={setOpen}/>
        </div>
        
    </div>
  )
}

export default Header