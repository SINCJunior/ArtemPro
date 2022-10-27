import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import noSmartphone from '../../assets/noSmartphones.png';
import water from '../../assets/water.png';

import { 
  Container,
  Wrapper,
  NotationPage,
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
  CalendarBottomIcon,
  MenuBottomIcon,
  Pomodoro,
  PomodoroConfig,
  EmptyCheckbox,
  FilledCheckbox,
  EditTime,
  TimeInput,
  Counter,
  PlayIcon,
  PauseIcon,
  Member,
  Description,
  AddNotationButton,
  FirstWarning,
  SecondWarning,
  NoSmartphonesImg,
  ThirdWarning,
  WaterImg,
  TaskDoneIcon,
} from './styles';


const Stopwatch: React.FC = () => {
  //Set Pomodoro activation
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);
  const changePomodoro = () => {
    setIsPomodoroActive(!isPomodoroActive);
  }
  

  //Time logic 
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  

  // Stopwatch logic
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
  
  return (
    <Container>
      <Header />
      <Helmet>
        <title>Cronômetro</title> 
      </Helmet>

      <Wrapper>
        <Link to={'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationPage>Apontamento</NotationPage>
        </Link>
        <Pomodoro>
          <PomodoroConfig>
            <EmptyCheckbox onClick={changePomodoro} className={isPomodoroActive? 'active' : ''} />
            <FilledCheckbox onClick={changePomodoro} className={isPomodoroActive? 'active' : ''} />
            <h3>Pomodoro:</h3>
          </PomodoroConfig>
            <EditTime>
              <p>Tempo de pomodoro:</p>
              <TimeInput type='text' placeholder='50' maxLength={2}/>
              <p>min</p>
            </EditTime>
            <EditTime>
              <p>Tempo de descanso:</p>
              <TimeInput type='text' placeholder='10' maxLength={2}/>
              <p>min</p>
            </EditTime>
        </Pomodoro>
        <Counter>
          {/* The time is calculated by dividing the time by the number of seconds for each unit of time.*/}
          <span>{("0" + Math.floor((time / (60*60)) % 60)).slice(-2)} :</span>
          <span>{("0" + Math.floor((time / (60)) % 60)).slice(-2)} :</span> 
          <span>{("0" + Math.floor((time / (1)) % 60)).slice(-2)}</span>
          <PlayIcon onClick={() => setIsRunning(true)} className={isRunning? 'active' : ''} />
          <PauseIcon onClick={() => setIsRunning(false)} className={isRunning? 'active' : ''} />
        </Counter>
        <Member placeholder='Membros'/>
        <Description placeholder='Descrição'/>
        <AddNotationButton><p>Adicionar</p></AddNotationButton>
        <FirstWarning>
          <NotationIcon />
          <p>Ao adicionar, seu tempo ficará visível no histórico de apontamentos.</p>
        </FirstWarning>
        <SecondWarning>
          <NoSmartphonesImg src={ noSmartphone } />
          <p>A pausa da Técnica de Pomodoro tem como objetivo descansar, então levante e se desconecte!</p>
        </SecondWarning>
        <ThirdWarning>
          <WaterImg src={ water } />
          <p>Mantenha-se hidratado!</p>
        </ThirdWarning>
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
        <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
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

export default Stopwatch;