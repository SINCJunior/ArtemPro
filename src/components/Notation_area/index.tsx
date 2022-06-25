import React from 'react';

import Notation_box from '../Notation_box';
import Add_notation_box from '../Add_notation_box';
import Dropdown from '../Drop_down_menu';

import { Link } from 'react-router-dom';

import {
  Container,
  Settings_bar,
  Filter_icon,
  Stopwatch_page,
  Grid,
} from './styles';

const Notation_area: React.FC = () => {
  return (
    <Container>
      <Settings_bar>
        <Link to={'/cronometro'} style={{ textDecoration: 'none' }}>
          <Stopwatch_page>Cronômetro</Stopwatch_page>
        </Link>
        {/* <Filter_icon /> */}
      </Settings_bar>
      <Grid>
        <Add_notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
        <Notation_box />
      </Grid>
    </Container>
  )
}

export default Notation_area;