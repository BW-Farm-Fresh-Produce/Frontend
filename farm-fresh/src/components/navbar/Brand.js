import React from "react";
import styled from "styled-components";
import Farm from "../../assets/Farm.png";

const Brand = () => {
  return <Image src={Farm} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
