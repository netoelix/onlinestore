import styled from 'styled-components';

export const StyledHome = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f5f5f5;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px;
    }

    button {
        background-color: #0079bf;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin: 20px;
        width: 40%;
        height: 300px;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.05);
        }

        p {
            font-size: 2rem;
            font-weight: bold;
        }
    }
    `;
