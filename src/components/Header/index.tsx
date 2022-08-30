import React from 'react';
import { Link } from 'react-router-dom';

import artempro_black from '../../assets/artempro_black.png';

import {
  Container,
  Wrapper,
  RightSpace,
  TaskScore,
  ArtemProLogo,
  ProfileIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link to={'/apontamento'} style={{ textDecoration: 'none' }}>
          <ArtemProLogo src = { artempro_black } />
        </Link>
        <RightSpace>
          <TaskScore>86</TaskScore>
          <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
            <ProfileIcon />
          </Link>
        </RightSpace>
      </Wrapper>
    </Container>
  )
}

export default Header;