import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

import { FormFlex, Label, StyledInput, Button } from "./StyledComponents";

const Input = styled(StyledInput)`
    width: 200px;
`;

const LoginCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-top: 15%;
    margin-left: 40%;
    margin-right: 40%;
    padding-top: 0.5rem;
`;

const LoginForm = ({ props, errors, touched }) => {
    //declare an empty obj for easiness
    const loginObj = {
        username: "",
        password: ""
    };

    //declare states and constants
    const [loginValue, setLoginValue] = useState(loginObj);
    const [loginStatus, setLoginStatus] = useState(false);

    //typical handlechange
    const handleChange = e => {
        setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        //all submits refresh the page, prevent that
        e.preventDefault();
        //set editing to true for flavor
        setLoginStatus(true);


  const handleSubmit = e => {
    //all submits refresh the page, prevent that
    e.preventDefault();
    //set editing to true for flavor
    setLoginStatus(true);
    
    axiosWithAuth()
      .post("/auth/login", loginValue)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .then(() => {
      
        setLoginValue(loginObj);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

    return (
        <LoginCard>
            {!loginStatus ? (
                <FormFlex onSubmit={handleSubmit}>
                    <Label htmlFor="username">
                        Login
                        <Input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="username"
                            value={loginValue.login}
                            onChange={handleChange}
                        />
                        {touched.userName && errors.userName && (
                            <p>{errors.userName}</p>
                        )}
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <Input
                            id="password"
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={loginValue.password}
                            onChange={handleChange}
                        />
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                    </Label>

                    <Button type="submit">Sign In</Button>
                </FormFlex>
            ) : (
                <p>Logging in...</p>
            )}
        </LoginCard>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.username || "",
            password: props.password || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Username Required"),
        password: Yup.string().required("Password Required")
    })
})(LoginForm);

export default FormikLoginForm;
