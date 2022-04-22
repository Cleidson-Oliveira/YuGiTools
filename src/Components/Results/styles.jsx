import styled from 'styled-components';

import { Colors } from "../../styles"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;
 
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    width: 80%;
    height: 200px;
    
    p {
        color: ${Colors.color1};
        text-transform: uppercase;
    }
`;

export const Graph = styled.div`
    height: 100px;
    border-left: 2px solid ${Colors.color1};
    border-bottom: 2px solid ${Colors.color1};
    display: flex;
    align-items: flex-end;
`;

export const Candle = styled.div`
    width: 20px;
    height: ${props => props.candleHeight}px;
    background-color: ${props => props.bg};
    border-radius: 3px 3px 0 0;
    margin: 0 7px;
    position: relative;
    display: flex;
    justify-content: center;

    p {
        position: absolute;
        font-size: .7em;
        color: ${Colors.color1};
    }

    & p:first-child {
        top: -15px;
    }
    & p:last-child {
        bottom: -15px;
    }
`;