import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  New_member_name,
  New_member_email,
  Update_info_button,
  Ex_member_email,
  Mural_input,
  Send_message_mural_button,
  New_period_time_name,
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

const Directors_control: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Direx</title>
      </Helmet>
      <Wrapper>
        <h3>Adição de membros</h3>
        {/* <p>Adicione novos membros colocando seu nome completo e seu e-mail da Sinc</p> */}
        <New_member_name type='text' placeholder='Nome completo' />
        <New_member_email type='text' placeholder='E-mail' />
        <Update_info_button><p>Adicionar membro</p></Update_info_button>

        <h3>Desligamento de membros</h3>
        {/* <p>Desligue membros da Sinc colocando seu e-mail da Sinc</p> */}
        <Ex_member_email type='text' placeholder='E-mail' />
        <Update_info_button><p>Desligar membro</p></Update_info_button>

        <h3>Publicar no Mural</h3>
        {/* <p>Escreva uma mensagem para todos lerem</p> */}
        <Mural_input placeholder='Mensagem para o Mural' />
        <Send_message_mural_button><p>Publicar</p></Send_message_mural_button>

        <h3>Criação do período</h3>
        {/* <p>Selecione quando irá começar e escolha o nome para o novo período da Sinc</p> */}
        <New_period_time_name type='text' placeholder='Nome do período (2022/1)' />
        <Update_info_button><p>Iniciar novo período</p></Update_info_button>
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
            <Menu_item className='active'>
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
          <Mural_bottom_icon className='active'/>
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

export default Directors_control;