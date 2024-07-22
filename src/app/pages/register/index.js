import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';
const Register=()=> {
    const {
        activeLanguage
    }=useLanguage();
    const {
        activeTheme
    }=useTheme();
    const lang=activeLanguage.translations;
    const classes=useStyles({
        colors: activeTheme.color
    });
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.formContainer} >
          
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.yourName}</label>
                        <input className={classes.formGroupInput}type='firstname' placeholder={lang.yourName}/>
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.lastName}</label>
                        <input className={classes.formGroupInput}type='lastname' placeholder={lang.lastName}/>
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>E-mail</label>
                        <input className={classes.formGroupInput}type='email'placeholder='E-mail'/>
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.password}</label>
                        <input className={classes.formGroupInput}type='password' placeholder={lang.password}/>
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.confirmPassword}</label>
                        <input className={classes.formGroupInput}type='password' placeholder={lang.confirmPassword}/>
                    </div>
                    <div className={classes.formContentContainer}>
            
                        <div className={classes.formGroupRadio}>
                            <label className={classes.formGroupRadioLabel} >{lang.gender}</label>
                            <div>
                                <div>
                                    <input className={classes.formInput} name='gender' type='radio' />
                                    <span>{lang.male}</span>
                                </div>
                                <div>
                                    <input className={classes.formInput} name='gender' type='radio' />
                                    <span>{lang.female}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={classes.formButton} >{lang.signUp}</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
