import React from 'react';

import {
  Container,
  Header,
  Teachers_name,
  Check_icon,
  Contact,
  Phone_number,
  Email,
  Actuation_area,
  Historic,
  Add_teacher_button,
} from './styles';

const Add_partner_teachers_area: React.FC = () => {
  return (
    <Container>
      <Header>
        <Teachers_name placeholder='Nome do professor'/>
        <Check_icon />
      </Header>
      <Contact>
        <Phone_number placeholder='(51) 98765-4321'/>
        <Email placeholder='email@email.com'/>
      </Contact>
      <Actuation_area placeholder='Área de atuação'/>
      <Historic placeholder='Histórico de contato'/>
      <Add_teacher_button>
        <p>Adicionar</p>
      </Add_teacher_button>
    </Container>
  )
}

export default Add_partner_teachers_area;