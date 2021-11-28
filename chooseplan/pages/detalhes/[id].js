import { useRouter } from 'next/router'
import React, { useContext } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import AppContext from "../../src/context/AppContext";
import ContainerRow from '../../src/components/ContainerRow';
import MainGrid from '../../src/components/MainGrid';
import Box from '../../src/components/Box';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


export default function Post() {
    const appStates = useContext(AppContext);
    const router = useRouter()
    const { id } = router.query;
    const [plans, setPlans] = React.useState([]);
    const [typeName, setTypeName] = React.useState(['Computador'])
    
    React.useEffect(()  => {
        if(!id) {
            return;
        }
        async function getPlans() {
          const response = await fetch(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${id}`)
          const planJson = await response.json()
          setPlans(planJson.planos)
        }
        getPlans()
        if (!appStates.clientChoose.type) {
            router.replace('/')
        }
        appStates.setPlanSubType(null)
      }, [id])
    
    React.useEffect(() => {
        if (appStates.clientChoose.type) {
            setTypeName(appStates.clientChoose.type.nome)
        }
    }, [])
      
    return (
        <MainGrid>
            <ContainerRow>
            {plans.map((item) => {
                if (item.ativo) {
                    return (
                        <Link href={`/escolhido/${item.sku}`} passHref key={item.sku}>
                            <a  onClick={() => { appStates.setPlanSubType(item) }}>
                            <Box className={`
                                ${typeName == 'Tablet' ? 'BoxBorderBlue' : typeName == 'Computador' ? 'BoxBorderRed' : 'BoxBorderGreen' }
                                ${typeName == 'Tablet' ? 'BoxBlue' : typeName == 'Computador' ? 'BoxRed' : 'BoxGreen' }
                                `}>
                                <div className={`hidden-child ${typeName == 'Tablet' ? 'BoxTitleBlue' : typeName == 'Computador' ? 'BoxTitleRed' : 'BoxTitleGreen' }`}>Selecionar</div>
                                <p className={`${typeName == 'Tablet' ? 'TitleBlue' :typeName == 'Computador' ? 'TitleRed' : 'TitleGreen' }`}>{item.franquia}</p>
                                <p className="SubTitle">{typeName}</p>
                                <p className="SubTitle">
                                    <span className={`${typeName == 'Tablet' ? 'TitleBlue' :typeName == 'Computador' ? 'TitleRed' : 'TitleGreen' }`}>R$ </span> 
                                    {item.valor}
                                </p>
                            </Box>
                            </a>
                        </Link>
                    )
                }
            })}
            </ContainerRow>
        </MainGrid>
  
    )

}
