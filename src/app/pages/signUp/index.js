import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';
import {
    useFormik
} from 'formik';
import validationSchema from '../../schemas/validations';
import axios from 'axios';
import {
    useNavigate 
} from 'react-router-dom';
const SignUp=()=> {
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
    const navigate=useNavigate();
    const submit = (values,action)=>{
        setTimeout(()=>{
            action.resetForm();
        },2000);
        
    };
    const {
        values, errors, handleChange, handleSubmit
    }=useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:"",
            passwordConfirm:"",
        },
        validationSchema,
        onSubmit:async(values,bag)=>{
            await axios
                .post("http://localhost:3001/api/users", {
                    userName:values.userName,
                    email:values.email, 
                    password:values.password 
                })
                .then((response) => {
                    navigate("/login");
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    console.error(err.response);
                });
            
        }
    });
    return (
        <div>
            <div className={classes.container}>
                <form className={classes.formContainer} onSubmit={handleSubmit} >
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.userName}</label>
                        <input 
                            className={classes.formGroupInput} 
                            type='userName' 
                            name="userName"
                            placeholder={lang.userName} 
                            onChange={handleChange}
                            value={values.userName}
                        />
                        {errors.userName && <p className={classes.ınputError}
                        >{errors.userName}</p>}
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>E-mail</label>
                        <input 
                            className={classes.formGroupInput}
                            type='email'
                            placeholder='E-mail' 
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        {errors.email && <p className={classes.ınputError}
                        >{errors.email}</p>}
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.password}</label>
                        <input 
                            className={classes.formGroupInput}
                            type='password' 
                            placeholder={lang.password} 
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                        />
                        {errors.password && <p className={classes.ınputError}>
                            {errors.password}</p>}
                    </div>
                    <div className={classes.formContentContainer}>
                        <label className={classes.formGroup}>{lang.passwordConfirm}</label>
                        <input 
                            className={classes.formGroupInput}
                            type='password' 
                            placeholder={lang.passwordConfirm} 
                            name="passwordConfirm"
                            onChange={handleChange}
                            value={values.passwordConfirm}
                        />
                        {errors.passwordConfirm && <p className={classes.ınputError}
                        >{errors.passwordConfirm}</p>}
                    </div>
                    
                    <button type="submit" className={classes.formButton} >{lang.signUp}</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
