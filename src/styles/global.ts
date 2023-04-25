import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;    
  }

  body {
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.secondary};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }  

  a {
    text-decoration: none;    
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .tweet-link {
    color: inherit;
    display: block; 
  }

`;
