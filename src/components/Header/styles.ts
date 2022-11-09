import styled from "styled-components";

import { AccountCircle } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--secondary);
  position: absolute;

  display: flex;
  justify-content: center;
  z-index: 3;
`;

export const Wrapper = styled.div`
  background: var(--secondary);
  width: 100vw;
  height: 64px;

  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--white);
`;

export const LeftWrapper = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
`;

export const ArtemProLogo = styled.img`  
  margin: 8px 0 0 16px;
  height: 48px;
`;

export const VerticalBar = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    width: 1px;
    height: 48px;
    margin-top: 8px;
    background: var(--white);
  }
`;

export const SincLogo = styled.img`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    height: 64px;
  }
`;

export const ProfileIcon = styled(AccountCircle)`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);
  margin-right: 16px;
  
  &:hover,
  &.active {
    fill: var(--sinc-light-color);
  }
`;