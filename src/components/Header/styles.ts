import styled from "styled-components";

import { AccountCircle, CloseCircle } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--secondary);
  position: absolute;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background: var(--secondary);
  z-index: 1;
  width: 100vw;
  height: 64px;

  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--white);
`;

export const AlertMessage = styled.div`
  display: none;

  &.active{
    display: flex;
    position: fixed;
    background: var(--white);
    height: 64px;
    width: 400px;
    border-radius: 8px;
    z-index: 2;
    align-items: center;
    overflow-y: scroll;
  }

  > h3 {
    color: var(--sinc-light-color);
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 4px;
    left: 4px;
  }

  > p {
    color: var(--primary);
    font-size: 16px;
    font-weight: 400;
    position: absolute;
    top: 24px;
    left: 4px;
  }
`;

export const ArtemProLogo = styled.img`  
  position: fixed;
  top: 8px;
  left: 16px;
  height: 48px;
`;

export const CloseButton = styled(CloseCircle)`
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 3;
  top: 4px;
  right: 4px;

  cursor: pointer;

  color: var(--sinc-light-color);    
  
  &:hover {
    color: var(--sinc-button-hover);
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