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

    /* Only For Modal */
    .ReactModal__Content {
        border: none !important;
        background-color: #fff;
        width: 40%;
        -webkit-box-shadow: 0px -1px 7px 0px rgba(0,0,0,0.43);
        -moz-box-shadow: 0px -1px 7px 0px rgba(0,0,0,0.43);
        box-shadow: 0px -1px 7px 0px rgba(0,0,0,0.20);

        /* Tablets */
        @media screen and (max-width: 1024px) {
            width: 50%;
        }

        /* Small Tablets */
        @media screen and (max-width: 800px) {
            width: 70%;
        }

    }
`;
