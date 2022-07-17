import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import artempro_black from '../../assets/artempro_black.png';

import {
  Container,
  ArtemProLogo,
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
      <ArtemProLogo src = { artempro_black } />
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