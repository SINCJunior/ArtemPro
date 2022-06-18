import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 336px;
  height: 336px;
  border-radius: 8px;

  background: var(--secondary);
  position: relative;
`;


// Parte superior
export const Participating_members_area = styled.div`
  width: 336px;
  height: 72px;

  display: flex;
  align-items: center;
`;

export const Time_stamp_area = styled.div`
  width: 336px;
  height: 64px;

  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;

// Parte para inserir o instante de início
export const Time_stamp = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  
  > p {
    font-size: 16px;
    color: var(--white);
  }
`;

//! CSS dos inputs de Time_stamp_area ;)
const input_label_CSS = css`
  width: 28px;
  height: 22px;

  color: var(--white-text);

  font-size: 16px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const Start_day = styled.input`
  margin-left: 4px;
  ${input_label_CSS}
`;
export const Start_month = styled.input`
  margin-left: 4px;
  margin-right:4px;
  ${input_label_CSS}
`;
export const Start_year = styled.input`
  margin-left: 4px;
  margin-right: 16px;
  ${input_label_CSS}
`;
export const Start_hour = styled.input`
  margin-left: 16px;
  ${input_label_CSS}
`;
export const Start_minutes = styled.input`
  margin-left: 4px;
  ${input_label_CSS}
`;

// Duração
export const Duration = styled.div`
  display: flex;
  align-items: center;
  
  >h4 {
    font-size: 18px;
    color: var(--white);
    font-weight: 500;
  }
  > p {
    font-size: 16px;
    color: var(--white);
  }
`;
export const Hours_input = styled.input`
  margin-left: 16px;
  ${input_label_CSS}
`;
export const Minutes_input = styled.input`
  margin-left: 4px;
  ${input_label_CSS}
`;

// Parte inferior
export const Member_description_input = styled.textarea`
  width: 336px;
  height: 150px;

  color: var(--white-text);

  font-size: 16px;
  padding: 8px;

  resize: none;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const Add_notation_button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  right: 8px;
  bottom: 8px;

  background: var(--sinc-light-color);
  cursor: pointer;

  > p {
    color: var(--primary);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--sinc-button-hover);
  }
`;