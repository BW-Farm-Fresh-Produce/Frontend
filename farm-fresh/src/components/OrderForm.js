import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

import { Button, Error } from "./ProductForm";

const Input = styled(Field)`
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

const OrderForm = ({ values, touched, errors, status, handleChange }) => {
    const [order, setOrder] = useState({});

    useEffect(() => {
        console.log("Order status has changed: ", status);
        status && setOrder(status);
    }, [status]);

    return (
        <Form>
            <label htmlFor="name">Name: </label>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
            />
            {touched.name && errors.name && <Error>{errors.name}</Error>}

            <label htmlFor="phone">Phone number: </label>
            <Input
                type="text"
                name="phone"
                placeholder="(  ) ___ - ____"
                value={values.phone}
                onChange={handleChange}
            />
            {touched.phone && errors.phone && <Error>{errors.phone}</Error>}

            <label htmlFor="email">E-mail address: </label>
            <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
            />
            {touched.email && errors.email && <Error>{errors.email}</Error>}

            <label htmlFor="streetAddress">Billing address: </label>
            <Input
                type="text"
                name="streetAddress"
                placeholder="Street address"
                value={values.streetAddress}
                onChange={handleChange}
            />
            {touched.streetAddress && errors.streetAddress && (
                <Error>{errors.streetAddress}</Error>
            )}

            <label htmlFor="city"></label>
            <Input
                type="text"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
            />
            {touched.city && errors.city && <Error>{errors.city}</Error>}

            <label htmlFor="state"></label>
            <Input
                type="text"
                name="state"
                placeholder="State"
                value={values.state}
                onChange={handleChange}
            />
            {touched.state && errors.state && <Error>{errors.state}</Error>}

            <label htmlFor="zipCode"></label>
            <Input
                type="number"
                name="zipCode"
                placeholder="Zip Code"
                value={values.zipCode}
                onChange={handleChange}
            />
            {touched.zipCode && errors.zipCode && (
                <Error>{errors.zipCode}</Error>
            )}

            <label htmlFor="creditCard">Credit Card #: </label>
            <Input
                type="number"
                name="creditCard"
                placeholder="CC#"
                value={values.creditCard}
                onChange={handleChange}
            />
            {touched.creditCard && errors.creditCard && (
                <Error>{errors.creditCard}</Error>
            )}

            <label htmlFor="securityCode">Security Code: </label>
            <Input
                type="number"
                name="securityCode"
                placeholder="###"
                value={values.securityCode}
                onChange={handleChange}
            />
            {touched.securityCode && errors.securityCode && (
                <Error>{errors.securityCode}</Error>
            )}

            <label htmlFor="expiration">Expiration Date: </label>
            <Input
                type="date"
                name="expiration"
                placeholder="MM/YYYY"
                value={values.expiration}
                onChange={handleChange}
            />
            {touched.expiration && errors.expiration && (
                <Error>{errors.expiration}</Error>
            )}

            <Button type="submit">Place Order</Button>
        </Form>
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
            zipCode: props.zipCode || 0,
            creditCard: props.creditCard || 0,
            securityCode: props.securityCode || 0,
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
