import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 1rem;
`;

const Label = styled.label`
    justify-self: end;
    align-self: center;
`;

const Input = styled(Field)`
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

// for Farmers to add/edit an item
const ProductForm = ({
    values,
    touched,
    errors,
    status,
    handleChange,
    handleBlur,
    handleSubmit
}) => {
    // for testing to see if the form is working
    const [products, setProducts] = useState([]);

    console.log("errors:", errors);
    console.log("touched:", touched);

    useEffect(() => {
        console.log("status has changed:", status);
        status && setProducts(products => [...products, status]);
    }, [status]);

    useEffect(() => {
        {
            /* just to check if it's working */
        }
        {
            products.map(item => {
                return (
                    <ul key={item.id}>
                        <li>Product name: {item.name}</li>
                        <li>Available quantity: {item.quantity}</li>
                        <li>Price: {item.price}</li>
                    </ul>
                );
            });
        }
    }, [products]);

    return (
        <Form>
            <FormGrid>
                <Label htmlFor="name">Product name: </Label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Product name"
                />{" "}
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Label htmlFor="quantity">Available quantity: </Label>
                <Input
                    type="number"
                    name="quantity"
                    placeholder="Max available quantity"
                />{" "}
                {touched.quantity && errors.quantity && (
                    <p>{errors.quantity}</p>
                )}
                <Label htmlFor="price">Price: </Label>
                <Input type="number" name="price" placeholder="Price" />{" "}
                {touched.price && errors.price && <p>{errors.price}</p>}
            </FormGrid>
            <Button type="submit">Add item</Button>
        </Form>
    );
};

const FormikProductForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            quantity: props.quantity || "",
            price: props.price || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required"),
        quantity: Yup.number()
            .positive()
            .required("Positive quantity is required"),
        price: Yup.number()
            .positive()
            .required("Price greater than $0 is required")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting form: ", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log("Item successfully submitted: ", res);
                alert("Invenvoty successfully updated");
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log("There was an error: ", err.response));
    }
})(ProductForm);

export default FormikProductForm;
