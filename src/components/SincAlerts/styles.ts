import styled from 'styled-components';

import { CloseCircle } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  &.active{
    display: flex;
    position: fixed;
    bottom: 10vh;
    background: var(--white);
    height: 64px;
    width: 95vw;
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
  
  @media (min-width: 500px) {
    right: 40px;
    
    &.active{
      width: 400px;
    }
  }
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