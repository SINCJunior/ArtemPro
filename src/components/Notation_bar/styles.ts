import styled from "styled-components";

import { FilterAlt } from '../../styles/Icons';


export const Container = styled.div`
  justify-content: center;
  padding: 16px;

  margin-top: 8vh;
`;


//Filtro e drop_down_menu
export const Settings_bar = styled.div`
  width: 336px;
  padding-bottom: 16px;

  display: flex;
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


//Histórico de apontamentos
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1364px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (min-width: 1780px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;