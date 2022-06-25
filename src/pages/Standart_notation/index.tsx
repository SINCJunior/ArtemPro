import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Notation_area from '../../components/Notation_area';
import Time_analysis from '../../components/Time_analysis';

import { 
  Container,
  Wrapper,
  Sidebar_menu,
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
  Bottom_menu,
  Notation_bottom_icon,
  SDR_bottom_icon,
  Mural_bottom_icon,
  Calendar_bottom_icon,
  Menu_bottom_icon
} from './styles';

const Standart_notation: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Apontamento</title>
      </Helmet>
      <Wrapper>
        
        <Sidebar_menu>
          <Members_side>
            <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
              <Menu_item className='active'>
                <Notation_icon />
                <span>Apontamento</span>
              </Menu_item>
            </Link>

            <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
              <Menu_item>
                <SDR_icon />
                <span>SDR Ativa</span>
              </Menu_item>
            </a>

            <Link to = {'/mural'} style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Mural_icon />
                <span>Mural da Sinc</span>
              </Menu_item>
            </Link>

            <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Calendar_icon />
                <span>Calendário</span>
              </Menu_item>
            </Link>

            <Link to = {'/professores-parceiros'} style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Professors_icon />
                <span>Professores parceiros</span>
              </Menu_item>
            </Link>

            <a href='https://drive.google.com/drive/u/1/folders/0B_pfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Cloud_icon />
                <span>Drive</span>
              </Menu_item>
            </a>
          </Members_side>

          <Direx_side>
            <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Performance_icon />
                <span>Desempenho</span>
              </Menu_item>
            </Link>

            <Link to = {'/direx'} style={{ textDecoration: 'none' }}>
              <Menu_item>
                <Direx_icon />
                <span>Diretoria</span>
              </Menu_item>
            </Link>
          </Direx_side>
        </Sidebar_menu>

        <Notation_area />
        <Time_analysis />
      </Wrapper>
      

      <Bottom_menu>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <Notation_bottom_icon className='active'/>
        </Link>
        <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
          <SDR_bottom_icon />
        </a>
        <Link to = {'/mural'} style={{ textDecoration: 'none' }}>
          <Mural_bottom_icon />
        </Link>
        <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
          <Calendar_bottom_icon />
        </Link>
        <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
          <Menu_bottom_icon />
        </Link>
      </Bottom_menu>
    </Container>
  )
}

export default Standart_notation;