import React, {useState, useEffect} from "react";
import {withFormik,Form,Field} from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';
// const LoginForm = ({values,errors,touched,status}) => {
    
//     const [user,setUser] =useState([])
//     // local stat that holds the succesful form Submission.
//     useEffect(()=>{
//         status && setUser(user => [...user,status]);
//     },[status]);


export const login = styled.div`
    margin: 0 auto;
    margin-top: 5 rem;
`;

const LoginForm =({props, values,errors,touched,status}) => {
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
    
    axiosWithAuth()
      .post("/login", loginValue)
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

    return(
        <section className="login">
          {!loginStatus ? (
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                    <Field
                        id="userName"
                        type="text"
                        name="userName"
                        placeholder="username"
                        value={loginValue.login}
                        onChange={handleChange}

                    />
                    {touched.userName && errors.userName && (
                        <p>{errors.userName}</p>
                    )}
                <label htmlFor="password">Password:</label>
                    <Field
                        id="password"
                        type ="text"
                        name = "password"
                        placeholder = "Password"
                        value={loginValue.password}
                        onChange={handleChange}
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
              
                
                <button type="submit">Login</button>
            </Form>
          ) : (
            <p>Logging in...</p>
          )}
        </section>
    );
};

const FomrikLoginForm = withFormik ({
    mapPropsToValues(props){
        return {
            name : props.userName || "",
            password : props.password ||"",
        }
    },
    validationSchema: Yup.object().shape({
    name: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required")
    }),

  })(LoginForm);

export default FomrikLoginForm;
