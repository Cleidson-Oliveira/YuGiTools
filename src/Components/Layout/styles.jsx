import styled from "styled-components";

import { Colors } from "../../styles";

export const Button = styled.button`
    background: none;
    border: ${Colors.color1} 1px solid;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1em;

    :hover {
        background: ${Colors.color1};
        color: ${Colors.color1};
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        color: ${Colors.color1};
        font-size: 1.5em;
    }
`;