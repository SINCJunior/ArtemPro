import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  OldPass,
  NewPass,
  RepeatNewPass,
  UpdateInfoButton,
  Forms,
  RetirementButton,
  SidebarMenu,
  MembersSide,
  MenuItem,
  NotationIcon,
  TaskDoneIcon,
  SDRIcon,
  MuralIcon,
  CalendarIcon,
  ProfessorsIcon,
  CloudIcon,
  DirexSide,
  PerformanceIcon,
  DirexIcon,
  BottomMenu,
  NotationBottomIcon,
  TaskDoneBottomIcon,
  MuralBottomIcon,
  CalendarBottomIcon,
  MenuBottomIcon
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Perfil</title>
      </Helmet>
      <Wrapper>
        <h3>Editar senha</h3>
        <OldPass type='text' placeholder='Senha antiga' />
        <NewPass type='text' placeholder='Senha nova' />
        <RepeatNewPass type='text' placeholder='Repita sua senha nova' />
        <UpdateInfoButton><p>Atualizar senha</p></UpdateInfoButton>
        <Forms>
          <h3>Formulários:</h3>
          <Link to={'/justificativa-de-falta'} style={{ textDecoration: 'none' }}>
            <RetirementButton>·  Justificativa de falta</RetirementButton>
          </Link>
          <Link to={'/ouvidoria'} style={{ textDecoration: 'none' }}>
            <RetirementButton>·  Ouvidoria</RetirementButton>
          </Link>
          <Link to={'/afastamento'} style={{ textDecoration: 'none' }}>
            <RetirementButton>·  Afastamento</RetirementButton>
          </Link>
          <Link to={'/desligamento'} style={{ textDecoration: 'none' }}>
            <RetirementButton>·  Desligamento</RetirementButton>
          </Link>
        </Forms>
      </Wrapper>

      <SidebarMenu>
        <MembersSide>
          <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <TaskDoneIcon />
              <span>Tarefas</span>
            </MenuItem>
          </Link>
         
          <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <NotationIcon />
              <span>Apontamento</span>
            </MenuItem>
          </Link>

          <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <SDRIcon />
              <span>SDR Ativa</span>
            </MenuItem>
          </a>

          <Link to = {'/mural'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <MuralIcon />
              <span>Mural da Sinc</span>
            </MenuItem>
          </Link>

          <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <CalendarIcon />
              <span>Calendário</span>
            </MenuItem>
          </Link>

          <Link to = {'/parcerias'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <ProfessorsIcon />
              <span>Parcerias</span>
            </MenuItem>
          </Link>

          <a href='https://drive.google.com/drive/u/1/folders/0BPfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <CloudIcon />
              <span>Drive</span>
            </MenuItem>
          </a>
        </MembersSide>

        <DirexSide>
          <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <PerformanceIcon />
              <span>Desempenho</span>
            </MenuItem>
          </Link>

          <Link to = {'/direx'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <DirexIcon />
              <span>Diretoria</span>
            </MenuItem>
          </Link>
        </DirexSide>
      </SidebarMenu>

      <BottomMenu>
        <Link to = {'/tarefas'} style={{ textDecoration: 'none'}}>
          <TaskDoneBottomIcon />
        </Link>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon />
        </Link>
        <Link to = {'/mural'} style={{ textDecoration: 'none' }}>
          <MuralBottomIcon />
        </Link>
        <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
          <CalendarBottomIcon />
        </Link>
        <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
          <MenuBottomIcon />
        </Link>
      </BottomMenu>

    </Container>
  )
}

export default Profile;