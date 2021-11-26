import styled from "styled-components";
const Box = styled.div`
    background-color: #FEFEFE;
    display: flex;
    flex-direction: column;
    margin-top: 20px; 
    width: 300px;
    height: 300px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    :hover {
        cursor: pointer;
    }

    :hover .hidden-child {
        visibility: initial;
    }

`;


export default Box;