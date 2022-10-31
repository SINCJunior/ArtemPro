import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  FeedbackItem,
  SelectInput,
  FeedbackButton,
  BlackBar,

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
  MenuBottomIcon,
} from './styles';

const Feedback: React.FC = () => {
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Feedback</title>
      </Helmet>
      <Wrapper>
        <FeedbackItem>
          <h3>Selecione o consultor</h3>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='Cesar_Rolli'>Cesar Rolli</option>
            <option value='Paulo_Brito'>Paulo Brito</option>
            <option value='Milena_Müller'>Milena Müller</option>
            <option value='Gabrielle_Grassi'>Gabrielle Grassi</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Proatividade</h3>
          <p>As pessoas proativas têm uma boa visão de futuro, identificando necessidades e antecipando problemas, o que confere vantagens para sua equipe e empresa.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Estudo</h3>
          <p>Atividade de estudo para executar projetos internos ou externos.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Trabalho em equipe</h3>
          <p>Interações em reuniões de equipe em que o membro participa ativamente das atividades.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Gentileza</h3>
          <p>Delicadeza, amabilidade, educação, linguajar ético.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>
        
        <FeedbackItem>
          <h3>Testa novas ideias</h3>
          <p>Quando novas ideias são apresentadas, o membro está aberto a testá-la para ver se funciona.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Otmizações</h3>
          <p>Qualquer tipo de melhorias em qualquer processo já existente na Sinc.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Estratégia</h3>
          <p>Quando o membro apresenta soluções estratégicas para determinado fim.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackButton><p>Enviar feedback</p></FeedbackButton>
        <BlackBar />
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

          <a href='https://drive.google.com/drive/u/1/folders/0BPfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <CloudIcon />
              <span>Drive</span>
            </MenuItem>
          </a>
          
          <Link to = {'/feedback'} style={{ textDecoration: 'none' }}>
            <MenuItem className='active'>
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
        <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
          <TaskDoneBottomIcon  className='active'/>
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

export default Feedback;