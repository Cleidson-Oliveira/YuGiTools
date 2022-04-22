import styled from "styled-components";

import { Colors } from "../../styles"

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    padding: 20px 10px 5px;
`;

export const CardItem = styled.li`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    list-style: none;
    padding-bottom: 5px;
    border-bottom: 1px solid black;

    & div {
        display: flex;
        align-items: flex-end;
    }
    
    & :nth-child(1){
        grid-column: 1 / 5;
        justify-content: flex-start;
    }
    & :nth-child(2){
        grid-column: 5 / 7;
        justify-content: flex-end;
    }
    & :nth-child(3){
        grid-column: 7 / 9;
        justify-content: center;
    }

    & p {
        text-transform: uppercase;
    }
`;

export const Indicator = styled.div`
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 50px;
    height: 45px;
    position: relative;
    margin-left: 5px;

    p {
        position: absolute;
        bottom: 6px;
        right: 9px;
        color: ${Colors.color1};
        font-size: .8em;
    }
`;

export const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 1em;
    background-color: transparent;
    color: #ff2d2d;

    :hover {
        background-color: #fc472f;
        color: white;
    }
`;

export const ButtonSettings = styled(ButtonDelete)`
    color: #454a52;

    :hover {
        background-color: #454a52;
        color: white;
    }
`;

export const ButtonCalc = styled(ButtonDelete)`
    color: #3bce0e;
    
    :hover {
        background-color: #3bce0e;
        color: white;
    }
`;