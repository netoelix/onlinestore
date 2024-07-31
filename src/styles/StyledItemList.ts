import styled from 'styled-components';

export const StyledItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const StyledFilterList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border-right: 5px solid #e0e0e0;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 5px;
        padding: 1rem;
        width: 300px;
        h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        button {
            background-color: transparent;
            border: none;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
            background-color: #e0e0e0;
            }
        }
    }
`;

export const StyledItemList = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    justify-items: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      padding: 1rem;
      height: 500px;
      width: 300px;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
      }
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        margin-bottom: 0.5rem;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
      }

      .title-product {
        background-color: transparent;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #e0e0e0;
        }
      }
      .add-to-cart {
        background-color: #f8f8f8;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
`;
