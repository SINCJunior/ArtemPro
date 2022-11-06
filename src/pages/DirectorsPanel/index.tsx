import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import SincAlerts from '../../components/SincAlerts';

import {
  Container,
  Wrapper,
  Grid,
  DirexItem,
  DirexInput,
  DirexButton,
  SelectInput,
  SmallWrapper,
  SmallDirexInput,
  SmallSelectInput,
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
  MenuBottomIcon
} from './styles';

const DirectorsControl: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Diretoria</title>
      </Helmet>
      <SincAlerts />
      <Wrapper>
        <Grid>
          <DirexItem>
            <h3>Adicionar tarefas</h3>
            <DirexInput placeholder='Adicionar tarefa' />
            <SelectInput>
              <option value=''>Selecione uma opção</option>
              <option value='Cesar_Rolli'>Cesar Rolli</option>
              <option value='Nicolas_Ludwig'>Nicolas Ludwig</option>
              <option value='Marcelo_Welzel'>Marcelo Welzel</option>
              <option value='Gabrielle_Grassi'>Gabrielle Grassi</option>
            </SelectInput>
            <SmallWrapper>
              <SmallDirexInput placeholder='Prazo: DD/MM/AAAA'/>
              <SmallSelectInput>
                <option value=''>Prioridade</option>
                <option value='baixa'>Baixa</option>
                <option value='media'>Media</option>
                <option value='alta'>Alta</option>
              </SmallSelectInput>
            </SmallWrapper>
            <DirexButton><p>Adicionar tarefa</p></DirexButton>
          </DirexItem>
          
          <DirexItem>
            <h3>Adicionar no calendário</h3>
            <DirexInput placeholder='Adicionar no calendário' />
            <SmallWrapper>
              <DirexInput placeholder='Data: DD/MM/AAAA'/>
            </SmallWrapper>
            <DirexButton><p>Adicionar no calendário</p></DirexButton>
          </DirexItem>

          <DirexItem>
            <h3>Publicar no Mural</h3>
            <DirexInput type='text' placeholder='Assunto' />
            <DirexInput type='text' placeholder='Mensagem' />
            <DirexButton><p>Publicar</p></DirexButton>
          </DirexItem>
          
          <DirexItem>
            <h3>Edição de cargos</h3>
            <DirexInput type='text' placeholder='E-mail' />
            <SelectInput>
              <option value='consultor'>Consultor</option>
              <option value='assessor'>Assessor</option>
              <option value='diretor'>Diretor</option>
            </SelectInput>
            <DirexButton><p>Editar cargo</p></DirexButton>
          </DirexItem>

          <DirexItem>
            <h3>Adição de membros</h3>
            <DirexInput type='text' placeholder='Nome completo' />
            <DirexInput type='text' placeholder='E-mail' />
            <DirexButton><p>Adicionar membro</p></DirexButton>
          </DirexItem>

          <DirexItem>
            <h3>Desligamento de membros</h3>
            <DirexInput type='text' placeholder='E-mail' />
            <DirexButton><p>Desligar membro</p></DirexButton>
          </DirexItem>
        </Grid>
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
          
          <Link to = {'/feedback'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <PerformanceIcon />
              <span>Feedback</span>
            </MenuItem>
          </Link>
        </MembersSide>

        <DirexSide>
          <Link to = {'/direx'} style={{ textDecoration: 'none' }}>
            <MenuItem className='active'>
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
          <CalendarBottomIcon />
        </Link>
        <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
          <MenuBottomIcon />
        </Link>
      </BottomMenu>
    </Container>
  )
}

export default DirectorsControl;