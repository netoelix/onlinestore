import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
    color: white;
    width: 100%;
  
    h1 {
      font-size: 2rem;
    }
  
    .button-home {
      padding: 0.5rem 1rem;
      background-color: transparent;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: white;
  
      &:hover {
        background-color: #495057;
      }
    }
  
    .title {
      width: 20%;
    }
    .zip-code {
      width: 20%;
    }
  }

  .line-header {
    width: 100%;
    height: 30px;
    background-color: #6C757D;
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      padding-left: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 0.8rem;
      font-weight: bold;
      text-align: start;
      
      img {
        margin-right: 10px;
        width: 30px;
        height: 30px;
      }
    }
  }

  .under-header {
    width: 20%;
  }
`;
