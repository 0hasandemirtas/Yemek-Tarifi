import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';
const Login=()=> {
    const {
        activeLanguage
    }=useLanguage();
    const {
        activeTheme
    }=useTheme();
    const lang=activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color
    });
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.formContainer} >
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>E-mail</label>
                        <input className={classes.formGroupInput}type='email'placeholder='E-mail'/>
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.password}</label>
                        <input className={classes.formGroupInput}type='password' placeholder={lang.password}/>
                    </div>
                    <button className={classes.formButton} >{lang.signIn}</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
