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