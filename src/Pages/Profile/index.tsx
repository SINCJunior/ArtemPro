import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import sinc from '../../assets/sinc.png';

import {
  Container,
  Header,
  Sinc_logo,
  Profile_icon,
  Wrapper,
  Old_pass,
  New_pass,
  Repeat_new_pass,
  Update_info_button,
  Retirement_button,
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

const Profile: React.FC = () => {
  return (
    <Container>
      <Header>
        <Sinc_logo src = { sinc } />
        <Link to={'/perfil'} style={{ textDecoration: 'none'}}>
          <Profile_icon className='active'/>
        </Link>
      </Header>
      <Helmet>
        <title>Perfil</title>
      </Helmet>
      <Wrapper>
        <h3>Editar senha</h3>
        <Old_pass type='text' placeholder='Senha antiga' />
        <New_pass type='text' placeholder='Senha nova' />
        <Repeat_new_pass type='text' placeholder='Repita sua senha nova' />
        <Update_info_button><p>Atualizar senha</p></Update_info_button>
        <Link to={'/desligamento'} style={{ textDecoration: 'none' }}>
          <Retirement_button>Deseja se desvincular da Sinc?</Retirement_button>
        </Link>
      </Wrapper>

      <Sidebar_menu>
        <Members_side>
          <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
            <Menu_item>
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

      <Bottom_menu>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <Notation_bottom_icon />
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

export default Profile;