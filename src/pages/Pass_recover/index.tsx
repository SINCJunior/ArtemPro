import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  Sinc_logo,
  Wrapper,
  Sinc_email,
  Recover
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Recuperação de senha</title>
      </Helmet>
      <Sinc_logo src = { sinc } />
      <Wrapper>
        <Sinc_email type='text' placeholder='E-mail' />
        <Link to={'/login'} style={{ textDecoration: 'none'}}>
          <Recover><p>Recuperar senha</p></Recover>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Login;