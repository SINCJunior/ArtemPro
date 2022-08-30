import styled from "styled-components";

import { AccountCircle } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--secondary);
  position: absolute;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
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

export const RightSpace = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const TaskScore = styled.p`
  font-size: 18px;
  color: var(--white);
  font-weight: bold;
  margin-right: 16px;
`;

export const ArtemProLogo = styled.img`  
  top: 0;
  margin-left: 16px;
  height: 48px;
`;

export const ProfileIcon = styled(AccountCircle)`
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