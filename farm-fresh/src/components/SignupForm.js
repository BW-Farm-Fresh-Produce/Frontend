import React, {useState, useEffect} from "react";
import {withFormik,Form,Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
// Username input
// password input
// city/Location???
// double check password input
// Account type dropdown
// needs to post to /registration
// option for farm name if farmer vs consumer.

const SignUpForm = ({values,errors,touched,status}) => {
    const [user,setUser] = useState()
    useEffect(()=>{
        status && setUser(user => [...user,status]);
    },[status]);
    return(
        <div>
            <Form>
                <label>Username:
                    <Field 
                        id="userame"
                        type="text"
                        name="username"
                    />
                </label>

                <label>Password:
                    <Field 
                        id="password"
                        type="text"
                        name="password"
                    />
                </label>
                
                <label>Role:
                        <Field 
                            id="role"
                            as="select"
                            name = "role"
                            >
                            <option value="farmer">farmer</option>
                            <option value="customer">customer</option>
                        </Field>
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                </label>

                <label>location(for Farmers):
                    <Field 
                        id="location"
                        type="text"
                        name="location"
                    />
                </label>

                <label>farm name(for Farmers):
                    <Field 
                        id="farm_name"
                        type="text"
                        name="farm_name"
                    />
                </label>

            </Form>

        </div>
        )
}
const FomrikSignUpForm = withFormik ({
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

    handleSubmit(values, {setStatus,resetForm}){
        axios
            .post("https://farm-life.herokuapp.com/auth/login", values)
            .then(res => {
                setStatus(res.data);
                resetForm();
            })
    }
})(SignUpForm);