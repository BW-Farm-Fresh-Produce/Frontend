import React, {useState, useEffect} from "react";
import {withFormik,Form,Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
// Username input
// password input
// city/Location???
// double check password StyledInput
// Account type dropdown
// needs to post to /registration
// option for farm name if farmer vs consumer.

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
const SignUpForm = ({values,errors,touched,status}) => {
    const [user,setUser] = useState()
    useEffect(()=>{
        status && setUser(user => [...user,status]);
    },[status]);
    return(
        <div>
            <FormFlex>
                <Label htmlFor="username">Username:
                    <StyledInput 
                        id="username"
                        type="text"
                        name="username"
                    />
                    {touched.username && errors.username && (
                            <p>{errors.username}</p>
                        )}
                </Label>

                <Label htmlFor="password">Password:
                    <StyledInput 
                        id="password"
                        type="text"
                        name="password"
                    />
                    {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                </Label>
                
                <Label htmlFor="role">Role:
                        <StyledInput 
                            id="role"
                            as="select"
                            name="role"
                            >
                            <option value="farmer">farmer</option>
                            <option value="customer">customer</option>
                        </StyledInput>
                </Label>

                <Label htmlFor="location">Location(for Farmers):
                    <StyledInput 
                        id="location"
                        type="text"
                        name="location"
                    />
                </Label>

                <Label htmlFor="farm_name">Farm Name(for Farmers):
                    <StyledInput 
                        id="farm_name"
                        type="text"
                        name="farm_name"
                    />
                </Label>
                <Button type="submit">Sign Up!</Button>
            </FormFlex>

        </div>
        )
}
const FomrikSignUpForm = withFormik ({
    mapPropsToValues(props){
        return {
            username : props.username || "",
            password : props.password ||"",
            role: props.role ||"",
            location: props.location ||"",
        }
    },
    validationSchema: Yup.object().shape({
    username: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required"),
    
    }),

    handleSubmit(values, {setStatus,resetForm}){
        axios
            .post("https://farm-life.herokuapp.com/auth/register", values)
            .then(res => {
                setStatus(res.data);
                resetForm();
            })
    }
})(SignUpForm);

export default FomrikSignUpForm;