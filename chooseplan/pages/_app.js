import React, { useState } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"

import AppContext from "../src/context/AppContext"
import MainGrid from "../src/components/MainGrid"
import Container from "../src/components/Container"
import GlobalStyle from "../src/components/GlobalStyle"
import HeaderTitle from "../src/components/HeaderTitle"
import SubTitle from "../src/components/SubTitle"

export default function App({ Component, pageProps }) {
    const theme = {}
    const [planType, setPlanType] = useState(null)
    const [planSubType, setPlanSubType] = useState(null)
    return (
        <>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#00a300" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <title>ChoosePlan!</title>
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AppContext.Provider
                    value={{
                        clientChoose: {
                            type: planType,
                            subType: planSubType,
                        },
                        setPlanType: setPlanType,
                        setPlanSubType: setPlanSubType,
                    }}
                >
                    <MainGrid>
                        <Container>
                            <HeaderTitle>Selecione o seu plano</HeaderTitle>
                            <SubTitle>
                                Em instantes você terá seu plano ativado.
                            </SubTitle>
                            <Component {...pageProps} />
                        </Container>
                    </MainGrid>
                </AppContext.Provider>
            </ThemeProvider>
        </>
    )

}
