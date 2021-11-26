import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React, { useState } from 'react';
import AppContext from "./../src/context/AppContext";
import Head from "next/head";



const GlobalStyle = createGlobalStyle`
  /* Simple Reset CSS */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #__next {
    display: flex;
    min-height: 100vh;
  }
  
`

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
            <Component {...pageProps}/>
          </AppContext.Provider>
        </ThemeProvider>
    </>
  )
}
