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
    console.log(appStates.clientChoose)
  }, [appStates])
  
  return (
      <>
        <ContainerRow>
          {platforms.map((item) => {
            return  (
              <Link href={`/detalhes/${item.sku}`} passHref key={item.sku}>
                <a onClick={() => { appStates.setPlanType(item) }}>
                  <Box className={`
                      ${item.nome == 'Tablet' ? 'BoxBorderBlue' : item.nome == 'Computador' ? 'BoxBorderRed' : 'BoxBorderGreen' }
                      ${item.nome == 'Tablet' ? 'BoxBlue' : item.nome == 'Computador' ? 'BoxRed' : 'BoxGreen' }
                      `}>
                    <div className={`hidden-child ${item.nome == 'Tablet' ? 'BoxTitleBlue' : item.nome == 'Computador' ? 'BoxTitleRed' : 'BoxTitleGreen' }`}>Selecionar</div>
                    <p className={`${item.nome == 'Tablet' ? 'TitleBlue' : item.nome == 'Computador' ? 'TitleRed' : 'TitleGreen' }`}>{item.nome}</p>
                    <p className="SubTitle">
                      {item.descricao.replace('|',' ')}
                    </p>
                  </Box>
                </a>
              </Link>
            )
          })}
        </ContainerRow>
      </>
    )
}

