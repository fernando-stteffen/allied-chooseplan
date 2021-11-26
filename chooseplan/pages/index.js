import React, { useContext } from 'react';
import styled from 'styled-components'
import Link from 'next/link'
import AppContext from "./../src/context/AppContext";
import MainGrid from './../src/components/MainGrid'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  const appStates = useContext(AppContext);
  const [platforms, setPlatforms] = React.useState([]);
  React.useEffect(()  => {
    async function getPlatforms() {
      const responseJson = await fetch('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
      const platformsJson = await responseJson.json()
      setPlatforms(platformsJson.plataformas)
    }
    getPlatforms()  
    appStates.setPlanType(null)
    appStates.setPlanSubType(null)
  }, [])

  React.useEffect(() => {
    console.log(appStates.clientChoose)
  }, [appStates])
  

  return (
      <>
        <MainGrid>
          <h1>Olá Mundo!</h1>
          {platforms.map((item) => {
            return  (
                <Link href={`/detalhes/${item.sku}`} passHref key={item.sku}>
                  <a onClick={() => {
                    appStates.setPlanType(item)
                  }}>
                    <ul>
                      <li>{item.nome}</li>
                      <li>{item.descricao}</li>
                    </ul>
                  </a>
                </Link>
            )
          })}
        </MainGrid>
      </>
    )
}

