import styled from "styled-components";

import { Colors } from "../../styles"

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 150px;
    background: ${Colors.color1};
    margin-bottom: 30px;
`;

export const Logo = styled.div`
    width: 80px;
    height: 80px;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Menu = styled.ul``;