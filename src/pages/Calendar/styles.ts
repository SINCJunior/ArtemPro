import styled, { css } from "styled-components";

import { 
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
  AddAlarm,
  HeadsetMic, 
  Menu, 
  CalendarToday,
  Task
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  position: absolute;

  top: 100px;
  left: 120px;
  
  height: 590px;
  width: 2px;
  background: var(--white);

  @media (min-width: 500px) {
    margin-left: 116px;
  }
  @media (min-width: 960px) {
    margin-left: 250px;
  }
`;

const eventCSS = css`
  display: flex;
  align-items: center;
  position: absolute;

  height: 80px;
  width: 60vw;
  margin-bottom: 100px;

  > p {
    position: absolute;
    color: var(--white);
    left: -100px;

    @media (min-width: 960px) {
      left: -110px;
    }
  }

  > h3 {
    position: absolute;
    left: 24px;
    padding: 8px;
    border-radius: 8px;
  }
`;

export const Event = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-dark-color);
    color: var(--white-text);
  }
`;

export const Event2 = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-beige);
    color: var(--primary);
  }
  top: 100px;
`;

export const Event3 = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-beige);
    color: var(--primary);
  }
  top: 200px;
`;

export const Event4 = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-beige);
    color: var(--primary);
  }
  top: 300px;
`;

export const Event5 = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-beige);
    color: var(--primary);
  }
  top: 400px;
`;

export const Event6 = styled.div`
  ${eventCSS};
  > h3 {
    background: var(--sinc-beige);
    color: var(--primary);
  }
  top: 500px;
`;

const BallIndicatorCSS = css`
  display: flex;
  position: absolute;
  left: -14px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 6px solid var(--primary);
`;

export const BallIndicator = styled.div`
  ${BallIndicatorCSS};
  background: var(--sinc-dark-color);
`;

export const BallIndicator2 = styled.div`
  ${BallIndicatorCSS};
  background: var(--sinc-beige);
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

export const TaskDoneBottomIcon = styled(Task)`${iconCSSMenuBar}`;
export const NotationBottomIcon = styled(AddAlarm)`${iconCSSBottomBar}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSSBottomBar}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;