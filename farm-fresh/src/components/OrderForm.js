import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

import { Button, Error } from "./ProductForm";

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

const Input = styled(Field)`
    grid-area: input;
    width: 200px;
    height: 30px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: inherit;
    font-size: 100%;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    background: white;
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
                <Label htmlFor="zipCode"></Label>
                <Input
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={values.zipCode}
                    onChange={handleChange}
                />
                {touched.zipCode && errors.zipCode && (
                    <ErrorMsg>{errors.zipCode}</ErrorMsg>
                )}
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

const FormikOrderForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            phone: props.phone || "",
            email: props.email || "",
            streetAddress: props.streetAddress || "",
            city: props.city || "",
            state: props.state || "",
            zipCode: props.zipCode || "",
            creditCard: props.creditCard || "",
            securityCode: props.securityCode || "",
            expiration: props.expiration || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("**Required"),
        phone: Yup.string().required("**Required"),
        email: Yup.string().required("**Required"),
        streetAddress: Yup.string().required("**Required"),
        city: Yup.string().required("**Required"),
        state: Yup.string().required("**Required"),
        zipCode: Yup.number()
            .integer()
            .required("**Required"),
        creditCard: Yup.number()
            .integer()
            .required("**Required"),
        securityCode: Yup.number()
            .integer()
            .required("**Required"),
        expiration: Yup.date().required("**Required")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting order form: ", values);

        // axios
        //     .post("URL", {
        //         headers: {
        //             authorization: "CONSUMER AUTHORIZATION HERE"
        //         },
        //         values
        //     })
        //     .then(response => {
        //         console.log("Order successfully placed: ", response);
        //         alert("Order successfully placed");
        //         setStatus(response.data);
        //         resetForm();
        //     })
        //     .catch(error =>
        //         console.log("There was an error: ", error.response)
        //     );
    }
})(OrderForm);

export default FormikOrderForm;
