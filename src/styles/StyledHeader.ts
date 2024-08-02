import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  -webkit-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);
  -moz-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);
  box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.52);
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
      margin-left: 1rem;
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

    .search-results {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      button {
        background-color: #6C757D;
        padding: 0.1rem;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
      }
      p {
        margin-right: 10px;
        padding: 0.1rem;
      }
    }
    .zip-code {
      width: 20%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      input {
        border: none;
        padding: 0.5rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #495057;
        color: white;
        &::placeholder {
        color: white;
        }
      }

      .button-search {
        background-color: #6C757D;
        padding: 0.5rem;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: white;
        cursor: pointer;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }

  .line-header {
    width: 100%;
    height: 30px;
    background-color: #6C757D;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    .go-to-cart {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.5rem;
      margin-right: 1rem;

      span {
        background-color: #495057;
        color: white;
        border-radius: 50%;
        padding: 0.1rem 0.4rem;
        font-size: 0.9rem;
      }
  }

  .under-header {
    width: 20%;
  }
}
`;
