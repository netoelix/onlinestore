import styled from 'styled-components';

export const StyledInitialPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;

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
        -webkit-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);
        -moz-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);
        box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);

        svg {
            font-size: 3rem;
            color: #333;
        }
    
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

  @media screen and (max-width: 1000px) {
    .categories {
      margin-top: 50px;
      button {
        width: 100%;
        height: 200px;
      }
    }
  }
`;
