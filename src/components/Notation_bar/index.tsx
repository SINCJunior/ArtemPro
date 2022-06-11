import React from 'react';

import Notation_box from '../Notation_box';
import Add_notation_box from '../Add_notation_box';

import {
  Container,
  Settings_bar,
  Filter_icon,
  Notation_type_menu,
  Grid,
} from './styles';

const Notation_bar: React.FC = () => {
  return (
    <Container>
      <Settings_bar>
        <Notation_type_menu />
        <Filter_icon />
      </Settings_bar>
      <Grid>
        {/* <Add_notation_box /> */}
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

export default Notation_bar;