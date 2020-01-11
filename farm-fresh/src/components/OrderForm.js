import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";
import { StyledInput, Button, Error } from "./StyledComponents";

const StyledForm = styled(Form)`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const InputContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 150px 200px;
    grid-column-gap: 15px;
    grid-template-areas:
        "label      input"
        ".          error";
`;

const Label = styled.label`
    grid-area: label;
    align-self: center;
    justify-self: flex-end;
`;

const Input = styled(StyledInput)`
    grid-area: input;
    width: 200px;
`;

const ErrorMsg = styled(Error)`
    grid-area: error;
`;

const OrderForm = ({ values, touched, errors, status, handleChange }) => {
    const [order, setOrder] = useState({});

    useEffect(() => {
        console.log("Order status has changed: ", status);
        status && setOrder(status);
    }, [status]);

    return (
        <StyledForm>
            <InputContainer>
                <Label htmlFor="name">Name: </Label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                />
                {touched.name && errors.name && (
                    <ErrorMsg>{errors.name}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="phone">Phone number: </Label>
                <Input
                    type="text"
                    name="phone"
                    placeholder="(  ) ___ - ____"
                    value={values.phone}
                    onChange={handleChange}
                />
                {touched.phone && errors.phone && (
                    <ErrorMsg>{errors.phone}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="email">E-mail address: </Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                />
                {touched.email && errors.email && (
                    <ErrorMsg>{errors.email}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="streetAddress">Billing address: </Label>
                <Input
                    type="text"
                    name="streetAddress"
                    placeholder="Street address"
                    value={values.streetAddress}
                    onChange={handleChange}
                />
                {touched.streetAddress && errors.streetAddress && (
                    <ErrorMsg>{errors.streetAddress}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="city"></Label>
                <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                />
                {touched.city && errors.city && (
                    <ErrorMsg>{errors.city}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="state"></Label>
                <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={values.state}
                    onChange={handleChange}
                />
                {touched.state && errors.state && (
                    <ErrorMsg>{errors.state}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="zip"></Label>
                <Input
                    type="number"
                    name="zip"
                    placeholder="Zip Code"
                    value={values.zip}
                    onChange={handleChange}
                />
                {touched.zip && errors.zip && <ErrorMsg>{errors.zip}</ErrorMsg>}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="creditCard">Credit Card #: </Label>
                <Input
                    type="number"
                    name="creditCard"
                    placeholder="CC#"
                    value={values.creditCard}
                    onChange={handleChange}
                />
                {touched.creditCard && errors.creditCard && (
                    <ErrorMsg>{errors.creditCard}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="securityCode">Security Code: </Label>
                <Input
                    type="number"
                    name="securityCode"
                    placeholder="###"
                    value={values.securityCode}
                    onChange={handleChange}
                />
                {touched.securityCode && errors.securityCode && (
                    <ErrorMsg>{errors.securityCode}</ErrorMsg>
                )}
            </InputContainer>

            <InputContainer>
                <Label htmlFor="expiration">Expiration Date: </Label>
                <Input
                    type="date"
                    name="expiration"
                    placeholder="MM/YYYY"
                    value={values.expiration}
                    onChange={handleChange}
                />
                {touched.expiration && errors.expiration && (
                    <ErrorMsg>{errors.expiration}</ErrorMsg>
                )}
            </InputContainer>

            <Button type="submit">Place Order</Button>
        </StyledForm>
    );
};

// Regular expression variables for validationSchema

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/g;

const zipCodeRegExp = /^\d{5}(?:[-\s]\d{4})?$/g;

const expirationRegExp = /(?:0[1-9]|1[0-2])([\/-]{1})([2]{1})([0]{1})([2]{1})([0-9]{1})/g;

// regex from top voted answer here: https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
const emailRexExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

// regex from top voted answer here: https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
const creditCardRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g;

const FormikOrderForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            phone: props.phone || "",
            email: props.email || "",
            streetAddress: props.streetAddress || "",
            city: props.city || "",
            state: props.state || "",
            zip: props.zip || "",
            creditCard: props.creditCard || "",
            securityCode: props.securityCode || "",
            expiration: props.expiration || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("**Required"),
        phone: Yup.string()
            .matches(phoneRegExp, "Invalid phone number")
            .required("**Required"),
        email: Yup.string()
            .matches(emailRexExp, "Invalid email address")
            .required("**Required"),
        streetAddress: Yup.string().required("**Required"),
        city: Yup.string().required("**Required"),
        state: Yup.string().required("**Required"),
        zip: Yup.number()
            .integer()
            .positive()
            // .matches(zipCodeRegExp, "Invalid zip code")
            .required("**Required"),
        creditCard: Yup.number()
            .integer()
            .positive()
            // .matches(creditCardRegExp, "Invalid credit card")s
            .required("**Required"),
        securityCode: Yup.number()
            .integer()
            .positive()
            .min(3)
            .max(4)
            .required("**Required"),
        expiration: Yup.string()
            .matches(
                expirationRegExp,
                "Invalid date -- must be formatted as MM/YYYY or MM-YYYY"
            )
            .required("**Required")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting order form: ", values);

        axiosWithAuth()
            .post("farmer/product/orders")
            .then(response => {
                console.log("Order successfully placed: ", response);
                alert("Order successfully placed");
                setStatus(response.data);
                resetForm();
            })
            .catch(error =>
                console.log("There was an error: ", error.response)
            );
    }
})(OrderForm);

export default FormikOrderForm;
