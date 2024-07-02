import React from 'react'
import useStyles from './stylesheet'
const Login=()=> {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.formContainer} >
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Email</label>
            <input className={classes.formGroupInput}type='email'placeholder='E-mail'/>
          </div>
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Password</label>
            <input className={classes.formGroupInput}type='password' placeholder='Password'/>
          </div>
          <button className={classes.formButton} >Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Login