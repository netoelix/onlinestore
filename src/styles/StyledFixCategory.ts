import styled from 'styled-components';

export const FixCategoryContainer = styled.section`
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6C757D;
    overflow-y: auto;

    .categories {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
      width: 98%;
      height: 640px;
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
`;
