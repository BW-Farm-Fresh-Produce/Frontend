import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Card } from "./StyledComponents";

const StyledCard = styled(Card)`
    padding: 0 0.5rem 0.5rem;
`;

const OrderName = styled.h3`
    text-align: center;
`;

const OrderId = styled.p`
    text-align: center;
    margin-top: 0;
`;

const OrderInfoContainer = styled.div``;

const CartHeaders = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(125px, 175px) 75px 75px;
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
    grid-template-columns: minmax(125px, 175px) 75px 75px;
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

const ItemRow = ({ item, index }) => {
    let total = item.price * item.quantity;

    return (
        <ItemContainer>
            <ItemName>{item.product_name}</ItemName>
            {/* make quantity type plural when necessary */}
            {item.quantity !== 1 ? (
                <ItemQty>
                    {item.quantity} {item.quantity_type}s
                </ItemQty>
            ) : (
                <ItemQty>
                    {item.quantity} {item.quantity_type}
                </ItemQty>
            )}
            <ItemPrice>${total}</ItemPrice>
        </ItemContainer>
    );
};

export default ({ order }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cost = 0;

        order.items.forEach(item => {
            let itemTotal = item.price * item.quantity;
            cost += itemTotal;
        });

        setTotal(cost);
    }, [order.items]);

    return (
        <StyledCard>
            <OrderName>{order.order_name}</OrderName>
            <OrderId>Order #{order.order_id}</OrderId>
            <OrderInfoContainer>
                <CartHeaders>
                    <ProductHeader>Product</ProductHeader>
                    <QtyHeader>Qty</QtyHeader>
                    <PriceHeader>Price</PriceHeader>
                </CartHeaders>
                {order.items !== [] ? (
                    order.items.map((item, index) => (
                        <ItemRow item={item} key={index} />
                    ))
                ) : (
                    <h2>You currently have no orders</h2>
                )}
                <h3>Total: ${total}</h3>
            </OrderInfoContainer>
        </StyledCard>
    );
};
