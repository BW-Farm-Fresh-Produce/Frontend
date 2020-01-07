// Farmer "home" page after logging in

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Product from "./Product";
import {
    CardsContainer,
    ModalBg,
    ModalFormContainer,
    FormTitle
} from "./Consumer";
import FormikProductForm from "./ProductForm";

const Modal = ({ functionality, item }) => {
    return (
        <ModalBg>
            <ModalFormContainer>
                <FormTitle>
                    {functionality} {item.name}{" "}
                </FormTitle>
                <FormikProductForm />
            </ModalFormContainer>
        </ModalBg>
    );
};

export default () => {
    const [inventory, setInventory] = useState([
        {
            product_id: 4321,
            name: "Red grapes",
            available_quantity: "25lbs",
            price: 1.25,
            farmer_id: 1234,
            farm: "Old McDonald's",
            farm_location_street: "100 Farmer Way",
            farm_location_city: "Farmville, NY 12345"
        },
        {
            product_id: 4322,
            name: "Strawberries",
            available_quantity: "20lbs",
            price: 1.0,
            farmer_id: 1234,
            farm: "Old McDonald's",
            farm_location_street: "100 Farmer Way",
            farm_location_city: "Farmville, NY 12345"
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({});

    // when adding search bar, useEffect dependency will need to be updated so that the visible products change
    // useEffect(() => {
    //     axios
    //         .get()
    //         .then(response => console.log("Response: ", response))
    //         .catch(err => console.log("Error: ", err));
    // }, [])

    return (
        <>
            {modalOpen && <Modal functionality="Edit" item={editItem} />}
            <CardsContainer>
                {inventory.length !== 0 &&
                    inventory.map(product => (
                        <Product
                            key={product.product_id}
                            product={product}
                            setEditItem={setEditItem}
                            setModalOpen={setModalOpen}
                            modalOpen={modalOpen}
                        />
                    ))}
            </CardsContainer>
        </>
    );
};
