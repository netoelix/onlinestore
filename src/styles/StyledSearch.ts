import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    input {
        padding: 10px;
        font-size: 1rem;
        border: none;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 50px;
    }
    button {
        background-color: #f5f5f5;
        color: #0079bf;
        border: none;
        padding: 10px 20px;
        border-radius: 0px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        font-size: 1rem;
        width: 120px;
        height: 50px;
        margin: 0px;
    }
    `;
