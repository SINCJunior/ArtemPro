import React from 'react';

import {
  Container,
  Participating_members_area,
  Participating_members,
  Time_stamp_area,
  Time_stamp,
  Duration,
  Member_description_area,
  Member_description,
} from './styles';

const Notation_box: React.FC = () => {
  return (
    <Container>
      <Participating_members_area>
        <Participating_members />
        <Participating_members />
        <Participating_members />
      </Participating_members_area>
      <Time_stamp_area>
        <Time_stamp>31/02/2023 - 17:00</Time_stamp>
        <Duration> Duração: 3h 25m</Duration>
      </Time_stamp_area>
      <Member_description_area>
        <Member_description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus turpis, condimentum ac porttitor ac, porta sit amet ipsum.</Member_description>
      </Member_description_area>
    </Container>
  )
}

export default Notation_box;