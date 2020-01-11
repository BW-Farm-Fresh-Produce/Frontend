// Farmer "home" page after logging in

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, Route } from "react-router-dom";

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
import FarmerOrders from "./FarmerOrders";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

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
    justify-content: space-between;

    p {
        cursor: pointer;
    }
`;

const AddItemWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const AddIcon = styled(IoIosAddCircleOutline)`
    cursor: pointer;
    font-size: 1.75rem;
    margin-right: 0.25rem;
`;

const Modal = ({ functionality, item, setModalOpen }) => {
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
                <FormikProductForm {...item} functionality={functionality} />
            </ModalFormContainer>
        </ModalBg>
    );
};

export default () => {
    const [inventory, setInventory] = useState([
        {
            product_id: 4321,
            product_name: "Red grapes",
            quantity: 25,
            quantity_type: "lb",
            price: 1.25,
            farmer_id: 1234,
            farm_name: "Old McDonald's",
            address: "100 Farmer Way",
            city: "Farmville, NY 12345",
            state: "NY",
            zip: 12345
        },
        {
            product_id: 4322,
            product_name: "Strawberries",
            quantity: 20,
            quantity_type: "lb",
            price: 1.0,
            farmer_id: 1234,
            farm_name: "Old McDonald's",
            address: "100 Farmer Way",
            city: "Farmville",
            state: "NY",
            zip: 12345
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editItem, setEditItem] = useState({});
    const [formFunctionality, setFormFunctionality] = useState("Add");

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get("farmer/product")
    //         .then(response => {
    //             console.log("Response: ", response);
    //             setInventory(response.product);
    //         })
    //         .catch(err => console.log("Error fetching inventory: ", err));
    // }, []);

    return (
        <FarmerContainer>
            {modalOpen && (
                <Modal
                    functionality={formFunctionality}
                    item={editItem}
                    productId={editItem.product_id}
                    setModalOpen={setModalOpen}
                />
            )}
            <AddItemContainer>
                <AddItemWrapper>
                    <AddIcon
                        onClick={() => {
                            setModalOpen(!modalOpen);
                            setEditItem({}); // reset editItem
                            setFormFunctionality("Add");
                        }}
                    />
                    <p
                        onClick={() => {
                            setModalOpen(!modalOpen);
                            setEditItem({}); // reset editItem
                            setFormFunctionality("Add");
                        }}
                    >
                        Add item
                    </p>
                </AddItemWrapper>
                <StyledLink to="/farmer/orders">View Orders</StyledLink>
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
                            setFormFunctionality={setFormFunctionality}
                        />
                    ))}
            </CardsContainer>
        </FarmerContainer>
    );
};
