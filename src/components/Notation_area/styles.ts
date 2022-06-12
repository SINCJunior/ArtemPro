import styled from "styled-components";

import { FilterAlt } from '../../styles/Icons';


export const Container = styled.div`
  display: grid;
  background: red;

  margin-top: 64px;
  /* padding: 8px; */

  /* width: 100vw; */
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;



//Filtro e drop_down_menu
export const Settings_bar = styled.div`
  width: 336px;

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
