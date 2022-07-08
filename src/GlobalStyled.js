import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    
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
        font-family: 'Overpass', sans-serif;
    }

    /* CSS RESET */

    html, body, div, span, applet, object, iframe, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`
