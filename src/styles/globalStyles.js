import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --s-0: .57rem;
    --s-1: .68rem;
    --s-2: .82rem;
    --s-3: .98rem;
    --s-4: 1.2rem;

    --s-5: 1.4rem;
    --s-6: 1.7rem;
    --s-7: 2rem;
    --s-8: 2.9rem;
    --s-9: 3.5rem;
    --s-10: 4.2rem;

    --color-cta: #f199b9;
    --color-black: #111213;
    --color-bg: ${props => props.theme.colorBg};
    --color-bg-secondary: ${props => props.theme.colorBgSecondary};
    --color-text: ${props => props.theme.colorText};
    --color-text-headers: ${props => props.theme.colorTextHeaders};
    --color-btn-primary: ${props => props.theme.colorBtnPrimary};
  }

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
    background-color: var(--color-bg);
    color: var(--color-text);
    box-sizing: border-box;
    font-size: var(--s-6);
    font-family: "Open Sans", sans-serif;
    line-height: 1.6;
    position: relative;
  }

  h1,h2,h3,h4,h5,h6 { 
    font-family: 'Yantramanav', sans-serif;
    line-height: 1.3;
    color: var(--color-text-header);
  }

  h1 {
    font-size: var(--s-10);
  }

  h2 {
    font-size: var(--s-9);
  }

  h3 {
    font-size: var(--s-8);
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

  input,
  textarea,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`

export default GlobalStyle