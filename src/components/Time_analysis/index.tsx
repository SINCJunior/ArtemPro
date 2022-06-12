import React from 'react';

import {
  Container,
  Header,
  Pulse_icon,
  Hours_per_member,
} from './styles';

const Time_analysis: React.FC = () => {
  return (
    <Container>
      <Header>
        <Pulse_icon />
        <h1>Atividade da semana</h1>
      </Header>

      <Hours_per_member>
        <p style = {{fontWeight: 'bold'}}>Total</p>
        <p style = {{fontWeight: 'bold'}}>99h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 1</p>
        <p>9h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 2</p>
        <p>9h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 3</p>
        <p>9h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 4</p>
        <p>9h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 5</p>
        <p>9h 29m</p>
      </Hours_per_member>
      <Hours_per_member>
        <p>Membro 6</p>
        <p>9h 29m</p>
      </Hours_per_member>

    </Container>
  )
}

export default Time_analysis;