import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ParticipatingMembersArea,
  ParticipatingMembers,
  EditNotation,
  TimeStampArea,
  TimeStamp,
  Duration,
  Member_description_area,
} from './styles';

const Notation_box: React.FC = () => {
  return (
    <Container>
      <ParticipatingMembersArea>
        <ParticipatingMembers>
          <option>Cesar Rolli</option>
          <option>Paulo Brito</option>
          <option>Augusto Danellus</option>
          <option>Enzo Burille</option>
        </ParticipatingMembers>
        <Link to={'/adicionar-apontamento'}>
          <EditNotation />
        </Link>
      </ParticipatingMembersArea>
      <TimeStampArea>
        <TimeStamp>31/02/2023 - 17:00</TimeStamp>
        <Duration> Duração: 3h 25m</Duration>
      </TimeStampArea>
      <Member_description_area>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
      </Member_description_area>
    </Container>
  )
}

export default Notation_box;