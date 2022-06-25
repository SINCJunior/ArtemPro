import styled from "styled-components";

import { FilterAlt } from '../../styles/Icons';


export const Container = styled.div`
  margin-top: 72px;
  padding: 8px;
  margin-left: 16px;

  //! Tabela de resolução:
  //! 0 até 499px (celular): padrão
  //! 500 até 959px (tablet na vertical): 1° @media
  //! 960 até 1299px (tablet na horizontal): 2° @media
  //! 1300 até 1649px (monitores pequenos - laptop): 3º @media
  //! maior do que 1650px (monitores grandes - PC): 4° @media
  @media (min-width: 500px) {
    margin-left: 116px;
  }

  @media (min-width: 960px) {
    margin-left: 300px;
  }

  @media (min-width: 1300px) {
    margin-left: 316px;
  }

  @media (min-width: 1650px) {
    margin-left: 316px;
  }
`;

export const Stopwatch_page = styled.div`
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


//Filtro e drop_down_menu
export const Settings_bar = styled.div`
  width: 336px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Notation_type_menu = styled.select`
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

export const Filter_icon = styled(FilterAlt)`
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


  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;