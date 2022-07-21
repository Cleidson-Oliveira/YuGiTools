import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    width: 100vw;
    height: 500px;
    align-items: stretch;
    gap: 1rem;

    img {
        grid-column: 3/5;
        grid-row: 2/12;
        justify-self: center;
    }
    h2 {
        grid-column: 6/11;
        grid-row: 2/3;
    }
    p {
        grid-column: 6/11;
        grid-row: 3/6;
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: auto;
        padding: 1rem;
        box-sizing: border-box;

        img {
            width: 80%;
        }
    }
`;
