import React from 'react';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  Wrapper,
  Sinc_logo,
  Profile_icon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Sinc_logo src = { sinc } />
        <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
          <Profile_icon />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header;