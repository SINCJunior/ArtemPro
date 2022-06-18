import React from 'react';

import {
  Container,
  Header,
  This_week_activity,
  Pulse_icon,
  Hours_per_member,
  Last_week_activity,
} from './styles';

const Time_analysis: React.FC = () => {
  return (
    <Container>
      <This_week_activity>
        <Header>
          <Pulse_icon />
          <h1>Atividade dessa semana</h1>
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
      </This_week_activity>

      <Last_week_activity>
        <Header>
          <Pulse_icon />
          <h1>Semana passada</h1>
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
      </Last_week_activity>

    </Container>
  )
}

export default Time_analysis;