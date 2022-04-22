import styled from "styled-components";

import { Colors } from "../../styles";

export const Wrapper = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    label {
        width: 100%;
        display: flex;
        flex-direction: column;

        h4 {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 50px;
            background: ${Colors.color1};
            padding-left: 20px;
            font-weight: 100;
            text-transform: uppercase;
            color: ${Colors.color2};
        }
    }

    & > div {
        width: 80%;
        margin: 0 auto;
        display: flex;
    }
`;

export const Input = styled.input`
    width: 50%;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    font-size: .8em;
    margin: 10px 0 10px 15px;
`;

export const InputNum = styled(Input)`
    width: 30px;
    margin: 10px 15px;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 15px;
    background-color: ${Colors.color1};
    cursor: pointer;
    font-size: 1em;
    color: ${Colors.color2};
    
    :hover {
        background-color: ${Colors.color3};
    }
`;

export const ButtonConfig = styled(Button)`
    background-color: #717571;
`;

export const CircularButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: ${Colors.color1};
    color: ${Colors.color2};
    
    :hover {
        cursor: pointer;
        background: ${Colors.color2};
        color: ${Colors.color1};
    }
`;

export const CardsAmountSettings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    & > div {
        display: flex;
        align-items: center;
    }
`;