import React, {useContext} from "react";
import styled from "styled-components";
import Brand from "./Brand";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CartContext from '../../contexts/CartContext';

const NavBar = () => {
  const cart = useContext(CartContext);
  return (
    <>
   <NavStyle>
    <FlexContainer>
      <Brand />
        <Router>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/cart"> Cart </Link>
             {/* <p>{cart.length}</p> */}
          {/* <Link to="/farmer">Farmer</Link> */}
          <Link to="/logout">Logout</Link>
        </NavLinks>
          </Router>
        </FlexContainer>
      </NavStyle>
 </>
  );
};
export default NavBar;

const NavStyle = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #a2df98;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled.nav`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #000000;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
