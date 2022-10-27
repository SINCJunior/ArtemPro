import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

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
  MuralBottomIcon,
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
      <Wrapper>
        <Grid>
          <DirexItem>
            <h3>Distribuir pontuação</h3>
            <SelectInput>
              <option>Membro</option>
              <option>Cesar Rolli Bevilaqua</option>
              <option>Nicolas Ludwig</option>
              <option>Ingrid</option>
              <option>Gabrielle Grassi</option>
            </SelectInput>
            <SmallWrapper>
              <SmallSelectInput>
                <option>Pontuação</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </SmallSelectInput>
              <SmallSelectInput>
                <option value=''>Área</option>
                <option value='comercial'>Comercial</option>
                <option value='projetos'>Projetos</option>
                <option value=''>...</option>
              </SmallSelectInput>
            </SmallWrapper>
            <DirexButton><p>Adicionar pontuação</p></DirexButton>
          </DirexItem>

          <DirexItem>
            <h3>Adicionar tarefas</h3>
            <DirexInput placeholder='Adicionar tarefa' />
            <SmallWrapper>
              <SmallDirexInput placeholder='Prazo: DD/MM/AAAA'/>
              <SmallSelectInput>
                <option value=''>Prioridade</option>
                <option value='baixa'>🍼 Baixa</option>
                <option value='media'>🧃 Media</option>
                <option value='alta'>☕ Alta</option>
              </SmallSelectInput>
            </SmallWrapper>
            <DirexButton><p>Adicionar tarefa</p></DirexButton>
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
              <option value='membro'>Membro</option>
              <option value='assessor'>Assessor</option>
              <option value='diretor'>Diretor</option>
            </SelectInput>
            <DirexButton><p>Editar cargo do membro</p></DirexButton>
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
        </MembersSide>

        <DirexSide>
          <Link to = {'/em-construcao'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <PerformanceIcon />
              <span>Desempenho</span>
            </MenuItem>
          </Link>

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

export default DirectorsControl;