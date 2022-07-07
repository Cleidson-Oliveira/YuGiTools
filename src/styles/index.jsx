import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
    body, #root{
        min-height: 100vh;
        background: rgb(75, 255, 213, .2);
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export const Colors = {
    color1: '#3d3d72',
    color2: '#a3d7e4',
    color3: '#111138'
}