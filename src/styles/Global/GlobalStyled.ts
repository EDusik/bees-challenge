import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    list-style: none;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    font-family: 'Work Sans', sans-serif;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Work Sans", Helvetica, Arial, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Work Sans", sans-serif;
    color: var(--text-primary);
    margin: 0px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }


  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  :root {
    --background: #FFFEF0;
    --primary: #F2EC54;
    --text-primary: #3F3F46;
    --text-title: #27272A;
    --text-secondary: #000000;
    --input-border: #D4D4D8;
    --yellow: #FACF5A;
    --border: #000000;
    --white: #FFFFFF;
    --black: #000000;
    --button-disabled: #52525B;
    --button-enabled: #5D5FEF;
  }
`;
