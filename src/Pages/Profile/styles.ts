import styled, { css } from "styled-components";

import { 
  AccountCircle,
  Analyse,
  CloudQueue,
  InsertChartOutlined,
  Rocket,
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
  display: flex;
  position: absolute;
  flex-direction: column;

  width: 100vw;
  top: 120px;

  align-items: center;
  
  > h3 {
    padding-bottom: 16px;
    font-size: 24px;
    color: var(--white);
  }
`;


export const Header = styled.div`
  background: var(--secondary);
  z-index: 2;
  width: 100vw;
  height: 64px;

  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--white);
`;

export const Sinc_logo = styled.img`  
  top: 0;
  margin-left: 16px;
  height: 48px;
`;

export const Profile_icon = styled(AccountCircle)`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);
  margin-right: 16px;
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;



const input_label_CSS = css`
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

export const Old_pass = styled.input`
  ${input_label_CSS}
`;

export const New_pass = styled.input`
  ${input_label_CSS}
`;

export const Repeat_new_pass = styled.input`
  ${input_label_CSS}
`;

export const Update_info_button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 40px;
  border-radius: 16px;
  margin-top: 16px;

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

export const Retirement_button = styled.p`
  margin-top: 80px;
  color: var(--sinc-dark-color);
  font-size: 20px;
  font-weight: 400;
  
  &:hover {
    color: var(--white);
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

//Ícones do menu lateral
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