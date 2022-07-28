import styled from "styled-components";

import { Colors } from "../../styles"

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 0 30px;

    li {
        padding: 10px 15px;
        list-style: none;
        cursor: pointer;
        transition: all .5s ease;
        border-radius: 5px;
        
        a {
            text-decoration: none;
            color: ${Colors.color2};

        }

        :hover {
            background-color: ${Colors.color2};

            a {
                color: ${Colors.color1};
            }
        }
    }
`;