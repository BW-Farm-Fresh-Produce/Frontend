import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { axiosWithAuth } from "axios";
import styled from "styled-components";

import { FormFlex, StyledInput, Label, Button } from "./StyledComponents";

const SignUpCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 500px;
    margin-top: 10%;
    margin-bottom: 20%;
    margin-left: 33%;
`;
const Title = styled.h1`
    font-family: courier;
    text-align: center;
`;

const SignUpForm = ({ errors, touched, props }) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);

        axiosWithAuth()
            .post("/auth/register", user)
            .then(res => {
                console.log("Add User:", res);
                setUser({
                    username: "",
                    password: "",
                    role: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: ""
                });
                props.history.push("/login");
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <SignUpCard onSubmit={handleSubmit}>
            <Title>Sign Up</Title>
            <FormFlex>
                <Label htmlFor="username">
                    Username:
                    <StyledInput
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    {touched.username && errors.username && (
                        <p>{errors.username}</p>
                    )}
                </Label>

                <Label htmlFor="password">
                    Password:
                    <StyledInput
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                </Label>
                <Label htmlFor="passwordConfirm">
                    Confirm Password:
                    <StyledInput
                        type="text"
                        name="passwordConfirm"
                        value={user.password}
                        onChange={handleChange}
                    />
                    {touched.passwordConfirm && errors.passwordConfirm && (
                        <p>Password does not match!!!</p>
                    )}
                </Label>

                <Label htmlFor="role">
                    Role:
                    <StyledInput
                        as="select"
                        name="role"
                        value={user.role}
                        onChange={handleChange}
                    >
                        <option value="farmer">farmer</option>
                        <option value="customer">customer</option>
                    </StyledInput>
                </Label>

                <Label htmlFor="location">
                    {" "}
                    Address:
                    <StyledInput
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                    />
                </Label>
                <Label htmlFor="city">
                    {" "}
                    City:
                    <StyledInput
                        type="text"
                        name="city"
                        value={user.city}
                        onChange={handleChange}
                    />
                </Label>

                <Label htmlFor="state">
                    {" "}
                    State:
                    <StyledInput
                        type="text"
                        name="state"
                        value={user.state}
                        onChange={handleChange}
                    />
                </Label>

                <Label htmlFor="zip">
                    {" "}
                    Zip:
                    <StyledInput
                        type="text"
                        name="zip"
                        value={user.zip}
                        onChange={handleChange}
                    />
                </Label>

                <Button type="submit">Sign Up!</Button>
            </FormFlex>
            <Link to="/login">I already have an account</Link>
        </SignUpCard>
    );
};
const FomrikSignUpForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            role: props.role || "",
            location: props.location || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username Required"),
        password: Yup.string().required("Password Required"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null])
            .required("Password does not match!!!")
    })
})(SignUpForm);

export default FomrikSignUpForm;
