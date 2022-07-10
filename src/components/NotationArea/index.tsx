import React from 'react';

import NotationBox from '../NotationBox';
import { Link } from 'react-router-dom';

import {
  Container,
  SettingsBar,
  FilterIcon,
  StopwatchPage,
  AddNotationPage,
  Grid,
} from './styles';

const Notation_area: React.FC = () => {
  return (
    <Container>
      <SettingsBar>
        <Link to={'/cronometro'} style={{ textDecoration: 'none' }}>
          <StopwatchPage>Cronômetro</StopwatchPage>
        </Link>
        <Link to={'/adicionar-apontamento'} style={{ textDecoration: 'none' }}>
          <AddNotationPage>Adicionar apontamento</AddNotationPage>
        </Link>
        {/* <FilterIcon /> */}
      </SettingsBar>
      <Grid>
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
        <NotationBox />
      </Grid>
    </Container>
  )
}

export default Notation_area;