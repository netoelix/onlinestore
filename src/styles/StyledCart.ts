import styled from 'styled-components';

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 100px;

  .cart-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
  }

  .item-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .item-information {
        display: flex;
        align-items: center;
    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 20px;
    }
    h2 {
        margin-bottom: 10px;
    }
    p {
        font-weight: bold;
    }
    button {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
  }
  .total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 50px;

    h2 {
        margin: 0;
    }
    button {
        background-color: #000;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
  }
`;
