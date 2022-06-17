import React from 'react';

import Drop_down_menu_members from '../Drop_down_menu_members';

import {
  Container,
  Time_stamp_area,
  Time_stamp,
  Start_day,
  Start_month,
  Start_year,
  Start_hour,
  Start_minutes,
  Duration,
  Hours_input,
  Minutes_input,
  Member_description_input,
  Add_notation_button,
} from './styles';

// TODO: implementar uma filtragem de texto nos inputs do "Time_stamp"
// TODO: para aceitar somente números (preguiça de fazer agr)


const Add_notation_box: React.FC = () => {
  return (
    <Container>
      <Drop_down_menu_members />
      <Time_stamp_area>
        <Time_stamp>
          <Start_day type = 'text' placeholder = 'DD' maxLength = {2}/>
          <p>/</p>
          <Start_month type = 'text' placeholder = 'MM' maxLength = {2} />
          <p>/</p>
          <Start_year type = 'text' placeholder = 'AA' maxLength = {2} />
          <p>às</p>
          <Start_hour type = 'text' placeholder = 'HH' maxLength = {2} />
          <p>:</p>
          <Start_minutes type = 'text' placeholder = 'MM' maxLength = {2} />
        </Time_stamp>
        <Duration>
          <h4>Duração:</h4>
          <Hours_input type = 'text' placeholder = 'HH' maxLength = {2} />
          <p>:</p>
          <Minutes_input type = 'text' placeholder = 'MM' maxLength = {2} />
        </Duration>
      </Time_stamp_area>
      <Member_description_input placeholder = 'Descrição' />
      <Add_notation_button>
        <p>Adicionar</p>
      </Add_notation_button>
    </Container>
  )
}

export default Add_notation_box;