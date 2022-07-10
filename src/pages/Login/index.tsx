import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Sinc from '../../assets/sinc.png';

import {
  Container,
  SincLogo,
  Wrapper,
  SincEmail,
  Password,
  PassRecover,
  LoginButton
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SincLogo src = { Sinc } />
      <Wrapper>
        <SincEmail type='text' placeholder='E-mail' />
        <Password type='text' placeholder='Senha' />
        <Link to={'/recuperacao-senha'} style={{ textDecoration: 'none'}}>
          <PassRecover>Recuperar senha</PassRecover>
        </Link>
        <Link to={'/apontamento'} style={{ textDecoration: 'none'}}>
          <LoginButton><p>Entrar</p></LoginButton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Login;