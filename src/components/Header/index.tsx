import React from 'react';
import { Link } from 'react-router-dom';

import artempro_black from '../../assets/artempro_black.png';
import sinc from '../../assets/sinc.png';

import {
  Container,
  Wrapper,
  LeftWrapper,
  ArtemProLogo,
  VerticalBar,
  SincLogo,
  ProfileIcon,
} from './styles';

const Header: React.FC = () => { 
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Link to={'/tarefas'} style={{ textDecoration: 'none' }}>
            <ArtemProLogo src = { artempro_black } />
          </Link>
          <VerticalBar />
          <SincLogo src = {sinc} />
        </LeftWrapper>
        <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
          <ProfileIcon />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header;