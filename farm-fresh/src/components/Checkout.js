import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import FormikOrderForm from "./OrderForm";

const Cart = styled.div``;

const ItemContainer = styled.div``;

const FarmInfo = styled.div``;

export default () => {
    // fake data for now since database is empty
    const [cartItems, setCartItems] = useState([
        {
            item_name: "Strawberries",
            quantity: 4,
            quantity_type: "lb",
            price: 2.25
        },
        {
            item_name: "Apples",
            quantity: 2,
            quantity_type: "bushel",
            price: 4.5
        },
        {
            item_name: "Grapes",
            quantity: 1.5,
            quantity_type: "lb",
            price: 1.75
        }
    ]);

    // useEffect(() => {
    //     axios
    //         .get("https://farm-life.herokuapp.com/cart/items", {
    //             headers: {
    //                 authorization: "CONSUMER AUTHORIZATION HERE"
    //             }
    //         })
    //         .then(response => {
    //             console.log("Successfully retrieved Cart: ", response);
    //             setCartItems(response.items);
    //         })
    //         .catch(err => console.log("There was an error: ", err));
    // }, [cartItems]);

    return (
        <div>
            <h2>Review Order</h2>
            <section>
                <Cart>
                    {cartItems !== [] &&
                        cartItems.map((item, index) => {
                            let total = item.price * item.quantity;
                            return (
                                <ItemContainer key={index}>
                                    <p>{item.item_name}</p>
                                    {/* make quantity type plural when necessary */}
                                    {item.quantity !== 1 ? (
                                        <p>
                                            {item.quantity}
                                            {item.quantity_type}
                                        </p>
                                    ) : (
                                        <p>
                                            {item.quantity}
                                            {item.quantity_type}s
                                        </p>
                                    )}
                                    <p>${total}</p>
                                </ItemContainer>
                            );
                        })}
                </Cart>
                <FarmInfo>
                    {/* ASK KIM IF PRODUCTS HAVE ID'S TIED TO THEIR FARMS --> WOULD LIKE TO PUT FARM NAME AND ADDRESS ON THE REVIEW ORDER/CHECKOUT FORM PAGE */}
                </FarmInfo>
            </section>
            <FormikOrderForm />
        </div>
    );
};
