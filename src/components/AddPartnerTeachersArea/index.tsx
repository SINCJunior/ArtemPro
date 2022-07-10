import React from 'react';

import {
  Container,
  Header,
  TeachersName,
  CheckIcon,
  Contact,
  PhoneNumber,
  Email,
  ActuationArea,
  Historic,
  AddTeacherButton,
} from './styles';

const AddPartnerTeachersArea: React.FC = () => {
  return (
    <Container>
      <Header>
        <TeachersName placeholder='Nome do professor'/>
        <CheckIcon />
      </Header>
      <Contact>
        <PhoneNumber placeholder='(51) 98765-4321'/>
        <Email placeholder='email@email.com'/>
      </Contact>
      <ActuationArea placeholder='Área de atuação'/>
      <Historic placeholder='Histórico de contato'/>
      <AddTeacherButton>
        <p>Adicionar</p>
      </AddTeacherButton>
    </Container>
  )
}

export default AddPartnerTeachersArea;