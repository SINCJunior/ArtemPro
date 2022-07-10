import React from 'react';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  Wrapper,
  SincLogo,
  ProfileIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SincLogo src = { sinc } />
        <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
          <ProfileIcon />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header;