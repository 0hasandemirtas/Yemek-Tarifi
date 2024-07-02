import React from 'react'
import useStyles from './stylesheet'

const Register=()=> {
  const classes=useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.formContainer} >
          
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Your Name</label>
            <input className={classes.formGroupInput}type='firstname' placeholder='Your name'/>
          </div>
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Last Name</label>
            <input className={classes.formGroupInput}type='lastname' placeholder='Your last name'/>
          </div>
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Email</label>
            <input className={classes.formGroupInput}type='email'placeholder='E-mail'/>
          </div>
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Password</label>
            <input className={classes.formGroupInput}type='password' placeholder='Password'/>
          </div>
          <div className={classes.formContentContainer}>
            <label className={classes.formGroup}>Confirm Password</label>
            <input className={classes.formGroupInput}type='password' placeholder='Password'/>
          </div>
          <div className={classes.formContentContainer}>
            
            <div className={classes.formGroupRadio}>
                <label className={classes.formGroupRadioLabel} >Gender</label>
                <div>
                  <div>
                    <input className={classes.formInput} name='gender' type='radio' />Male
                  </div>
                  <div>
                    <input className={classes.formInput} name='gender' type='radio' />Female
                  </div>
                </div>
            </div>
          </div>
          <button className={classes.formButton} >Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Register