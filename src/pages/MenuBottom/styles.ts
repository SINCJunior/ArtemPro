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
  Rocket,
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
  position: absolute;

  top: 80px;
  left: 16px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;

  > span {
    margin-left: 8px;
    font-size: 19px;
    color: var(--white);
  }

`;

export const DirexSide = styled.div`
  padding-top: 16px;
  border-top: 1px solid var(--secondary);
`;

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

export const ProfileIcon = styled(AccountCircle)`
  ${iconCSS};
  margin-right: 16px;
`;
export const ProfessorsIcon = styled(Analyse)`${iconCSS}`;
export const CloudIcon = styled(CloudQueue)`${iconCSS}`;
export const PerformanceIcon = styled(InsertChartOutlined)`${iconCSS}`;
export const DirexIcon = styled(Rocket)`${iconCSS}`;
export const TaskDoneIcon = styled(Task)`${iconCSS}`;

export const NotationBottomIcon = styled(AddAlarm)`${iconCSS}`;
export const SDRBottomIcon = styled(HeadsetMic)`${iconCSS}`;
export const MuralBottomIcon = styled(NotificationsNone)`${iconCSS}`;
export const CalendarBottomIcon = styled(CalendarToday)`${iconCSS}`;
export const MenuBottomIcon = styled(Menu)`${iconCSS}`;