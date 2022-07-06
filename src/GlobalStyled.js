import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

    
    }

    :root {
        --orange : hsl(25, 97%, 53%);
        --white : hsl(0, 0%, 100%);
        --light-grey: hsl(217, 12%, 63%);
        --medium-grey: hsl(216, 12%, 54%) ;      
        --dark-blue : hsl(213, 19%, 18%);
        --dark-blue-light : hsl(213, 19%, 30%);
        --very-dark-blue: hsl(216, 12%, 8%);
    }

    body,
    html {
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        font-family: 'Overpass', sans-serif;
    }
`
