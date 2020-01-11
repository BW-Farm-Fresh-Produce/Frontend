import React from "react";
import styled from "styled-components";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { Card } from "./StyledComponents";

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

const TextContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 10px;
    text-align: left;
    line-height: 1.5rem;
    margin-top: calc(1.75rem + 10px);

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

const ProductName = styled.h2`
    font-size: 1.1rem;
`;

// props needed --> product.product_name, product.quantity, product.price, product.farm_name, product.address, product.city, product.state, product.zip
export default ({
    product,
    setAddItem,
    setEditItem,
    setModalOpen,
    modalOpen,
    setFormFunctionality
}) => {
    return (
        <Card>
            {setAddItem ? (
                <AddIcon
                    onClick={() => {
                        setAddItem(product);
                        setModalOpen(!modalOpen);
                        setFormFunctionality("Add");
                    }}
                />
            ) : (
                <EditIcon
                    onClick={() => {
                        setEditItem(product);
                        setModalOpen(!modalOpen);
                        setFormFunctionality("Update");
                    }}
                />
            )}
            <TextContainer>
                <InfoWrapper>
                    <ProductName>{product.product_name}</ProductName>
                    {product.quantity === 1 ? (
                        <p>
                            {product.quantity} {product.quantity_type}
                        </p>
                    ) : (
                        <p>
                            {product.quantity} {product.quantity_type}s
                        </p>
                    )}
                    <p>
                        ${product.price} / {product.quantity_type}
                    </p>
                </InfoWrapper>
                <InfoWrapper>
                    <p>{product.farm_name}</p>
                    <p>{product.address}</p>
                    <p>
                        {product.city}, {product.state} {product.zip}
                    </p>
                </InfoWrapper>
            </TextContainer>
        </Card>
    );
};
