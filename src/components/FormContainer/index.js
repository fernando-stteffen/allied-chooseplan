import styled from "styled-components"

const colorTablet = "#87b3d8"
const colorComputer = "#e74e60"
const colorWifi = "#a7d384"

const FormContainer = styled.div`
    @media (max-width: 649px) {
        width: 400px;
    }
    @media (max-width: 409px) {
        width: 300px;
    }

    padding: 15px;
    width: 600px;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    p {
        color: #666;
        margin: 15px 0;
    }

    &.WI-FI {
        .Title {
            color: ${colorWifi};
            border-top-color: ${colorWifi};
        }
    }

    &.Tablet {
        .Title {
            color: ${colorTablet};
            border-top-color: ${colorTablet};
        }
    }

    &.Computador {
        .Title {
            color: ${colorComputer};
            border-top-color: ${colorComputer};
        }
    }

    &.FormContainer {
        .SubTitle {
            text-align: center;
            font-weight: 200;
            font-size: 20px;
            color: #333;
            margin: 40px;
        }

        .Title {
            text-align: center;
            font-weight: 800;
            font-size: 24px;
            margin-top: 15px;
        }
    }
`

export default FormContainer
