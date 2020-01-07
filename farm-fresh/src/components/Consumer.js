// Consumer "home" page after logging in
//

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Product from "./Product";

export const CardsContainer = styled.div`
    display: grid;
    width: calc(100% - 375px);
    max-width: 900px;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 50px;
    text-align: center;
    margin: 0 auto;
`;

export const ModalBg = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(109, 109, 109, 0.5);
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalFormContainer = styled.div`
    background: #ffffff;
    border-radius: 10px;
    width: 40%;
    max-width: 700px;
    min-width: 300px;
    height: auto;
    margin: 0 auto;
`;

export const FormTitle = styled.h3`
    text-align: center;
`;

const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-column-gap: 1rem;
`;

const Label = styled.p`
    justify-self: end;
`;

const Labe = styled.label`
    justify-self: end;
    align-self: center;
`;

const Input = styled.input`
    width: 200px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    font-family: inherit;
    font-size: 100%;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Button = styled.div`
    background: #a2df98;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 150px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
`;

const Modal = ({ functionality, item }) => {
    const [cost, setCost] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let total = quantity * item.price;
        total = total.toFixed(2);
        setCost(total);
    }, [quantity, item.price]);

    return (
        <ModalBg>
            <ModalFormContainer>
                <FormTitle>
                    {functionality} {item.name}
                </FormTitle>
                <ModalGrid>
                    {/* <div> */}
                    <Label>Product name: </Label>
                    <p>{item.name}</p>
                    {/* </div> */}
                    {/* <div> */}
                    <Labe htmlFor="quantity">Quantity: </Labe>
                    <Input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        min={0}
                        max={item.available_quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    {/* </div> */}
                    {/* <div> */}
                    <Label>Price: </Label>
                    <p>${item.price} / lb</p>
                    {/* </div> */}
                    {/* <div> */}
                    <Label>Total cost: </Label>
                    <p>${cost}</p>
                    {/* </div> */}
                </ModalGrid>
                <Button onClick={() => console.log("Clicked Add to Cart")}>
                    {functionality} to Cart
                </Button>
            </ModalFormContainer>
        </ModalBg>
    );
};

export default props => {
    const [cartItems, setCartItems] = useState([]);
    const [addItem, setAddItem] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    // set some fake data for now
    const [products, setProducts] = useState([
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
        },
        {
            product_id: 4323,
            name: "Apples",
            available_quantity: "30 bushels",
            price: 3.0,
            farmer_id: 1234,
            farm: "Farmer Joe's",
            farm_location_street: "25 Moomoo Rd",
            farm_location_city: "Farmington, NY 12346"
        }
    ]);

    // when adding search bar, useEffect dependency will need to be updated so that the visible products change
    useEffect(() => {
        // API call to get available products
        // axios
        //     .get()
        //     .then(response => {
        //         console.log("Response: ", response);
        //     })
        //     .catch(err => console.log("Error: ", err));
    }, []);

    return (
        <>
            {modalOpen && <Modal functionality="Add" item={addItem} />}
            <CardsContainer>
                {products.length !== 0 &&
                    products.map(product => (
                        <Product
                            key={product.product_id}
                            product={product}
                            setAddItem={setAddItem}
                            setModalOpen={setModalOpen}
                            modalOpen={modalOpen}
                            // name={product.name}
                            // available_quantity={product.available_quantity}
                            // price={product.price}
                            // farm={product.farm}
                            // farm_location_street={product.farm_location_street}
                            // farm_location_city={product.farm_location_city}
                        />
                    ))}
            </CardsContainer>
        </>
    );
};
