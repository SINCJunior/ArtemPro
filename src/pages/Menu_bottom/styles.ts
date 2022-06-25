import styled, { css } from "styled-components";
import {
  AccountCircle,
  AddAlarm,
  Analyse,
  CalendarToday,
  CloudQueue,
  HeadsetMic,
  InsertChartOutlined,
  Menu,
  NotificationsNone,
  Rocket
} from '../../styles/Icons';


export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Sinc_logo = styled.img`
  top: 0;
  margin-left: 16px;
  height: 48px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  top: 80px;
  left: 16px;
`;

export const Menu_item = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;

  > span {
    margin-left: 8px;
    font-size: 19px;
    color: var(--white);
  }

`;

export const Direx_side = styled.div`
  padding-top: 16px;
  border-top: 1px solid var(--secondary);
`;

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

const iconCSS = css`
  width: 32px;
  height: 32px;
  cursor: pointer;

  fill: var(--white);

  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const Profile_icon = styled(AccountCircle)`
  ${iconCSS};
  margin-right: 16px;
`;
export const Professors_icon = styled(Analyse)`${iconCSS}`;
export const Cloud_icon = styled(CloudQueue)`${iconCSS}`;
export const Performance_icon = styled(InsertChartOutlined)`${iconCSS}`;
export const Direx_icon = styled(Rocket)`${iconCSS}`;

export const Notation_bottom_icon = styled(AddAlarm)`${iconCSS}`;
export const SDR_bottom_icon = styled(HeadsetMic)`${iconCSS}`;
export const Mural_bottom_icon = styled(NotificationsNone)`${iconCSS}`;
export const Calendar_bottom_icon = styled(CalendarToday)`${iconCSS}`;
export const Menu_bottom_icon = styled(Menu)`${iconCSS}`;