import styled from 'styled-components';

export const StyledInitialPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    button {
        padding: 1rem;
        background-color: #ADB5BD;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 44%;
        height: 300px;
        margin: 2rem;
    
        p {
            font-size: 2rem;
            color: #333;
            font-weight: bold;
        }
    
        &:hover {
            background-color: #6C757D;
        }
    }
  }
`;
