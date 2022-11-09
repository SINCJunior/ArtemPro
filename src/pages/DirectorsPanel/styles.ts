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
  Task,
  UserPlus,
  UserCheck,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '../../styles/Icons';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;

  width: 100vw;
  top: 80px;
  padding-bottom: 48px;

  align-items: center;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  
  @media (min-width: 1054px) {
    margin-left: 300px;
    grid-gap: 48px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1336px) {
    grid-gap: 64px;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1650px) {
    grid-gap: 64px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const DirexItem = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    padding-bottom: 8px;
    font-size: 24px;
    color: var(--white);
  }
  > p {
    padding-bottom: 8px;
    font-size: 16px;
    color: var(--white);
    font-family: 400;
  }
`;

export const ExitArea = styled.div`
  &.active {
    width: 100vw;
    height: 100vh;
    position: fixed;

    top: 0;
    left: 0;
    z-index: 1;

    background: rgb(255, 255, 255, 0.2);
  }
`;

export const WrapperDDM = styled.div`
  width: 250px;
  height: 64px;
`;

export const DropMenuButton = styled.div`
  background: var(--secondary);
  &.active {
    background: pink;
  }
  border-radius: 4px;
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  cursor: pointer;

  width: 340px;
  height: 36px;

  > p {
    font-size: 0;
    &.active {
      color: var(--white);
      opacity: 60%;
      font-size: 16px;
      position: absolute;
      left: 8px;
    }
  }

`;

const PersonIconCSS = css`
  display: flex;
  position: absolute;
  right: 8px;
  width: 32px;
  height: 32px;
  fill: var(--white);
  cursor: pointer;
`;

export const PersonIcon = styled(UserPlus)`
  ${PersonIconCSS};
  
  &:hover {
    fill: var(--sinc-light-color);
  }
  &.active {
    display: none;
  }
`;

export const PersonCheck = styled(UserCheck)`
  display: none;

  &.active {
    ${PersonIconCSS};

    &:hover {
    fill: var(--sinc-light-color);
  }
  }
`;

export const SelectionArea = styled.div`
  display: none;

  &.active {
    position: relative;
    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    overflow-x: hidden;
    height: 400px;
    width: 316px;
    
    border: 2px solid var(--secondary);
    background: var(--primary);
    border-radius: 8px;
    z-index: 2;

    @media (min-width: 500px) {
      width: 416px;
    }
  }
`;

export const MemberSelection = styled.div`
  > p {
    font-size: 0;
  }
  &.active {
    margin: 0 10px 0 8px;
    border-bottom: 1px solid var(--white);
    padding-top: 12px;
    cursor: pointer;

    &:hover{
      background: rgb(139, 9, 36, 0.4);
    }

    > p {
      width: 298px;
      font-size: 20px;
      padding-bottom: 12px;
    
      left: 48px;
      position: relative;
      color: var(--white-text);
    
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    
      @media (min-width: 500px) {
        width: 398px;
        max-width: 300px;
      }
    }
  }
`;

export const FilledRadioButton = styled(RadioButtonUnchecked)`
  display: flex;
  position: absolute;
  left: 16px;
  width: 24px;
  height: 24px;
  fill: var(--white-text);
  cursor: pointer;

  &:hover {
    fill: var(--sinc-light-color);
  }
  &.active {
    display: none;
  }
`;

export const EmptyRadioButton = styled(RadioButtonChecked)`
  display: none;

  &.active {
    display: flex;
    position: absolute;
    left: 16px;
    width: 24px;
    height: 24px;
    fill: var(--sinc-light-color);
    cursor: pointer;

    &:hover {
      fill: var(--sinc-dark-color);
    }
  }
`;


export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -12px;
`;

export const SmallSelectInput = styled.select`
  width: 165px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;
`;

export const SelectInput = styled.select`
  width: 340px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;
`;

export const DirexButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
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
`;

export const SmallDirexInput = styled.input`
  width: 165px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;

export const DirexInput = styled.input`
  width: 340px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
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
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSSBottomBar}`;
export const MenuBottomIcon = styled(Menu)`${iconCSSBottomBar}`;