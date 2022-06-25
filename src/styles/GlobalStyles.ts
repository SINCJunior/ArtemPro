import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #000;
    --secondary: #353535;
    --white: #d9d9d9;
    --white-text: #fff;
    --sinc-light-color: #EF4136;
    --sinc-dark-color: #8B0924;
    --sinc-menu-bar-hover: #170901;
    --sinc-button-hover: #be1e2d;
    --sinc-button-dark-hover: #16181c;
    --check: #26b81c;
    --select-dropdown: #d1f7fc;
  }
`;