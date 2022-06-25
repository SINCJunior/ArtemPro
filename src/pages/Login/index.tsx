import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  Sinc_logo,
  Wrapper,
  Sinc_email,
  Password,
  Pass_recover,
  Login_button
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Sinc_logo src = { sinc } />
      <Wrapper>
        <Sinc_email type='text' placeholder='E-mail' />
        <Password type='text' placeholder='Senha' />
        <Link to={'/recuperacao-senha'} style={{ textDecoration: 'none'}}>
          <Pass_recover>Recuperar senha</Pass_recover>
        </Link>
        <Link to={'/apontamento'} style={{ textDecoration: 'none'}}>
          <Login_button><p>Entrar</p></Login_button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Login;