// Consumer "home" page after logging in
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Product from "./Product";

const CardsContainer = styled.div`
    display: grid;
    width: calc(100% - 375px);
    max-width: 900px;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 50px;
    text-align: center;
    margin: 0 auto;
    margin-top:150px;
`;

export default props => {
    // set some fake data for now
    const [products, setProducts] = useState([
        {
            product_id: 4321,
            name: "Red grapes",
            available_quantity: "25lbs",
            price: "$1.25 / lb",
            farmer_id: 1234,
            farm: "Old McDonald's",
            farm_location_street: "100 Farmer Way",
            farm_location_city: "Farmville, NY 12345"
        },
        {
            product_id: 4322,
            name: "Strawberries",
            available_quantity: "20lbs",
            price: "$1.00 / lb",
            farmer_id: 1234,
            farm: "Old McDonald's",
            farm_location_street: "100 Farmer Way",
            farm_location_city: "Farmville, NY 12345"
        },
        {
            product_id: 4323,
            name: "Apples",
            available_quantity: "30 bushels",
            price: "$3.00 / bushel",
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
        <CardsContainer>
            {products.length !== 0 &&
                products.map(product => (
                    <Product
                     
                        key={product.product_id}
                        name={product.name}
                        available_quantity={product.available_quantity}
                        price={product.price}
                        farm={product.farm}
                        farm_location_street={product.farm_location_street}
                        farm_location_city={product.farm_location_city}
                    />
                ))}
        </CardsContainer>
    );
};