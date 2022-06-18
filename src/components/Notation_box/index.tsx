import React from 'react';

import {
  Container,
  Participating_members_area,
  Participating_members,
  Time_stamp_area,
  Time_stamp,
  Duration,
  Member_description_area,
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
      </Member_description_area>
    </Container>
  )
}

export default Notation_box;