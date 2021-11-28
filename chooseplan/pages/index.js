import React, { useContext } from 'react';
import styled from 'styled-components'
import Link from 'next/link'

import AppContext from "./../src/context/AppContext";


import Box from '../src/components/Box';
import ContainerRow from '../src/components/ContainerRow';


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
  }, [appStates])
  



  return (
      <>
        <ContainerRow>
          {platforms.map((item) => {
            return  (
              <Link href={`/detalhes/${item.sku}`} passHref key={item.sku}>
               
                  <Box className={`BoxSelect ${item.nome}`}>
                    <a onClick={() => { appStates.setPlanType(item) }}>
                      <div className="Label">Selecionar</div>
                      <p className="Title">{item.nome}</p>
                      <p className="SubTitle">
                        {item.descricao.replace('|',' ')}
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

