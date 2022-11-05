import styled, { css } from "styled-components";

import { FilterAlt } from '../../styles/Icons';


export const Container = styled.div`
  margin-top: 72px;
  padding: 8px;
  margin-left: 16px;

  //! Tabela de resolução:
  //! 0 até 499px (celular): padrão
  //! 500 até 989px (tablet na vertical): 1° @media
  //! 990 até 1299px (tablet na horizontal): 2° @media
  //! 1300 até 1689px (monitores pequenos - laptop): 3º @media
  //! maior do que 1690px (monitores grandes - PC): 4° @media
  @media (min-width: 500px) {
    margin-left: 116px;
  }

  @media (min-width: 950px) {
    margin-left: 250px;
  }

  @media (min-width: 1300px) {
    margin-left: 250px;
  }

  @media (min-width: 1690px) {
    margin-left: 250px;
  }
`;

const ButtonPageCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const StopwatchPage = styled.div`
  ${ButtonPageCSS};
  width: 180px;
`;

export const AddNotationPage = styled.div`  
  ${ButtonPageCSS};
  width: 250px;
  margin: 16px 0;

  @media (min-width: 1336px) {
    margin: 0;
  }
`;


//Filtro e drop_down_menu
export const SettingsBar = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1336px) {
    width: 100%;
    margin-bottom: 16px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NotationTypeMenu = styled.select`
  /* width: 280px; */
  width: 336px;
  height: 32px;

  border-radius: 8px;
  padding: 0 8px;

  background: var(--secondary);
  color: var(--white);
  font-size: 16px;
  font-weight: 400;

  > option {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const FilterIcon = styled(FilterAlt)`
  width: 32px;
  height: 32px;

  cursor: pointer;

  fill: var(--white);

  &:hover,
  &.active {
    fill: var(--sinc-light-color)
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 1336px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1690px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;