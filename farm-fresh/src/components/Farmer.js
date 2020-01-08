// Farmer "home" page after logging in

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IoIosAddCircleOutline } from "react-icons/io";
import Product from "./Product";
import {
    CardsContainer,
    ModalBg,
    ModalFormContainer,
    FormTitle
} from "./Consumer";
import FormikProductForm from "./ProductForm";

const AddIcon = styled(IoIosAddCircleOutline)`
    cursor: pointer;
    font-size: 1.75rem;
`;

const Modal = ({ functionality, item, productId }) => {
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

    // useEffect(() => {
    //     axios
    //         .get("https://farm-life.herokuapp.com/farmer/product", {
    //             headers: {
    //                 authorization: "AUTHORIZATION HERE"
    //             }
    //         })
    //         .then(response => {
    //             console.log("Response: ", response);
    //             setInventory(response.product);
    //         })
    //         .catch(err => console.log("Error: ", err));
    // }, []);

    return (
        <div>
            {modalOpen && (
                <Modal
                    functionality="Update"
                    item={editItem}
                    productId={editItem.product_id}
                />
            )}
            <AddIcon
                onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditItem({ name: "inventory" }); // work around to be able to reuse Modal component
                }}
            />
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
        </div>
    );
};
