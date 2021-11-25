import { useRouter } from 'next/router'
import React, { useContext } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import AppContext from "./../../src/context/AppContext";


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


export default function Post() {
    const appStates = useContext(AppContext);
    const router = useRouter()
    const { id } = router.query;
    const [plans, setPlans] = React.useState([]);
    React.useEffect(()  => {
        if(!id) {
            return;
        }
        async function getPlans() {
          const response = await fetch(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${id}`)
          console.log(response)
          const planJson = await response.json()
          console.log(planJson)
          setPlans(planJson.planos)
        }
        getPlans()
        if (!appStates.clientChoose.type) {
            router.replace('/')
        }
        appStates.setPlanSubType(null)
        console.log(appStates)
      }, [id])
      

    return (
        <main>
            {plans.map((item) => {
                if (item.ativo) {
                    return (
                        <Link href={`/escolhido/${item.sku}`} passHref key={item.sku}>
                            <a  onClick={() => {
                                appStates.setPlanSubType(item)
                            }}>
                                <p>Franquia: {item.franquia} </p>
                                <p>Valor: R$ {item.valor}</p>
                            </a>
                        </Link>
                    )
                }
            })}
        </main>
  
    )

}
