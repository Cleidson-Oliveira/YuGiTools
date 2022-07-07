import styled from "styled-components";

import { Colors } from "../../styles";

export const Button = styled.button`
    background: none;
    border: ${Colors.color1} 1px solid;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1em;
    cursor: pointer;
    color: ${Colors.color1};

    :hover {
        background: ${Colors.color1};
        color: ${Colors.color2};
    }
`;

export const RoundedButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid ${Colors.color2};
    padding: 0;
    border-radius: 50%;
    background: ${Colors.color1};
    color: ${Colors.color2};
    position: ${({ position }) => position.position};
    bottom: ${({ position }) => position.bottom};
    right: ${({ position }) => position.right};

    svg {
        font-size: 1.2rem;
    }

    :hover {
        background: ${Colors.color2};
        color: ${Colors.color1};
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

    h1 {
        color: ${Colors.color1};
        font-size: 1.5em;
    }
`;