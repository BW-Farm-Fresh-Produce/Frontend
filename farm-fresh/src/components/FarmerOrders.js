import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import OrderCard from "./OrderCard";

const Container = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 100px auto 1.5rem;
`;

const Title = styled.h2`
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 375px);
    grid-gap: 30px;
    margin-top: 1rem;
`;

export default ({ farmer_id }) => {
    // set some fake data for now
    // side note: the backend for the orders wasn't made to handle multiple items in an order..
    const [orders, setOrders] = useState([
        {
            order_id: 1,
            order_name: "Johnny Appleseed",
            items: [
                {
                    product_name: "Red Grapes",
                    quantity: 2,
                    quantity_type: "lb",
                    price: 1.75
                },
                {
                    product_name: "Strawberries",
                    quantity: 1,
                    quantity_type: "lb",
                    price: 2.25
                }
            ],
            farmer_id: 1,
            address: "100 Farmer Way",
            city: "Farmville",
            state: "NY",
            zip: 12345,
            username: "jappleseed"
        },
        {
            order_id: 2,
            order_name: "Bill Gates",
            items: [
                {
                    product_name: "Bananas",
                    quantity: 1,
                    quantity_type: "lb",
                    price: 1.45
                },
                {
                    product_name: "Red Grapes",
                    quantity: 2,
                    quantity_type: "lb",
                    price: 2.25
                },
                {
                    product_name: "Apples",
                    quantity: 1,
                    quantity_type: "bushel",
                    price: 3
                }
            ],
            farmer_id: 1,
            address: "100 Farmer Way",
            city: "Farmville",
            state: "NY",
            zip: 12345,
            username: "bgates"
        }
    ]);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(
    //             `https://farm-life.herokuapp.com/farmer/product/orders/${farmer_id}`
    //         )
    //         .then(response => {
    //             console.log("Response: ", response);
    //             setOrders(response.orders);
    //         })
    //         .catch(err => console.log("Error fetching orders: ", err));
    // }, [farmer_id]);

    return (
        <Container>
            <Title>Orders</Title>
            <StyledLink to="/farmer">Back to Inventory</StyledLink>
            <CardsContainer>
                {orders !== [] &&
                    orders.map(order => (
                        <OrderCard key={order.order_id} order={order} />
                    ))}
            </CardsContainer>
        </Container>
    );
};
