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
                <span>Pipefy</span>
              </MenuItem>
            </a>

            <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
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
        <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
          <TaskDoneBottomIcon />
        </Link>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon className='active'/>
        </Link>
        <Link to = {'/mural'} style={{ textDecoration: 'none' }}>
          <MuralBottomIcon />
        </Link>
        <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
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