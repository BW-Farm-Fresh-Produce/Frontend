
// Needs Encryption - 
// Get api name for login from Kim current default (/login)
// import {axiosWithAuth} from '../utils/axiosWithAuth';
//  login = e => {
//    e.preventDefault();
//     axiosWithAuth().post("/login", ) //pass in credintial state 
//             .then(res =>{
//               localStorage.setItem('token', res.data.payload);})
//             .catch(err => console.log(err))}





import React, {useState, useEffect} from "react";
import {withFormik,Form,Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({values,errors,touched,status}) => {

    const [user,setUser] =useState([])
    // local stat that holds the succesful form Submission.
    useEffect(()=>{
        status && setUser(user => [...user,status]);
    },[status]);

    return (
        <div>
            <Form>
                <label htmlFor="userName"> 
                Login
                    <Field
                        id="userName"
                        type="text"
                        name="userName"
                        placeholder="username"
                    />
                </label>
                <label>
                    Password
                    <Field 
                        id="password"
                        type ="text"
                        name = "password"
                        placeholder = "Password"
                    />
                </label>
            </Form>
        </div>
    );
};

const FomrikLoginForm = withFormik ({

})
// Needs Encryption

// Username
// Password
// Sign in button

const LoginForm = () => {
  return (
    <h1> Login Page</h1>
  )
}

export default LoginForm;