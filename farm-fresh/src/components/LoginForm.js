
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
import styled from "styled-components"

const StyledInput = styled(Field)`
    width: 200px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    font-family: inherit;
    font-size: 100%;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
`;
const Button = styled.button`
    background: #a2df98;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem auto;
`;
const FormFlex = styled.form`
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-content:center
`;

const Label = styled.label`
    display:flex
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;
`;

const LoginCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    margin-top:50%;
    margin-left:40%;
    margin-right:40%;
`;
const LoginForm = ({values,errors,touched,status}) => {
    console.log(values)
    console.log(errors)
    console.log(status)
    const [user,setUser] =useState([])
    // local stat that holds the succesful form Submission.
    useEffect(()=>{
        status && setUser(user => [...user,status]);
        
    },[status]);

    return (
        <LoginCard>
            <FormFlex>
                <Label htmlFor="username"> 
                Login
                    <StyledInput
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                    />
                    {touched.userName && errors.userName && (
                        <p>{errors.userName}</p>
                    )}
                </Label>
                <Label htmlFor="password">
                    Password
                    <StyledInput
                        id="password"
                        type ="text"
                        name = "password"
                        placeholder = "Password"
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                </Label>
                
                <Button type ="submit">Sign In</Button>
            </FormFlex>
        </LoginCard>
    );
};

const FomrikLoginForm = withFormik ({
    mapPropsToValues(props){
        return {
            name : props.username || "",
            password : props.password ||"",
        }
    },
    validationSchema: Yup.object().shape({
    name: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required")
    }),

    handleSubmit(values, {setStatus,resetForm}){
        axios
            .post("https://farm-life.herokuapp.com/auth/login", values)
            .then(res => {
                setStatus(res.data);
                resetForm();
            })
            
    }
    
  })(LoginForm);


  // Needs Encryption
// Username
// Password
// Sign in button

// const LoginForm = () => {
//   return (
//     <h1> Login Page</h1>
//   )
// }

export default FomrikLoginForm;
