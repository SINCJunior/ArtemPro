import React from 'react';
import { Helmet } from 'react-helmet';

import changing_time from '../../assets/changing_time.png';

import {
  Container,
  Changing_time_img,
  Warning
} from './styles';

const Retirement: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Desligamento</title>
      </Helmet>
      <Changing_time_img src = { changing_time } />
      <Warning>
        <h1>Tá pensando em se<br/>desligar da Sinc?</h1>
      </Warning>
    </Container>
  )
}

export default Retirement;