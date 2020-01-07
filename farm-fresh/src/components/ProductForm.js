import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

    return (
        <div>
            <Form>
                <label htmlFor="name">Product name: </label>
                <Field
                    type="text"
                    name="name"
                    placeholder="Product name"
                />{" "}
                {touched.name && errors.name && <p>{errors.name}</p>}
                <label htmlFor="quantity">Available quantity: </label>
                <Field
                    type="number"
                    name="quantity"
                    placeholder="Max available quantity"
                />{" "}
                {touched.quantity && errors.quantity && (
                    <p>{errors.quantity}</p>
                )}
                <label htmlFor="price">Price </label>
                <Field type="number" name="price" placeholder="Price" />{" "}
                {touched.price && errors.price && <p>{errors.price}</p>}
                <button type="submit">Add item</button>
            </Form>

            {/* just to check if it's working */}
            {products.map(item => {
                return (
                    <ul key={item.id}>
                        <li>Product name: {item.name}</li>
                        <li>Available quantity: {item.quantity}</li>
                        <li>Price: {item.price}</li>
                    </ul>
                );
            })}
        </div>
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
