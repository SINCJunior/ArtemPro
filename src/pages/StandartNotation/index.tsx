import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import NotationArea from '../../components/NotationArea';
import TimeAnalysis from '../../components/TimeAnalysis';

import { 
  Container,
  Wrapper,
  SidebarMenu,
  MembersSide,
  MenuItem,
  NotationIcon,
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
  SDRBottomIcon,
  MuralBottomIcon,
  CalendarBottomIcon,
  MenuBottomIcon,
  TaskDoneIcon
} from './styles';

const StandartNotation: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Apontamento</title>
      </Helmet>
      <Wrapper>
        
        <SidebarMenu>
          <MembersSide>
            <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
              <MenuItem>
                <TaskDoneIcon />
                <span>Tarefas</span>
              </MenuItem>
            </Link>
          
            <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
              <MenuItem className='active'>
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

            <Link to = {'/professores-parceiros'} style={{ textDecoration: 'none' }}>
              <MenuItem>
                <ProfessorsIcon />
                <span>Professores parceiros</span>
              </MenuItem>
            </Link>

            <a href='https://drive.google.com/drive/u/1/folders/0B_pfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
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

        <NotationArea />
        <TimeAnalysis />
      </Wrapper>
      

      <BottomMenu>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon className='active'/>
        </Link>
        <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
          <SDRBottomIcon />
        </a>
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

export default StandartNotation;