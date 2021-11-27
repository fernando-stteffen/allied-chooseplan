import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AppContext from "../../src/context/AppContext";


import styled from 'styled-components'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';


import TextField from '../../src/components/FormUI/TextField'
import DateTimePicker from '../../src/components/FormUI/DateTimePicker'
import Button from '../../src/components/FormUI/Button'
import { grid } from '@material-ui/system';

const ContainerPaper = styled.div`
  width: 100%;
  border: 1px solid #dadce0;
  padding: 40px;
  border-radius: 4px;
  color: #333;
  text-align: center;
  background-color: #FEFEFE;


`





const maxAge = new Date().getFullYear() - 18

function isValidCPF(number) {
  let sum;
  let rest;
  sum = 0;
  if (number == "00000000000") return false;

  for (let i=1; i<=9; i++) sum = sum + parseInt(String(number).substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(String(number).substring(9, 10)) ) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(String(number).substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest == 10) || (rest == 11))  rest = 0;
  if (rest != parseInt(String(number).substring(10, 11) ) ) return false;
  return true;
}

Yup.addMethod(Yup.number, "getCPFValid", function (errorMessage) {
  return this.test(`test-valid-cpf`, errorMessage, 
    function (value) {
      const { path, createError } = this;
      console.log(isValidCPF(value))
      return (
        isValidCPF(value)   || createError({ path, message: errorMessage })
      );
    }
  );
})

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  birthDate: '',
  cpf: '',
  phone: '',
}

const FORM_VALIDATION = Yup.object().shape({
  fullName: Yup.string()
    .required("É necessario digitar seu nome.")
    .min(8, 'Nome muito curto. Digite seu nome completo.'),
  email: Yup.string()
    .email('informe um email.')
    .required('Informe um email.'),
  birthDate: Yup.date()
    .required('Informe sua data de nascimento')
    .max(maxAge, 'Você recisa ser maior de idade.'),
  cpf: Yup.number()
    .required('Informe seu CPF')
    .integer('Informe seu CPF')
    .positive('CPF Inválido')
    .getCPFValid('CPF inválido'),
  phone: Yup.number()
    .required('Informe um número de telefone')
    .integer('Informe um número de telefone válido')
    .positive('Informe um número de telefone válido')
    .min(11, 'Informe um número de telefone válido'),
  phone: Yup.string()
    .required('Informe um número de telefone')
})

const Final = () => {

  const appStates = useContext(AppContext);
  const [typeName, setTypeName] = React.useState(['Computador'])
  const [typeAmount, setTypeAmount] = React.useState([''])

  const router = useRouter()

  React.useEffect(()  => {
      if (!appStates.clientChoose.type || !appStates.clientChoose.subType) {
        router.replace('/')
      } else {
        setTypeName(appStates.clientChoose.type.nome)
        setTypeAmount(appStates.clientChoose.subType.franquia)
      }
  }, [])


  return (
    <ContainerPaper>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="xs">
            <Formik 
              initialValues={{...INITIAL_FORM_STATE}}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                const data = values
                data.request = appStates.clientChoose
                console.log(data)
              }}
            >
              
              <Form>
                <Grid container spacing={2}>

                  <Grid itm xs={12}>
                    <p className={`${typeName == 'Tablet' ? 'TitleBlue' : typeName == 'Computador' ? 'TitleRed' : 'TitleGreen' }`}>
                      {typeName}
                    </p>
                  </Grid>

                  <Grid itm xs={12}>
                    <Typography>
                       {typeAmount}
                    </Typography>
                  </Grid>
                   
                   
                  <Grid item xs={12}>
                    <Typography>
                        Informe Seus Dados
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="fullName"
                      label="Nome Completo"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <DateTimePicker 
                      name="birthDate"
                      label="data de nascimento"
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <TextField
                      name="cpf"
                      label="CPF"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      label="Telefone"
                    />
                  </Grid>

                  
                  <Grid item xs={12}>
                    <Button>
                        Fazer pedido!
                    </Button>
                  </Grid>

                  



                </Grid>
              </Form>
              


            </Formik>
          </Container>
        </Grid>
      </Grid>
    </ContainerPaper>
  )
}


export default Final