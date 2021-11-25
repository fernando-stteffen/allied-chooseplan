import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React, { useState } from 'react';
import AppContext from "./../src/context/AppContext";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  const [planType, setPlanType] = useState(null);
  const [planSubType, setPlanSubType] = useState(null);
  return (
    <>
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
