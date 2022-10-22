import styled, { css } from "styled-components";

import {
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
  Task,
  AddAlarm,
  HeadsetMic, 
  NotificationsNone,
  Menu, 
  CalendarToday,
} from '../../styles/Icons';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: grid;
  margin-top: 72px;
  padding: 8px;

  grid-template-columns: 1fr;
  grid-gap: 16px;

  //! Tabela de resolução:
  //! 0 até 499px (celular): padrão
  //! 500 até 959px (tablet na vertical): 1° @media
  //! 960 até 1299px (tablet na horizontal): 2° @media
  //! 1300 até 1649px (monitores pequenos - laptop): 3º @media
  //! maior do que 1650px (monitores grandes - PC): 4° @media
  @media (min-width: 500px) {
    margin-left: 116px;
  }

  @media (min-width: 820px) {
    margin-left: 116px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    margin-left: 316px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    margin-left: 316px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1650px) {
    margin-left: 316px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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

export const TaskDoneBottomIcon = styled(Task)`${iconCSSBottomBar}`;
export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const MuralBottomIcon = styled(NotificationsNone)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;