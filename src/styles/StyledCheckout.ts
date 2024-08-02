import styled from 'styled-components';

export const StyledCheckout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    background-color: #f5f5f5;
    color: white;

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 18px;
    }
    .cart-container {
        display: flex;
        flex-direction: column;
        background-color: #6C757D;
        padding: 10px;
        width: 100%;
        p {
            font-weight: bold;
        }
    }
    .item-information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
    .total-price {
        margin-top: 20px;
    }
    .parcelamento {
        margin-top: 20px;
        font-weight: bold;
    }
    .search-results {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .search-results p {
        margin-bottom: 5px;
    }
    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 100%;
        margin-top: 20px;
        padding: 20px;
        background-color: #6C757D;
        margin-bottom: 50px;
        h3 {
            margin-bottom: 20px;
        }
    }
    form div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
    }
    form label {
        font-size: 18px;
        margin-bottom: 5px;
    }
    form input {
        width: 300px;
        height: 30px;
        padding: 5px;
        font-size: 16px;;
        border: none;
        background-color: #495057;
        color: white;
        &::placeholder {
        color: white;
        }
    }
    form input[type="text"] {
        width: 200px;
    }
    form input[type="date"] {
        width: 200px;
    }
    form input[type="submit"] {
        width: 100px;
        height: 40px;
        background-color: #000;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
    }
    p {
        font-size: 18px;
    }
    .personal-information {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        div {
            margin: 10px;
        }
    }
    .search-results {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        div {
            margin: 10px;
        }
    }
    .paymant {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        div {
            margin: 10px;
        }
    }
    .quantidade-de-parcelas {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        select {
            width: 200px;
            height: 30px;
            padding: 5px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #495057;
            color: white;
        }
        option {
            font-size: 16px;
        }
    }
    .finish {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: #495057;
        color: #fff;
        font-size: 18px;
        cursor: pointer;

    }
    .cep-input {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .input {
        border-radius: 5px;
    }
    .parcelamento {
        margin-bottom: 10px;
    }
    .button-search {
        width: 100px;
        height: 30px;
        padding: 5px;
        font-size: 16px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: none;
        background-color: #495057;
        color: white;
        cursor: pointer;
    }
    .cep {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`;
