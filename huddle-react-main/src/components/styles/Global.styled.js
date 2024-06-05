import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Arial, sans-serif;
        color: hsl(192, 100%, 9%);
        font-size: 1.15em;
        background-color: ${({ theme }) => theme.colors.body};
        margin: 0;
    }
    img {
        max-width: 100%;
    }
    p {
        line-height: 1.5;
        opacity: 0.6;
    }
`;
