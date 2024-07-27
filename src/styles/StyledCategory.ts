import styled from 'styled-components';

export const StyledCategory = styled.div`
    .categories {
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
    }

    .category-button {
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
    `;
