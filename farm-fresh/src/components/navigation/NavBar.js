import React, {useContext} from "react";
import styled from "styled-components";
import Farm from "../../assets/Farm.png";


const NavBar = () => {
  return (
    <>
   <NavStyle>
    <FlexContainer>
    <Image src={Farm} alt="Company Logo" />
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
const Image = styled.img`
  height: 100%;
  margin-left: 90%;
  position: right;
`

