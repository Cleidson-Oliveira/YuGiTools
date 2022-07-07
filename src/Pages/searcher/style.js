import styled from "styled-components";

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
