import styled from "styled-components";

import { Colors } from "../../styles"

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    input[type=submit] {
        cursor: pointer;
        transition: all .5s ease;

        &:hover {
            background-color: ${Colors.color1};
            color: ${Colors.color2};
        }
    }

`;

export const Input = styled.input`
    width: 20%;
    height: 40px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    font-size: .8em;
    margin: 10px 0 10px 15px;
    box-sizing: border-box;

    &:focus {
        border: 3px solid #3d3d72;
        transition: none;
    }

    @media only screen and (max-width: 800px) {
        width: 40%;
    }

    @media only screen and (max-width: 500px) {
        width: 50%;
    }
`;

export const CardGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 1rem;
    width: 85%;
    margin-top: 2rem;
`;

export const Card = styled.div`
    width: 20%;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    transition: all .1s ease;
    
    img {
        width: 215px;
        height: 314px;
    }

    &:hover, &:focus {
        transform: scale(1.1);
        outline: none;
    }
`;

export const ButtonConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
`;