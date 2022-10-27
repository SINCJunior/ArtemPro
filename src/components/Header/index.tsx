import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import artempro_black from '../../assets/artempro_black.png';

import {
  Container,
  Wrapper,
  AlertMessage,
  CloseButton,
  RightSpace,
  TaskScore,
  ArtemProLogo,
  ProfileIcon,
} from './styles';

const Header: React.FC = () => {
  //Set Close Alerts
  const [isCloseAlertsActive, setIsCloseAlertsActive] = useState(true);
 
  return (
    <Container>
      <AlertMessage className={isCloseAlertsActive? 'active' : ''}>
        <h3>Comercial</h3>
        <CloseButton onClick={() => setIsCloseAlertsActive(false)}/>
        <p>Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial</p>
      </AlertMessage>
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