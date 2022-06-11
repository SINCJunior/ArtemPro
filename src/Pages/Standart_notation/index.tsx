import React from 'react';

import sinc from '../../assets/sinc.png';

import Notation_bar from '../../components/Notation_bar';

import { 
  Container,
  Sinc_logo,
  Header,
  Wrapper,
  Profile_icon,
  Bottom_menu,
  Menu_bar,
  Members_side,
  Menu_item,
  Notation_icon,
  SDR_icon,
  Mural_icon,
  Calendar_icon,
  Professors_icon,
  Cloud_icon,
  Direx_side,
  Performance_icon,
  Direx_icon,
  Notation_bottom_icon,
  SDR_bottom_icon,
  Mural_bottom_icon,
  Calendar_bottom_icon,
  Menu_bottom_icon,
} from './styles';

const Standart_notation: React.FC = () => {
  return (
    <Container>
      <Header>
        <Sinc_logo src = { sinc }/>
        <Profile_icon />
      </Header>
      <Wrapper>
        <Menu_bar>
          <Members_side>
            <Menu_item className = 'active'>
              <Notation_icon />
              <span>Apontamento</span>
            </Menu_item>

            <Menu_item>
              <SDR_icon />
              <span>SDR Ativa</span>
            </Menu_item>

            <Menu_item>
              <Mural_icon />
              <span>Mural da Sinc</span>
            </Menu_item>

            <Menu_item>
              <Calendar_icon />
              <span>Calendário</span>
            </Menu_item>

            <Menu_item>
              <Professors_icon />
              <span>Professores parceiros</span>
            </Menu_item>

            <Menu_item>
              <Cloud_icon />
              <span>Drive</span>
            </Menu_item>
          </Members_side>

          <Direx_side>
            <Menu_item>
              <Performance_icon />
                <span>Desempenho</span>
              </Menu_item>

            <Menu_item>
              <Direx_icon />
                <span>Diretoria</span>
              </Menu_item>
          </Direx_side>
        </Menu_bar>
        <Notation_bar />
      </Wrapper>
      <Bottom_menu>
        <Notation_bottom_icon className = 'active' />
        <SDR_bottom_icon />
        <Mural_bottom_icon />
        <Calendar_bottom_icon />
        <Menu_bottom_icon />
      </Bottom_menu>
    </Container>
  )
}

export default Standart_notation;