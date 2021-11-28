import { createGlobalStyle, styled } from "styled-components"
const colorTablet = "#87b3d8"
const colorComputer = "#e74e60"
const colorWifi = "#a7d384"

const GlobalStyle = createGlobalStyle`
  /* Simple Reset CSS */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(184deg, rgba(250,250,250,1) 0%, rgba(244,244,244,1) 100%);
  }

  #__next {
    height: 100%;
  }

  /* fallback */


  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v117/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }


  .BoxSelect {

    @media (max-width:1025px) {
      width: 60%;
      margin-top: 15px;
    }

    width: 30%;
    border: 1px solid transparent;
    border-top:  3px solid #FFF;

    &:hover {
      .Label {
        border-top: 2px solid transparent;
        visibility: initial;
      }
    }

    .Label {
      width: 100%;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      color: #FFF;
      padding: 6px 0;
      visibility: hidden;
    }

    .Title {
      text-align: center;
      font-weight: 800;
      font-size: 24px;
      margin-top: 15px;
    }

    .SubTitle {
      text-align: center;
      font-weight: 200;
      font-size: 20px;
      color: #333;
      margin: 40px;
    }

    &.Tablet {
      color: ${colorTablet};
      border-top-color: ${colorTablet};

      &:hover {
        border: 1px solid ${colorTablet};

        .Label {
          background-color: ${colorTablet}
        }
      }

      .Title {
        color: ${colorTablet};
      }
    }

    &.Computador {
      color: ${colorComputer};
      border-top: 3px solid ${colorComputer};

      &:hover {
        border: 1px solid ${colorComputer};

        .Label {
          background-color: ${colorComputer}
        }
      }

      .Title {
        color: ${colorComputer};
      }
    }

    &.WI-FI {
      color: ${colorWifi};
      border-top: 3px solid ${colorWifi};

      &:hover {
        border: 1px solid ${colorWifi};

        .Label {
          background-color: ${colorWifi}
        }
      }

      .Title {
        color: ${colorWifi};
      }
    }

  }

  /* latin-ext */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

`

export default GlobalStyle
