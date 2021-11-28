import { useRouter, Router } from "next/router"
import React, { useContext } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import AppContext from "../../src/context/AppContext"
import TextField from "../../src/components/FormUI/TextField"
import DateTimePicker from "../../src/components/FormUI/DateTimePicker"
import Button from "../../src/components/FormUI/Button"
import FormContainer from "../../src/components/FormContainer"
import InputBox from "../../src/components/InputBox"
import isValidCPF from "../../src/lib/helper"
import Loader from "../../src/components/Loader/indexj"

const maxAge = new Date().getFullYear() - 18
Yup.addMethod(Yup.number, "getCPFValid", function (errorMessage) {
    return this.test(`test-valid-cpf`, errorMessage, function (value) {
        const { path, createError } = this
        return isValidCPF(value) || createError({ path, message: errorMessage })
    })
})

const INITIAL_FORM_STATE = {
    fullName: "",
    email: "",
    birthDate: "",
    cpf: "",
    phone: "",
}

const FORM_VALIDATION = Yup.object().shape({
    fullName: Yup.string()
        .required("É necessario digitar seu nome.")
        .min(8, "Nome muito curto. Digite seu nome completo."),
    email: Yup.string()
        .email("informe um email.")
        .required("Informe um email."),
    birthDate: Yup.date()
        .required("Informe sua data de nascimento")
        .max(maxAge, "Você recisa ser maior de idade."),
    cpf: Yup.number()
        .required("Informe seu CPF")
        .integer("Informe seu CPF")
        .positive("CPF Inválido")
        .getCPFValid("CPF inválido"),
    phone: Yup.number()
        .required("Informe um número de telefone")
        .integer("Informe um número de telefone válido")
        .positive("Informe um número de telefone válido")
        .min(11, "Informe um número de telefone válido"),
    phone: Yup.string().required("Informe um número de telefone"),
})

const Final = () => {
    const [isLoading, setIsLoading] = React.useState([true])
    const appStates = useContext(AppContext)
    const [typeName, setTypeName] = React.useState(["Computador"])
    const [typeAmount, setTypeAmount] = React.useState([""])

    const router = useRouter()

    React.useEffect(() => {
        if (!appStates.clientChoose.type || !appStates.clientChoose.subType) {
            router.replace("/")
        } else {
            setTypeName(appStates.clientChoose.type.nome)
            setTypeAmount(appStates.clientChoose.subType.franquia)
        }
        setIsLoading(false)
    }, [appStates.clientChoose.type, appStates.clientChoose.subType, router])

    return (
        <>
            {isLoading ? <Loader></Loader> : ""}
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                    const data = values
                    data.request = appStates.clientChoose
                    console.log(data)
                }}
            >
                <Form>
                    <FormContainer className={`FormContainer ${typeName}`}>
                        <p className="Title">{typeName}</p>
                        <p className="SubTitle">{typeAmount}</p>
                        <p>Informe Seus Dados</p>

                        <InputBox>
                            <TextField name="fullName" label="Nome Completo" />
                        </InputBox>
                        <InputBox>
                            <TextField name="email" label="Email" />
                        </InputBox>
                        <InputBox>
                            <DateTimePicker
                                name="birthDate"
                                label="data de nascimento"
                            />
                        </InputBox>
                        <InputBox>
                            <TextField name="cpf" label="CPF"></TextField>
                        </InputBox>
                        <InputBox>
                            <TextField
                                name="phone"
                                label="Telefone"
                            ></TextField>
                        </InputBox>
                        <InputBox>
                            <Button>Fazer pedido!</Button>
                        </InputBox>
                    </FormContainer>
                </Form>
            </Formik>
        </>
    )
}

export default Final
