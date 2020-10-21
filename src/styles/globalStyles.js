import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #fff;
    color: #222;
    box-sizing: border-box;
    font-size: 1.7rem;
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
    position: relative;
  }

  body.dark {
    color: #fff;
    background-color: #222;
  }

  h1,h2,h3,h4,h5,h6 { 
    font-family: "Lato", sans-serif;
    line-height: 1.3;
  }

  li { list-style: none; }

  img {
    width: 100%;
    max-width: 100%;
  }

  a { 
    text-decoration: none;
    color: blue;
    transition: color .3s;
    &:hover {
      color: pink;
    }
  }
`
