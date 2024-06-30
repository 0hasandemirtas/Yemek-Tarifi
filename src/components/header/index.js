import React from 'react'
import useStyles from './stylesheet'
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { useState } from 'react';

const Header=()=> {
  const [isOpen, setOpen]=useState(false);
  const classes=useStyles();
  return (
    <div className={classes.container}>
        <img className={classes.logo}  src="./images/yemekLogo.jpg"/>
        <div className={classes.titleContentContainer}>
            <Link className={classes.titleContent} to="/">Home</Link>
            <Link className={classes.titleContent} to="recipes">Recipes</Link>
            <Link className={classes.titleContent} to="myrecipes">My Recipes</Link>
        </div>
        <div className={classes.memberContainer}>
            <Link  className={classes.memberContent} to="login">Sign In</Link>
            <span className={classes.slash}>/</span>
            <Link className={classes.memberContent}  to="register">Sign Up</Link>
        </div>
        <div className={classes.hamburger}>
          <Hamburger   toggled={isOpen} toggle={setOpen}/>
        </div>
        
    </div>
  )
}

export default Header