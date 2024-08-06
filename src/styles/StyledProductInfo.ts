import styled from 'styled-components';

export const StyledProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-top: 100px;
    padding: 20px;

    section {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 2rem 0;
    }

    .pictures {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        width: 200px;
        height: 500px;
        overflow-y: scroll;

        .picture-button {
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        img {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            border-radius: 5px;
        }
    }

    .product-info {
        p {
            font-size: 1rem;
            margin-top: 2rem;
            font-weight: bold;
        }
        input {
            width: 50px;
            margin-left: 5px;
            border: none;
            border-bottom: 1px solid #000;
            text-align: center;
        }
    }

    .products {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        .product-img {
            max-width: 800px;
            max-height: 600px;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        h1 {
            font-size: 2rem;
            margin-top: 3rem;
        }
        h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
        }

        .buy-now {
            margin-top: 2rem;
            padding: 1rem;
            background-color: #495057;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            width: 50%;
        }
        .add-to-cart {
            margin-top: 2rem;
            padding: 1rem;
            background-color: #6C757D;
            color: #fff;
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            width: 50%;
        }
        .share-options {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;

            button {
                width: 50px;
            }
            svg {
                margin-top: 2rem;
                stroke: black;
                cursor: pointer;
                font-size: 50px;
                font-weight: bold;
            }
        }
    }

    .product-details {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 1rem;
        width: 50%;
        padding: 1rem;
        
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.5rem;
            border-bottom: 1px solid #000;
            text-align: justify;
        }
        
        td {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            font-weight: bold;
            border-bottom: 1px solid white;
        }

        .name {
            background-color: #ADB5BD;
        }

        .value {
            background-color: #CED4DA;
        }
    }
    @media screen and (max-width: 1000px) {
        .pictures {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            width: 100%;
            height: 200px;
            overflow-x: scroll;
            overflow-y: hidden;
        }

        .products {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .product-details {
            width: 100%;
        }
    }
`;
