import styled, { css } from 'styled-components';

import { 
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
  AddAlarm,
  HeadsetMic, 
  Menu, 
  CalendarToday,
  Task,
  CheckBox,
  CheckBoxOutlineBlank,
} from '../../styles/Icons';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;


export const TargetConfig = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  position: absolute;
  top: 100px;
  left: 40px;

  > h3 {
    color: var(--white-text);
    font-size: 24px;
    font-weight: bold;
    margin-right: 32px;
  }
  > p {
    font-size: 0;
    &.active{
      color: var(--white-text);
      font-size: 20px;
      margin-left: 8px;
    }
  }
 
  @media (min-width: 500px) {
    left: 100px;
  }
  @media (min-width: 960px) {
    left: 40vw;
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

export const Wrapper = styled.div`
  display: none;
  
  &.active {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 160px;
    flex-direction: column;

    @media (min-width: 500px) {
      left: 100px;
    }
    @media (min-width: 960px) {
      left: 40vw;
    }
  }
`;

export const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-bottom: 12px;

  > h3 {
    padding-bottom: 8px;
    font-size: 24px;
    color: var(--white);
  }
  > p {
    padding-bottom: 16px;
    font-size: 20px;
    color: var(--white);
    font-family: 400;
  }
  
  @media (min-width: 500px) {
    width: 500px;
  }
`;

export const SelectInput = styled.select`
  width: 80vw;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;

  @media (min-width: 500px) {
    width: 500px;
  }
`;

export const FeedbackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 40px;
  border-radius: 16px;
  margin-bottom: 24px;

  background: var(--primary);
  border: 2px solid var(--sinc-light-color);
  cursor: pointer;

  > p {
    color: var(--sinc-light-color);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--sinc-button-dark-hover);
  }

  @media (min-width: 500px) {
    width: 500px;
  }
`;

export const BlackBar = styled.div`
  height: 40px;
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

export const TaskDoneBottomIcon = styled(Task)`${iconCSSBottomBar}`;
export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;