import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  Message,
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

const Sinc_wall: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Mural da Sinc</title>
      </Helmet>
      <Wrapper>
        <Message>
          <h3>Diretor 1 · 17/06/2022</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.</p>
        </Message>
        <Message>
          <h3>Diretor 4 · 07/06/2022</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi. Donec vitae lorem at nisi vulputate sagittis. Duis in urna libero. Pellentesque vitae blandit metus. Sed ultrices risus at nisl eleifend, vitae varius dui pharetra. Cras venenatis, tellus sed aliquam vehicula, dolor ligula fringilla magna, sed vestibulum eros neque in ante. Maecenas porttitor aliquet nulla, vitae rutrum mi. Nulla eu tincidunt velit. Aliquam nulla ligula, efficitur vitae commodo lacinia, posuere sed turpis. Proin tempus leo non felis faucibus, ac laoreet sem maximus. Sed nisi mauris, posuere quis blandit vitae, tempor eget sem. Proin velit libero, tincidunt at vestibulum at, auctor ut dolor. Duis auctor metus sed ultrices pretium. Sed ac efficitur nulla, non pulvinar purus. Curabitur sapien magna, molestie et nisi quis, pellentesque pellentesque libero. Donec convallis sit amet mauris non gravida. Maecenas pharetra lorem in tincidunt tempus.</p>
        </Message>
        <Message>
          <h3>Diretor 2 · 17/05/2022</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.</p>
        </Message>
        <Message>
          <h3>Diretor 1 · 07/05/2022</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Message>
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
            <Menu_item className='active'>
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

export default Sinc_wall;