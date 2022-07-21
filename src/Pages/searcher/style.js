import styled from "styled-components";

import { Colors } from "../../styles"

export const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    width: 20%;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    cursor: pointer;
    
    img {
        transition: all .1s ease;
        box-sizing: border-box;
        width: 215px;
        height: 314px;
    }

    :hover {
        img {
            border: 3px solid green;
        }
    }
`;

export const ButtonConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
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

    @media only screen and (max-width: 800px) {
        width: 40%;
    }

    @media only screen and (max-width: 500px) {
        width: 50%;
    }
`;