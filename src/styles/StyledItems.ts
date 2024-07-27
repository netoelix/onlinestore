import styled from 'styled-components';

export const StyledItems = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px;
        width: 350px;
        height: 500px;
        padding: 20px;
        cursor: pointer;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    img {
        width: 200px;
        height: 200px;
        margin: 10px;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    h4 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px;
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
        width: 60%;
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
