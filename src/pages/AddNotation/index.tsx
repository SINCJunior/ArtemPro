import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  MemberSelection,
  TimeStampArea,
  TimeStamp,
  StartDay,
  StartMonth,
  StartYear,
  StartHour,
  StartMinutes,
  Duration,
  HoursInput,
  MinutesInput,
  MemberDescriptionInput,
  AddNotationButton,
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
  SDRBottomIcon,
  MuralBottomIcon,
  CalendarBottomIcon,
  MenuBottomIcon
} from './styles';

const AddNotation: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Adicionar apontamento</title>
      </Helmet>
      <Wrapper>
        <MemberSelection>
          <option>Cesar Rolli</option>
          <option>Paulo Brito</option>
          <option>Augusto Danellus</option>
          <option>Enzo Burille</option>
        </MemberSelection>
        <TimeStampArea>
          <TimeStamp>
            <StartDay type='text' placeholder='DD' maxLength={2}/>
            <p>/</p>
            <StartMonth type='text' placeholder='MM' maxLength={2} />
            <p>/</p>
            <StartYear type='text' placeholder='AA' maxLength={2} />
            <p>às</p>
            <StartHour type='text' placeholder='HH' maxLength={2} />
            <p>:</p>
            <StartMinutes type='text' placeholder='MM' maxLength={2} />
          </TimeStamp>
          <Duration>
            <h4>Duração:</h4>
            <HoursInput type='text' placeholder='HH' maxLength={2} />
            <p>:</p>
            <MinutesInput type='text' placeholder='MM' maxLength={2} />
          </Duration>
        </TimeStampArea>
        <MemberDescriptionInput placeholder='Descrição' />
        <Link to={'/apontamento'}>
          <AddNotationButton>
            <p>Adicionar</p>
          </AddNotationButton>
        </Link>
      </Wrapper>

      <SidebarMenu>
        <MembersSide>
          <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
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

      <BottomMenu>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon />
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

export default AddNotation;