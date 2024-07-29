import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212529;
  color: white;

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
`;
