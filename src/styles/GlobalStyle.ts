import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    
  }
    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #ADB5BD;
    }

    ::-webkit-scrollbar-thumb {
    background: #495057;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #212529;
    }
`;

export default GlobalStyle;
