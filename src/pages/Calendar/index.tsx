import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import SincAlerts from '../../components/SincAlerts';

import {
  Container,
  Wrapper,
  Event,
  Event2,
  Event3,
  Event4,
  Event5,
  Event6,
  BallIndicator,
  BallIndicator2,
  
  SidebarMenu,
  MembersSide,
  MenuItem,
  NotationIcon,
  TaskDoneIcon,
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
  CalendarBottomIcon,
  MenuBottomIcon} from './styles';

const Calendar: React.FC = () => {
  return (
    <Container>
    <Header />
    <Helmet>
      <title>Calendário</title>
    </Helmet>
    <SincAlerts />
    <Wrapper>
      <Event>
        <p>27/10/2022</p>
        <BallIndicator />
        <h3>RG presencial às 9h</h3>
      </Event>
      <Event2>
        <p>31/10/2022</p>
        <BallIndicator2 />
        <h3>Início da CapaSINCtação</h3>
      </Event2>
      <Event3>
        <p>02/11/2022</p>
        <BallIndicator2 />
        <h3>Final da CapaSINCtação</h3>
      </Event3>
      <Event4>
        <p>17/11/2022</p>
        <BallIndicator2 />
        <h3>Não sei mais o que botar lalalal lalalalla lalalalal allalalala allalalal</h3>
      </Event4>
      <Event5>
        <p>17/11/2022</p>
        <BallIndicator2 />
        <h3>Não sei mais o que botar</h3>
      </Event5>
      <Event6>
        <p>17/11/2022</p>
        <BallIndicator2 />
        <h3>Não sei mais o que botar</h3>
      </Event6>
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
            <span>Pipefy</span>
          </MenuItem>
        </a>

        <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
          <MenuItem className='active'>
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

        <Link to = {'/feedback'} style={{ textDecoration: 'none' }}>
          <MenuItem>
            <PerformanceIcon />
            <span>Feedback</span>
          </MenuItem>
        </Link>
      </MembersSide>

      <DirexSide>
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
      <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
        <CalendarBottomIcon className='active'/>
      </Link>
      <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
        <MenuBottomIcon />
      </Link>
    </BottomMenu>

  </Container>
  )
}

export default Calendar;