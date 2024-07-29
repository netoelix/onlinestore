import styled from 'styled-components';

export const StyledSearch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  width: 60%;

  input {
      padding: 0.5rem;
      width: 80%;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      background-color: #495057;
      &::placeholder {
      color: white;
    }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #6C757D;
      border: none;;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      color: white;

      &:hover {
        background-color: #ADB5BD;
      }
    }
`;
