import styled from "styled-components";

import { Pulse } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    position: absolute;

    flex-direction: column;
    align-items: center;

    top: 72px;
    right: 8px;
    padding: 8px 0;

    width: 300px;
    height: 92vh;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > h1 {
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ThisWeekActivity = styled.div`
  width: 300px;
`;

export const PulseIcon = styled(Pulse)`
  width: 32px;
  height: 32px;
  color: var(--white);
  margin-right: 16px;
`;

export const HoursPerMember = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px;
  border-bottom: 1px solid var(--secondary);

  > p {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const LastWeekActivity = styled.div`
  width: 300px;
  margin-top: 32px;
`;