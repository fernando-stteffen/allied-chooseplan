import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import styled from 'styled-components'
import { Formik, setNestedObjectValues } from 'formik';
import ContainerRow from '../src/components/ContainerRow';






const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


 
 const Basic = () => {
    
    return (
    <ContainerRow>
        
     </ContainerRow>
    )
}
 
 export default Basic;