import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>
                <StyledLink to="/">Sign up</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/login">Login</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/logout">Logout</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/faq">FAQ</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/consumer">Store</StyledLink>
            </li>
            <StyledLink
                    to="/farmer"
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}
                >
                    Sell Inventory
                </StyledLink>
        </ul>
    </div>
);
