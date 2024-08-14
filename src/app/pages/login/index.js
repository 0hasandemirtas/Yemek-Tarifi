import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';
import {
    userAuth
} from '../../context/userContext';
import {
    useFormik
} from 'formik';
import axios from 'axios';
import {
    useNavigate 
} from 'react-router-dom';

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
    const {
        user,setUser,setIsLogin
    }=userAuth();
    const navigate= useNavigate();
    const {
        values,errors ,handleChange,handleSubmit
    }=useFormik({
        initialValues:{
            userName:"",
            password:"", 
        },
        onSubmit:async(values,bag)=>{
            await axios
                .post("http://localhost:3001/api/users/login",{
                    userName:values.userName,
                    password:values.password,
                })
                .then((response)=>{
                    setUser(response);
                    setIsLogin(true);
                    console.log(response);
                    navigate("/home");
                })
                .catch((err)=>{
                    alert(err.response.data.message);
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
                    </div>
                    <button type="submit" className={classes.formButton} >{lang.signIn}</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
