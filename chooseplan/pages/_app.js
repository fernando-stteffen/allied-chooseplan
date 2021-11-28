import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React, { useState } from 'react';
import AppContext from "./../src/context/AppContext";
import Head from "next/head";
import MainGrid from '../src/components/MainGrid';
import Container from '../src/components/Container';
import styled from 'styled-components'


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
`

const HeaderTitle = styled.h1` 
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
  font-weight: 900;
  text-align: center;
`;

const SubTitle = styled.h1` 
  margin: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 100;
  text-align: center;
`;

const theme = {}

export default function App({ Component, pageProps }) {
  const [planType, setPlanType] = useState(null);
  const [planSubType, setPlanSubType] = useState(null);
  return (
    <>  
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00a300" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>  
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap" rel="stylesheet"/>
          <title>ChoosePlan!</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{
              clientChoose: {
                 type: planType,
                 subType: planSubType
              },
              setPlanType: setPlanType,
              setPlanSubType: setPlanSubType
             }}>
            <MainGrid>
              <Container>
                <HeaderTitle>Selecione o seu plano</HeaderTitle>
                <SubTitle>Em instantes você terá seu plano ativado.</SubTitle>
                <Component {...pageProps}/>
              </Container>
            </MainGrid>
          </AppContext.Provider>
        </ThemeProvider>
    </>
  )
}
