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
  PlayCircle
} from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 350px;
  top: 80px;
  display: flex;
  flex-direction: column;
  position: absolute;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

export const Notation_page = styled.div`
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

//! Side bar menu
export const Sidebar_menu = styled.div`
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

export const Members_side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 16px;

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

export const Direx_side = styled.div`
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

export const Menu_item = styled.button`
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
const iconCSS_menu_bar = css`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const Notation_icon = styled(AddAlarm)`${iconCSS_menu_bar}`;
export const SDR_icon = styled(HeadsetMic)`${iconCSS_menu_bar}`;
export const Mural_icon = styled(NotificationsNone)`${iconCSS_menu_bar}`;
export const Professors_icon = styled(Analyse)`${iconCSS_menu_bar}`;
export const Calendar_icon = styled(CalendarToday)`${iconCSS_menu_bar}`;
export const Cloud_icon = styled(CloudQueue)`${iconCSS_menu_bar}`;
export const Performance_icon = styled(InsertChartOutlined)`${iconCSS_menu_bar}`;
export const Direx_icon = styled(Rocket)`${iconCSS_menu_bar}`;


//! Bottom menu
export const Bottom_menu = styled.div`
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
const iconCSS_bottom_bar = css`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const Notation_bottom_icon = styled(AddAlarm)`${iconCSS_bottom_bar}`;
export const SDR_bottom_icon = styled(HeadsetMic)`${iconCSS_bottom_bar}`;
export const Mural_bottom_icon = styled(NotificationsNone)`${iconCSS_bottom_bar}`;
export const Calendar_bottom_icon = styled(CalendarToday)`${iconCSS_bottom_bar}`;
export const Menu_bottom_icon = styled(Menu)`${iconCSS_bottom_bar}`;



//! Página de cronômetro
export const Pomodoro = styled.div`
  margin-top: 32px;
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
export const Play_icon = styled(PlayCircle)`
  width: 32px;
  height: 32px;
  fill: var(--white);

  cursor: pointer;
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const Member = styled.input`  
  width: 350px;
  height: 72px;
  margin-bottom: 16px;

  color: var(--white-text);
  background: var(--secondary);
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

export const Description = styled.textarea`
  width: 350px;
  height: 150px;
  margin-bottom: 64px;

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

export const Add_notation_button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  right: 8px;
  top: 380px;

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

const warning_CSS = css`
  display: flex;
  flex-direction: row;
  width: 350px;

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
export const First_warning = styled.div`${warning_CSS}`;
export const Second_warning = styled.div`${warning_CSS}`;
export const Third_warning = styled.div`${warning_CSS}`;


const img_CSS = css`
  width: 32px;
  height: 32px;
`;
export const No_smartphones_img = styled.img`${img_CSS}`;
export const Water_img = styled.img`${img_CSS}`;