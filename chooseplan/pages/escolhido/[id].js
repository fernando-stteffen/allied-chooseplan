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
  const handlePlanRequest = (e) => {
      e.preventDefault()
      const full_request = {
        name: 'fernando',
        birthdate: '15/04/1989',
        cpf: '385.220.358-90',
        phone: '17981350211',
        planType: appStates.clientChoose.type,
        planSubType: appStates.clientChoose.subType
      }
      console.log(full_request)
  }

    const router = useRouter()


    React.useEffect(()  => {
      console.log(appStates.clientChoose.type)
      console.log(appStates.clientChoose.subType)
      if (!appStates.clientChoose.type || !appStates.clientChoose.subType) {
        router.replace('/')
      }
      console.log(appStates)
    })


    return (
       <>
            <form onSubmit={ handlePlanRequest }>
                <input type="text" name="nome" />
                <input type="text" name="email" />
                <input type="text" name="cpf" />
                <input type="text" name="telefone" />
                <button > Enviar meu Pedido!</button>
            </form>
       </>
  
    )
}