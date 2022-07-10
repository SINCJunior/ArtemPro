import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  SincLogo,
  Wrapper,
  SincEmail,
  Recover
} from './styles';

const PassRecover: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Recuperação de senha</title>
      </Helmet>
      <SincLogo src = { sinc } />
      <Wrapper>
        <SincEmail type='text' placeholder='E-mail' />
        <Link to={'/login'} style={{ textDecoration: 'none'}}>
          <Recover><p>Recuperar senha</p></Recover>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default PassRecover;