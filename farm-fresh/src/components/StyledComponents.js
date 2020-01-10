import styled from "styled-components";
import { Form, Field } from "formik";

export const FormFlex = styled(Form)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

export const Label = styled.label`
    display: flex
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;
`;

export const StyledInput = styled(Field)`
    width: 350px;
    height: 30px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: inherit;
    font-size: 100%;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
`;

export const Button = styled.button`
    background: #a2df98;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem auto;
    font-family: inherit;

    &:hover {
        background: #6ecd5e;
        color: #ffffff;
    }
`;

// same styling as button tag, but this is a div
export const OtherButton = styled.div`
    background: #a2df98;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem auto;
    font-family: inherit;

    &:hover {
        background: #6ecd5e;
        color: #ffffff;
    }
`;

export const Error = styled.p`
    color: red;
`;
