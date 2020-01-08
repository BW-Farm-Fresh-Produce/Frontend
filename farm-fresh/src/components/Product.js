import React from "react";
import styled from "styled-components";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const Card = styled.div`
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const AddIcon = styled(IoIosAddCircleOutline)`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.75rem;
    cursor: pointer;
`;

const EditIcon = styled(MdEdit)`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 1.75rem;
    cursor: pointer;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 10px;
    text-align: left;
    line-height: 1.5rem;
    h2,
    p {
        margin: 0;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    line=height: 1;
`;

// const FarmInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     line-height: 1;
//     width: 50%;
// `;

const ProductName = styled.h2`
    font-size: 1.1rem;
`;

// props needed --> product.name, product.available_quantity, product.price, product.farmer__farm_name, product.farmer_farm_location
export default ({
    product,
    setAddItem,
    setEditItem,
    setModalOpen,
    modalOpen
}) => {
    return (
        <Card>
            {setAddItem ? (
                <AddIcon
                    onClick={() => {
                        setAddItem(product);
                        setModalOpen(!modalOpen);
                    }}
                />
            ) : (
                <EditIcon
                    onClick={() => {
                        setEditItem(product);
                        setModalOpen(!modalOpen);
                    }}
                />
            )}
            <ImageWrapper>
                <img alt={product.name} />
            </ImageWrapper>
            <TextContainer>
                <InfoWrapper>
                    <ProductName>{product.name}</ProductName>
                    {product.available_quantity === 1 ? (
                        <p>
                            {product.available_quantity} {product.quantity_type}
                        </p>
                    ) : (
                        <p>
                            {product.available_quantity} {product.quantity_type}
                            s
                        </p>
                    )}
                    <p>
                        ${product.price} / {product.quantity_type}
                    </p>
                </InfoWrapper>
                <InfoWrapper>
                    <p>{product.farm}</p>
                    <p>{product.farm_location_street}</p>
                    <p>{product.farm_location_city}</p>
                </InfoWrapper>
            </TextContainer>
        </Card>
    );
};
