import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        background-color: #fff7f3;
    }

    a {
        color: #2E2F33;
    }

    ul, li, p, a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
`;
