import styled from "styled-components";

import { FilterAlt } from '../../styles/Icons';


export const Container = styled.div`
  margin-top: 64px;
  padding: 8px;
  margin-left: 16px;

  //! Tabela de resolução:
  //! 0 até 500px (celular): padrão
  //! 501 até 960px (tablet na vertical): 1° @media
  //! 961 até 1300px (tablet na horizontal): 2° @media
  //! 1300 até 1650px (monitores pequenos - laptop): 3º @media
  //! maior do que 1651px (monitores grandes - PC): 4° @media
  @media (min-width: 500px) {
    margin-left: 116px;
  }

  @media (min-width: 960px) {
    margin-left: 316px;
  }

  @media (min-width: 1300px) {
    margin-left: 316px;
  }

  @media (min-width: 1650px) {
    margin-left: 316px;
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

export const Notation_type_menu = styled.div`
  width: 280px;
  height: 32px;

  background: var(--secondary);
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