import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const OrderForm = ({ values, touched, errors, status, handleChange }) => {
    return (
        <div>
            <h2>Review Order</h2>
            <section>
                <div>Cart items here</div>
                <div>Farm info</div>
            </section>
            <Form>
                <label htmlFor="name">Name: </label>
                <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}

                <label htmlFor="phone">Phone number: </label>
                <Field
                    type="text"
                    name="phone"
                    placeholder="(  ) ___ - ____"
                    value={values.phone}
                    onChange={handleChange}
                />
                {touched.phone && errors.phone && <Error>{errors.phone}</Error>}

                <label htmlFor="email">E-mail address: </label>
                <Field
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}

                <label htmlFor="streetAddress">Billing address: </label>
                <Field
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
                <Field
                    type="text"
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                />
                {touched.city && errors.city && <Error>{errors.city}</Error>}

                <label htmlFor="state"></label>
                <Field
                    type="text"
                    name="state"
                    placeholder="State"
                    value={values.state}
                    onChange={handleChange}
                />
                {touched.state && errors.state && <Error>{errors.state}</Error>}

                <label htmlFor="zipCode"></label>
                <Field
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
                <Field
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
                <Field
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
                <Field
                    type="date"
                    name="expiration"
                    placeholder="MM/YYYY"
                    value={values.expiration}
                    onChange={handleChange}
                />
                {touched.expiration && errors.expiration && (
                    <Error>{errors.expiration}</Error>
                )}

                <button type="submit">Place Order</button>
            </Form>
        </div>
    );
};

const FormikOrderForm = withFormik(
    {
        mapPropsToValues(props) {
            return {
                name: props.name || "",
                phone: props.phone || "",
                email: props.email || "",
                streetAddress: props.streetAddress || "",
                city: props.city || "",
                state: props.state || "",
                zipCode: props.zipCode || 00000,
                creditCard: props.creditCard || 0000000000000000,
                securityCode: props.securityCode || 0000,
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
            zipCode: Yup.integer().required("**Required"),
            creditCard: Yup.integer().required("**Required"),
            securityCode: Yup.integer().required("**Required"),
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
    }(OrderForm)
);

export default FormikOrderForm;
