// Farmer "home" page after logging in

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IoIosAddCircleOutline } from "react-icons/io";
import Product from "./Product";
import {
    CardsContainer,
    ModalBg,
    ModalFormContainer,
    CloseIcon,
    FormTitle
} from "./Consumer";
import FormikProductForm from "./ProductForm";

const FarmerContainer = styled.div`
    margin-top: 100px;
`;

const AddItemContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    p {
        cursor: pointer;
    }
`;

const AddIcon = styled(IoIosAddCircleOutline)`
    cursor: pointer;
    font-size: 1.75rem;
    margin-right: 0.25rem;
`;

const Modal = ({ functionality, item, productId, setModalOpen }) => {
    return (
        <ModalBg>
            <ModalFormContainer>
                <CloseIcon onClick={() => setModalOpen(false)} />
                {item.name ? (
                    <FormTitle>
                        {functionality} {item.name}{" "}
                    </FormTitle>
                ) : (
                    <FormTitle>{functionality} inventory </FormTitle>
                )}
                <FormikProductForm {...item} />
            </ModalFormContainer>
        </ModalBg>
    );
};

export default () => {
    const [inventory, setInventory] = useState([
        {
            product_id: 4321,
            name: "Red grapes",
            quantity: 25,
            quantity_unit: "lb",
            price: 1.25,
            farmer_id: 1234,
            farm: "Old McDonald's",
            farm_location_street: "100 Farmer Way",
            farm_location_city: "Farmville, NY 12345"
        },
        {
            product_id: 4322,
            name: "Strawberries",
            quantity: 20,
            quantity_unit: "lb",
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
        <FarmerContainer>
            {modalOpen && (
                <Modal
                    functionality="Update"
                    item={editItem}
                    productId={editItem.product_id}
                    setModalOpen={setModalOpen}
                />
            )}
            <AddItemContainer>
                <AddIcon
                    onClick={() => {
                        setModalOpen(!modalOpen);
                        setEditItem({}); // reset editItem
                    }}
                />
                <p
                    onClick={() => {
                        setModalOpen(!modalOpen);
                        setEditItem({}); // reset editItem
                    }}
                >
                    Add item
                </p>
            </AddItemContainer>
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
        </FarmerContainer>
    );
};
