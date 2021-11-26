import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import Box from '../../src/components/Box';
import ContainerRow from '../../src/components/ContainerRow';
import AppContext from "./../../src/context/AppContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  border: 1px solid #dadce0;
  padding: 40px;
  border-radius: 4px;
  color: #333;
  text-align: center;

  .formField {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
  
  input {
    width: 100%;
    display: block;
    border: 1px solid #dadce0;
    border-radius: 4px;
    white-space: normal;
    font-size: 16px;
    height: 54px;
    padding: 13px 15px;
    text-align: left;
    transition: border .5s;
  }
  
  input:focus,
  input:hover {
    border: 1px solid #1a73e8;
  }
  
  .formField__error {
    color: #d93025;
    font-size: 16px;
    position: absolute;
    margin-top: 5px;
  }
  
  button {
    font-size: 16px;
    border-radius: 4px;
    background: #1a73e8;
    color: #fff;
    border: 0;
    padding: 16px 16px;
    transition: opacity .5s;
    margin-top: 5px;
  }
  
  button:focus,
  button:hover {
    opacity: .5;
  }


  .decoration {
    width: 100%;
    height: 3px;
    background-color: red;
  }

`



export default function Post() {
  const appStates = useContext(AppContext);
  const [typeName, setTypeName] = React.useState(['Computador'])
  const [typeAmount, setTypeAmount] = React.useState([''])
  const [startDate, setStartDate] = useState(new Date());
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
      } else {
        setTypeName(appStates.clientChoose.type.nome)
        setTypeAmount(typeAmount)
      }
    }, [])


    return (
       <>
          <ContainerRow>
           
            <Form onSubmit={ handlePlanRequest }>
                <p className={`${typeName == 'Tablet' ? 'TitleBlue' : typeName == 'Computador' ? 'TitleRed' : 'TitleGreen' }`}>{typeName}</p>
                <p className="SubTitle">{typeAmount}</p>
                <div className="formField">
                  <label htmlFor="nome">
                    <input type="text" name="nome" placeholder="Digite seu nome" />
                  </label>
                </div>
                <div className="formField">
                  <label htmlFor="email">
                    <input type="text" name="email" placeholder="Digite seu email" />
                  </label>
                </div>
                <div className="formField">
                  <label htmlFor="data_nascimento">
                    <input type="text" name="data_nascimento" placeholder="Digite sua data de nascimento" />
                  </label>
                </div>
                
                <div className="formField">
                  <label htmlFor="cpf">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  </label>
                </div>
                <div className="telefone">
                  <label htmlFor="cpf">
                    <input type="text" name="cpf" placeholder="Digite seu telefone" />
                  </label>
                </div>
                <button type="submit"> Enviar meu Pedido!</button>
            </Form>
          </ContainerRow>
       </>
  
    )
}