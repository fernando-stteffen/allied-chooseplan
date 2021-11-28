import React, { useContext } from "react"
import Link from "next/link"

import AppContext from "./../src/context/AppContext"

import Box from "../src/components/Box"
import ContainerRow from "../src/components/ContainerRow"
import Loader from "../src/components/Loader/indexj"

const resetChoose = (context) => {
    console.log("type ", context.clientChoose.type)
    console.log("subType ", context.clientChoose.subType)
    if (context.clientChoose.subType || context.clientChoose.type) {
        context.setPlanType(null)
        context.setPlanSubType(null)
        console.log("called")
    }
}

export default function Home() {
    const appStates = useContext(AppContext)
    const [platforms, setPlatforms] = React.useState([])
    const [isLoading, setIsLoading] = React.useState([true])
    // resetChoose(appStates)
    React.useEffect(() => {
        async function getPlatforms() {
            const responseJson = await fetch(
                "http://private-59658d-celulardireto2017.apiary-mock.com/plataformas"
            )
            const platformsJson = await responseJson.json()
            setPlatforms(platformsJson.plataformas)
        }
        getPlatforms()
        setIsLoading(false)
    }, [])

    React.useEffect(() => {}, [appStates])

    return (
        <>
            {isLoading ? <Loader></Loader> : ""}
            <ContainerRow>
                {platforms.map((item) => {
                    return (
                        <Link
                            href={`/detalhes/${item.sku}`}
                            passHref
                            key={item.sku}
                        >
                            <Box className={`BoxSelect ${item.nome}`}>
                                <a
                                    onClick={() => {
                                        appStates.setPlanType(item)
                                    }}
                                >
                                    <div className="Label">Selecionar</div>
                                    <p className="Title">{item.nome}</p>
                                    <p className="SubTitle">
                                        {item.descricao.replace("|", " ")}
                                    </p>
                                </a>
                            </Box>
                        </Link>
                    )
                })}
            </ContainerRow>
        </>
    )
}
