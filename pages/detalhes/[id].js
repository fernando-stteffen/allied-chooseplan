import { useRouter } from "next/router"
import React, { useContext } from "react"
import Link from "next/link"
import AppContext from "../../src/context/AppContext"
import ContainerRow from "../../src/components/ContainerRow"
import Box from "../../src/components/Box"
import Loader from "../../src/components/Loader/indexj"
import baseUrl from "../../config"

export default function Details() {
    const appStates = useContext(AppContext)
    const router = useRouter()
    const { id } = router.query
    const [plans, setPlans] = React.useState([])
    const [typeName, setTypeName] = React.useState(["Computador"])
    const [isLoading, setIsLoading] = React.useState([true])
    React.useEffect(() => {
        if (!id) {
            return
        }
        async function getPlans() {
            const response = await fetch(`${baseUrl}/planos/${id}`)
            const planJson = await response.json()
            setPlans(planJson.planos)
        }
        getPlans()
        setIsLoading(false)
    }, [id])

    React.useEffect(() => {
        if (appStates.clientChoose.type) {
            setTypeName(appStates.clientChoose.type.nome)
        }
    }, [appStates])

    return (
        <>
            {isLoading ? <Loader></Loader> : ""}

            <ContainerRow>
                {plans.map((item) => {
                    if (item.ativo) {
                        return (
                            <Link
                                href={`/escolhido/${item.sku}`}
                                passHref
                                key={item.sku}
                            >
                                <Box className={`BoxSelect ${typeName}`}>
                                    <a
                                        onClick={() => {
                                            appStates.setPlanSubType(item)
                                        }}
                                    >
                                        <div className="Label">Selecionar</div>
                                        <p className="Title">{item.franquia}</p>
                                        <p className="SubTitle">{typeName}</p>
                                        <p className="SubTitle">
                                            <span className="Title">R$</span>{" "}
                                            {item.valor}
                                        </p>
                                    </a>
                                </Box>
                            </Link>
                        )
                    }
                })}
            </ContainerRow>
        </>
    )
}
