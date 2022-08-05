import { css } from '@emotion/react';

export const global = css`
  /* $xs: 0;
$sm: 600;
$md: 960;
$lg: 1280;
$xl: 1920; */

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;

    // /* Medium Devices, Desktops */
    // @media only screen and (min-width: $lg) {
    //   font-size: 72.5%;
    // }

    // /* Large Devices, Wide Screens */
    // @media only screen and (min-width: $xl) {
    //   font-size: 75%;
    // }
  }

  body {
    box-sizing: border-box;
    &::selection {
      background-color: #fff;
      color: #000;
    }
    // font-family: 'Lato', sans-serif;
    // font-size: 1.4rem;
    // font-weight: 400;
    // line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
