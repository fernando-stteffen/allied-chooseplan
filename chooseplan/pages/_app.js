import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React, { useState } from 'react';
import AppContext from "./../src/context/AppContext";
import Head from "next/head";
import MainGrid from '../src/components/MainGrid';
import Container from '../src/components/Container';
import styled from 'styled-components'


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

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #333;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    background: rgb(255,255,255);
    background: linear-gradient(184deg, rgba(250,250,250,1) 0%, rgba(244,244,244,1) 100%);
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

  .TitleBlue {
     color: #87b3d8;
     text-align: center;
     font-weight: 800;
     font-size: 24px;
     margin-top: 15px;
  }

  .BoxTitleBlue {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #FFF;
    background-color: #87b3d8;
    padding: 6px 0;
    visibility: hidden;
  }

  .BoxBorderBlue {
    border-top: 3px solid #87b3d8; 
  }
  .BoxBorderBlue:hover {
    border: 1px solid #87b3d8; 
  }

  .TitleRed {
    color: #e74e60;
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    margin-top: 15px;
 }


  .BoxTitleRed {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #FFF;
    background-color: #e74e60;
    padding: 6px 0;
    visibility: hidden;
  }
  .BoxBorderRed {
    border-top: 3px solid #e74e60; 
  }
  .BoxBorderRed:hover {
    border: 1px solid #e74e60; 
  }



  .TitleGreen {
    color: #abd788;
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    margin-top: 15px;
  }

  .BoxTitleGreen {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #FFF;
    background-color: #abd788;
    padding: 6px 0;
    visibility: hidden;
  }
  
  .BoxBorderGreen {
    border-top: 3px solid #abd788; 
  }

  .BoxBorderGreen:hover {
    border: 1px solid #abd788; 
  }


  .SubTitle {
    text-align: center;
    font-weight: 200;
    font-size: 20px;
    color: #333;
    margin: 40px;
  }

 




`

const HeaderTitle = styled.h1` 
  margin-top: 200px;
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
