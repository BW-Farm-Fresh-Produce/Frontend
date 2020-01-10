import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import {
    Label,
    StyledInput,
    Button,
    OtherButton,
    Error
} from "./StyledComponents";

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 1rem;
`;

const ProductLabel = styled(Label)`
    justify-self: end;
    align-self: start;
`;

const Input = styled(StyledInput)`
    width: 200px;
    margin-left: ${props => (props.isPrice ? "0.5rem" : "1rem")};
    margin-top: 0;
    margin-bottom: 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 75%;
`;

// for Farmers to add/edit an item
const ProductForm = ({
    productId,
    values,
    touched,
    errors,
    status,
    handleChange
    // handleBlur,
    // handleSubmit
}) => {
    // for testing to see if the form is working
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        quantity: 0,
        quantity_unit: "",
        price: 0
    });

    const handleDelete = ({ product_id }) => {
        // needs to delete item from database
        axiosWithAuth()
            .delete(
                `https://farm-life.herokuapp.com/farmer/product/${product_id}`
            )
            .then(response => console.log("Delete response: ", response))
            .catch(error => console.log("Error deleting item: ", error));
    };

    console.log("errors:", errors);
    console.log("touched:", touched);

    useEffect(() => {
        console.log("status has changed:", status);
        status && setProducts(products => [...products, status]);
    }, [status]);

    useEffect(() => {
        // just to check if it's working
        products.map(item => {
            return (
                <ul key={item.id}>
                    <li>Product name: {item.name}</li>
                    <li>
                        Available quantity: {item.quantity}
                        {item.quantity_unit}
                    </li>
                    <li>Price: {item.price}</li>
                </ul>
            );
        });
    }, [products]);

    return (
        <Form>
            <FormGrid>
                <ProductLabel htmlFor="name">Product name: </ProductLabel>
                <div>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Product name"
                        value={values.name}
                        onChange={handleChange}
                    />{" "}
                    {touched.name && errors.name && (
                        <Error>{errors.name}</Error>
                    )}
                </div>
                <ProductLabel htmlFor="quantity">
                    Available quantity:{" "}
                </ProductLabel>
                <div>
                    <Input
                        type="number"
                        name="quantity"
                        placeholder="Max available quantity"
                        value={values.quantity}
                        onChange={handleChange}
                    />{" "}
                    {touched.quantity && errors.quantity && (
                        <Error>{errors.quantity}</Error>
                    )}
                </div>
                <ProductLabel htmlFor="quantity_unit">Unit: </ProductLabel>
                <div>
                    <Input
                        as="select"
                        name="quantity_unit"
                        onChange={handleChange}
                    >
                        <option disabled>Choose a unit</option>
                        <option value="lb">lb</option>
                        <option value="quart">quart</option>
                        <option value="pint">pint</option>
                        <option value="gallon">gallon</option>
                        <option value="peck">peck</option>
                        <option value="bushel">bushel</option>
                    </Input>
                    {touched.quantity_unit && errors.quantity_unit && (
                        <Error>{errors.quantity_unit}</Error>
                    )}
                </div>
                <ProductLabel htmlFor="price">Price: </ProductLabel>
                <div>
                    $
                    <Input
                        isPrice={true}
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={values.price}
                        onChange={handleChange}
                    />{" "}
                    / {values.quantity_unit}
                    {touched.price && errors.price && (
                        <Error>{errors.price}</Error>
                    )}
                </div>
            </FormGrid>
            <ButtonContainer>
                <OtherButton onClick={() => handleDelete(productId)}>
                    Delete item
                </OtherButton>
                <Button type="submit">Update inventory</Button>
            </ButtonContainer>
        </Form>
    );
};

const FormikProductForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            quantity: props.quantity || 0,
            quantity_unit: props.quantity_unit || "unit",
            price: props.price || 0
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("**Required"),
        quantity: Yup.number("Quantity must be a number")
            .positive("Quantity must be greater than zero")
            .required("**Required"),
        quantity_unit: Yup.string().required("**Required"),
        price: Yup.number("Price must be a number")
            .positive("Price must be greater than zero")
            .required("**Required")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log("Submitting form: ", values);
        // setProducts(...products, product);

        // axios
        //     .post(
        //         "https://reqres.in/api/users/",
        //         {
        //             headers: {
        //                 authorization: "FARMER AUTHORIZATION HERE",
        //                 "Content-type": "application/json"
        //             }
        //         },
        //         values
        //     )
        //     .then(res => {
        //         console.log("Item successfully submitted: ", res);
        //         alert("Inventory successfully updated");
        //         setStatus(res.data);
        //         resetForm();
        //     })
        //     .catch(err => console.log("There was an error: ", err.response));
    }
})(ProductForm);

export default FormikProductForm;
