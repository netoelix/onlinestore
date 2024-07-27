import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0079bf;
    padding: 20px;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
        margin: 0;
    }

    button {
        background-color: #fff;
        color: #0079bf;
        border: none;
        padding: 5px 8px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.8rem;
        margin: 5px;
        transition: transform 0.2s;
        width: 200px;
        height: 50px;

        &:hover {
            transform: scale(1.05);
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px;
    }
    `;
