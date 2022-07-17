import React from 'react';

import {
  Container,
  Header,
  CheckIcon,
  Contact,
  ActuationArea,
  Historic,
} from './styles';

const PartnerTeachersArea: React.FC = () => {
  return (
    <Container>
      <Header>
        <h4>Robertão da Massa</h4>
        <CheckIcon className='active'/>
      </Header>
      <Contact>
        <p>(51) 91234-5678</p>
        <p>robertaodamassa@ufrgs.br</p>
      </Contact>
      <ActuationArea>
        <span>Atuação: </span>
        Teste de Sistemas Eletrônicos, Eletrônica Analógica e Digital, Hardware Tolerante a Falhas e Efeitos da Radiação em Circuitos Analógicos e Mistos
      </ActuationArea>
      <Historic>
        <span>Histórico: </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.
      </Historic>
    </Container>
  )
}

export default PartnerTeachersArea;