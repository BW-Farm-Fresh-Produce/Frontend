// Consumer "home" page after logging in
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

import Product from "./Product";
import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SearchBarContainer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 110px auto 0;
    text-align: left;
`;

const SearchIcon = styled(FiSearch)`
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 1.5rem;
`;

const SearchBar = styled.input`
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid gray;
    font-size: 1rem;
`;

export const CardsContainer = styled.div`
    display: grid;
    width: 80%;
    max-width: 960px;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 30px;
    text-align: center;
    margin: 1.5rem auto;

    @media (max-width: 400px) {
        grid-column-gap: unset;
        grid-template-columns: auto;
        width: 90%;
    }
`;

export const ModalBg = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(109, 109, 109, 0.5);
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
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
    position: relative;
`;

export const CloseIcon = styled(IoMdCloseCircleOutline)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 3;
    cursor: pointer;
    font-size: 1.75rem;
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

const Modal = ({ functionality, item, setModalOpen }) => {
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
                <CloseIcon onClick={() => setModalOpen(false)} />
                <FormTitle>
                    {functionality} {item.product_name}
                </FormTitle>
                <ModalGrid>
                    <Label>Product name: </Label>
                    <p>{item.product_name}</p>
                    <Labe htmlFor="quantity">Quantity: </Labe>
                    <Input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        min={0}
                        max={item.quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <Label>Price: </Label>
                    <p>${item.price} / lb</p>
                    <Label>Total cost: </Label>
                    <p>${cost}</p>
                </ModalGrid>
                <Button>{functionality} to Cart</Button>
            </ModalFormContainer>
        </ModalBg>
    );
};

export default props => {
    // set some fake data for now
    const [products, setProducts] = useState([
        {
            product_id: 4321,
            product_name: "Red grapes",
            quantity: 25,
            quantity_type: "lb",
            price: 1.25,
            farmer_id: 1234,
            farm_name: "Old McDonald's",
            address: "100 Farmer Way",
            city: "Farmville",
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
        },
        {
            product_id: 4323,
            product_name: "Apples",
            quantity: 30,
            quantity_type: "bushel",
            price: 3.0,
            farmer_id: 1234,
            farm_name: "Farmer Joe's",
            address: "25 Moomoo Rd",
            city: "Farmington",
            state: "NY",
            zip: 12346
        }
    ]);

    const [addItem, setAddItem] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(products);

    // useEffect(() => {
    //     // API call to get available products
    //     axiosWithAuth()
    //         .get("farmer/product/products")
    //         .then(response => {
    //             console.log("Response: ", response);
    //             setProducts(response.product);
    //             setSearchResults(response.product);
    //         })
    //         .catch(err => console.log("Error fetching products: ", err));
    // }, []);

    // for search bar
    useEffect(() => {
        const results = products.filter(item =>
            item.city.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
    }, [products, searchTerm]);

    const handleSearchBarChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            {modalOpen && (
                <Modal
                    functionality="Add"
                    item={addItem}
                    setModalOpen={setModalOpen}
                />
            )}
            <SearchBarContainer>
                <form>
                    <label htmlFor="city">
                        <SearchIcon />
                    </label>
                    <SearchBar
                        id="city"
                        type="text"
                        name="textfield"
                        placeholder="Search by city"
                        value={searchTerm}
                        onChange={handleSearchBarChange}
                    />
                </form>
            </SearchBarContainer>
            <CardsContainer>
                {searchResults &&
                    searchResults.map(product => (
                        <Product
                            key={product.product_id}
                            product={product}
                            setAddItem={setAddItem}
                            setModalOpen={setModalOpen}
                            modalOpen={modalOpen}
                        />
                    ))}
            </CardsContainer>
        </>
    );
};
// test
