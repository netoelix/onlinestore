import styled from 'styled-components';

export const FixCategoryContainer = styled.section`
    width: 20%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6C757D;
    overflow-y: auto;
    height: 100vh;

    .categories {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
      width: 98%;
      height: 80%;
    }
    
    .category-button {
      padding: 10px;
      background-color: transparent;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: #FFFFFF;
      width: 100%;

      &:hover {
        background-color: #495057;
      }

      p {
        font-size: 1rem;
        font-weight: bold;
        text-align: start;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 100vh;
      .categories {
        align-items: center;
        width: 100%;
        height: 75%;
        overflow-y: auto;
      }
    }
`;
