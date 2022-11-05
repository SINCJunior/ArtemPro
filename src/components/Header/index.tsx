import React from 'react';
import { Link } from 'react-router-dom';

import artempro_black from '../../assets/artempro_black.png';

import {
  Container,
  Wrapper,
  ArtemProLogo,
  ProfileIcon,
} from './styles';

const Header: React.FC = () => { 
  return (
    <Container>
      <Wrapper>
        <Link to={'/tarefas'} style={{ textDecoration: 'none' }}>
          <ArtemProLogo src = { artempro_black } />
        </Link>
          <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
            <ProfileIcon />
          </Link>
      </Wrapper>
    </Container>
  )
}

export default Header;