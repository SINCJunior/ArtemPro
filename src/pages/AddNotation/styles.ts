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
  Task
} from '../../styles/Icons';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: absolute;

  padding-left: 8px;
  width: 350px;
  margin-top: 100px;
  border: 1px solid var(--secondary);
  border-radius: 8px;

  @media (min-width: 500px) {
    width: 450px;
    margin-left: 50px;
  }
  @media (min-width: 990px) {
    margin-left: 150px;
  }
`;

export const MemberSelection = styled.select`
  width: 250px;
  height: 64px;

  margin-left: 8px;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
`;

export const TimeStampArea = styled.div`
  width: 334px;
  height: 64px;

  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;

  @media (min-width: 500px) {
    width: 434px;
  }
`;

// Parte para inserir o instante de início
export const TimeStamp = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  
  > p {
    font-size: 16px;
    color: var(--white);
  }
`;

//! CSS dos inputs de TimeStampArea ;)
const inputLabelCSS = css`
  width: 28px;
  height: 22px;

  color: var(--white-text);

  font-size: 16px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const StartDay = styled.input`
  margin-left: 4px;
  ${inputLabelCSS}
`;
export const StartMonth = styled.input`
  margin-left: 4px;
  margin-right:4px;
  ${inputLabelCSS}
`;
export const StartYear = styled.input`
  margin-left: 4px;
  margin-right: 16px;
  ${inputLabelCSS}
`;
export const StartHour = styled.input`
  margin-left: 16px;
  ${inputLabelCSS}
`;
export const StartMinutes = styled.input`
  margin-left: 4px;
  ${inputLabelCSS}
`;

// Duração
export const Duration = styled.div`
  display: flex;
  align-items: center;
  
  >h4 {
    font-size: 18px;
    color: var(--white);
    font-weight: 500;
  }
  > p {
    font-size: 16px;
    color: var(--white);
  }
`;
export const HoursInput = styled.input`
  margin-left: 16px;
  ${inputLabelCSS}
`;
export const MinutesInput = styled.input`
  margin-left: 4px;
  ${inputLabelCSS}
`;

// Parte inferior
export const MemberDescriptionInput = styled.textarea`
  width: 336px;
  height: 150px;

  color: var(--white-text);

  font-size: 16px;
  padding: 8px;

  resize: none;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }

  @media (min-width: 500px) {
    width: 434px;
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
  bottom: -48px;

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

  @media (min-width: 990px) {
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

  @media (min-width: 990px) {
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

  @media (min-width: 990px) {
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

//Ícones do menu lateral
const iconCSSMenuBar = css`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const NotationIcon = styled(AddAlarm)`${iconCSSMenuBar}`;
export const TaskDoneIcon = styled(Task)`${iconCSSMenuBar}`;
export const SDRIcon = styled(HeadsetMic)`${iconCSSMenuBar}`;
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

export const TaskDoneBottomIcon = styled(Task)`${iconCSSMenuBar}`;
export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;