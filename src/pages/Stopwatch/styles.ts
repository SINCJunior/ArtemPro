import styled, { css } from "styled-components";

import { 
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
  AddAlarm,
  HeadsetMic, 
  NotificationsNone,
  Menu, 
  CalendarToday,
  PlayCircle,
  PauseCircle,
  Task,
  CheckBox,
  CheckBoxOutlineBlank,
} from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 350px;
  top: 80px;
  display: flex;
  flex-direction: column;
  position: absolute;

  @media (min-width: 500px) {
    width: 450px;
    height: 90%;
  }
`;

export const NotationPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 40px;
  border-radius: 16px;

  background: var(--primary);
  border: 2px solid var(--sinc-light-color);
  cursor: pointer;

  color: var(--white);
  font-size: 20px;
  font-weight: 400;

  &:hover {
    background: var(--sinc-button-dark-hover);
  }
`;

export const Pomodoro = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
`;

export const PomodoroConfig = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;

  > h3 {
    margin-left: 8px;
    color: var(--white-text);
    font-size: 24px;
    font-weight: bold;
  }
`;

export const EmptyCheckbox = styled(CheckBoxOutlineBlank)`
  display: flex;
  width: 32px;
  height: 32px;
  fill: var(--white);
  cursor: pointer;

  &:hover {
    fill: var(--sinc-light-color);
  }
  &.active {
    display: none;
  }
`;

export const FilledCheckbox = styled(CheckBox)`
  display: none;

  &.active {
    display: flex;
    width: 32px;
    height: 32px;
    fill: var(--sinc-light-color);
    cursor: pointer;

    &:hover {
      fill: var(--sinc-dark-color);
    }
  }
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 8px 32px;

  > p {
    color: var(--white-text);
    font-size: 20px;
    font-weight: 400;
  }
`;

export const TimeInput = styled.input`
  width: 32px;
  height: 16px;
  margin-left: 8px;
  
  color: var(--white-text);
  font-size: 16px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Timer = styled.p`
  color: var(--white);
  font-size: 32px;
  font-weight: 500;
  margin-right: 32px;
`;

const playPauseIconCSS = css`
  width: 32px;
  height: 32px;
  fill: var(--white);

  cursor: pointer;
`;

export const PauseIcon = styled(PauseCircle)`
  display: none;

  &.active  {
    display: flex;
    ${playPauseIconCSS};

    &:hover {
      fill: var(--sinc-light-color);
    }
  }
`;

export const PlayIcon = styled(PlayCircle)`
  ${playPauseIconCSS};
  
  &:hover {
    fill: var(--sinc-light-color);
  }

  &.active  {
    display: none;
  }
`;

export const Member = styled.input`  
  width: 350px;
  height: 72px;
  margin-bottom: 16px;

  position: absolute;
  top: 266px;

  color: var(--white-text);
  background: var(--secondary);
  border-radius: 8px;

  font-size: 16px;
  padding: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }

  @media (min-width: 500px) {
    width: 450px;
  }
`;

export const Description = styled.textarea`
  width: 350px;
  height: 150px;
  margin-bottom: 32px;

  position: absolute;
  top: 354px;

  color: var(--white-text);
  border: 2px solid var(--secondary);
  border-radius: 8px;

  font-size: 16px;
  padding: 8px;

  resize: none;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }

  @media (min-width: 500px) {
    width: 450px;
  }
`;

export const AddNotationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  right: 0;
  top: 516px;

  background: var(--sinc-light-color);
  cursor: pointer;

  > p {
    color: var(--primary);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--sinc-button-hover);
  }
`;

const warningCSS = css`
  display: flex;
  flex-direction: row;
  width: 350px;
  position: absolute;

  align-items: center;
  margin-top: 16px;

  > p {
    font-size: 20px;
    font-weight: 400;
    color: var(--white);

    margin-left: 16px;
  }

  @media (min-width: 500px) {
    width: 450px;
  }
`;
export const FirstWarning = styled.div`
  ${warningCSS};
  top: 564px;
`;
export const SecondWarning = styled.div`
  ${warningCSS};
  top: 628px;  
`;
export const ThirdWarning = styled.div`
  ${warningCSS};
  top: 716px;
  padding-bottom: 64px;
`;


const imgCSS = css`
  width: 32px;
  height: 32px;
`;
export const NoSmartphonesImg = styled.img`${imgCSS}`;
export const WaterImg = styled.img`${imgCSS}`;




//! Side bar menu
export const SidebarMenu = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 72px;
    left: 0;

    padding: 8px 16px;

    width: min(300px, auto);
    height: 92vh;
    overflow-y: auto;
  }
`;

export const MembersSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 16px;

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

export const DirexSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 0;
  padding-top: 16px;
  border-top: 1px solid var(--secondary);

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 960px) {
    > span {
      display: inline;
      margin-left: 16px;

      font-size: 19px;
      color: var(--white);
    }

    padding-right: 16px;
  }

  padding: 8px;
  outline: 0;

  cursor: pointer;
  border-radius: 25px;

  &:hover,
  &.active {
    background: var(--sinc-menu-bar-hover);
    > span, svg {
      color: var(--sinc-light-color);
    }
  }
`;

//!Ícones do menu lateral
const iconCSSMenuBar = css`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const NotationIcon = styled(AddAlarm)`${iconCSSMenuBar}`;
export const TaskDoneIcon = styled(Task)`${iconCSSMenuBar}`;
export const SDRIcon = styled(HeadsetMic)`${iconCSSMenuBar}`;
export const MuralIcon = styled(NotificationsNone)`${iconCSSMenuBar}`;
export const ProfessorsIcon = styled(Analyse)`${iconCSSMenuBar}`;
export const CalendarIcon = styled(CalendarToday)`${iconCSSMenuBar}`;
export const CloudIcon = styled(CloudQueue)`${iconCSSMenuBar}`;
export const PerformanceIcon = styled(InsertChartOutlined)`${iconCSSMenuBar}`;
export const DirexIcon = styled(Rocket)`${iconCSSMenuBar}`;


//! Bottom menu
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--secondary);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

// Ícones usados na página estática
const iconCSSBottomBar = css`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const MuralBottomIcon = styled(NotificationsNone)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;