import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        margin: 20px;
    }
    button {
        background-color: #f5f5f5;
        color: #0079bf;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin: 20px;
        width: 40%;
        height: 50px;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.05);
        }
    }
    `;
