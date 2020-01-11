import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import FormikOrderForm from "./OrderForm";

const CheckoutContainer = styled.div`
    margin: 1.5rem auto;
    width: 80%;
    max-width: 960px;
    border-radius: 15px;
    border: 1px solid #ffffff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
    text-align: center;
`;

const OrderInfo = styled.section`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const Cart = styled.div`
    width: 50%;
`;

const CartHeaders = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(150px, 200px) 100px 50px;
    grid-column-gap: 15px;
    grid-template-areas: "product       qty      price";
`;

const ProductHeader = styled.h3`
    grid-area: product;
`;

const QtyHeader = styled.h3`
    grid-area: qty;
`;

const PriceHeader = styled.h3`
    grid-area: price;
`;

const ItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(150px, 200px) 100px 50px;
    grid-column-gap: 15px;
    grid-template-areas: "name       qty      price";
`;

const ItemName = styled.p`
    grid-area: name;
`;

const ItemQty = styled.p`
    grid-area: qty;
`;

const ItemPrice = styled.p`
    grid-area: price;
`;

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
        <CheckoutContainer>
            <Title>Review Order</Title>
            <OrderInfo>
                <Cart>
                    <CartHeaders>
                        <ProductHeader>Product</ProductHeader>
                        <QtyHeader>Qty</QtyHeader>
                        <PriceHeader>Price</PriceHeader>
                    </CartHeaders>
                    {cartItems !== [] &&
                        cartItems.map((item, index) => {
                            let total = item.price * item.quantity;
                            return (
                                <ItemContainer key={index}>
                                    <ItemName>{item.product_name}</ItemName>
                                    {/* make quantity type plural when necessary */}
                                    {item.quantity !== 1 ? (
                                        <ItemQty>
                                            {item.quantity} {item.quantity_type}
                                            s
                                        </ItemQty>
                                    ) : (
                                        <ItemPrice>
                                            {item.quantity} {item.quantity_type}
                                        </ItemPrice>
                                    )}
                                    <p>${total}</p>
                                </ItemContainer>
                            );
                        })}
                </Cart>
                <FarmInfo>
                    Farm address here
                    {/* Backend didn't include way to access farm info with the items the consumer ordered*/}
                </FarmInfo>
            </OrderInfo>
            <FormikOrderForm />
        </CheckoutContainer>
    );
};
