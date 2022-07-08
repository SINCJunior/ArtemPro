import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  left: 8%;

  @media (min-width: 500px) {
    left: 36%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  margin-top: 55px;

  > h3 {
    font-size: 20px;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 8px;
  }
`;

export const Warning = styled.h2`
  font-size: 24px;
color: var(--white);
  margin-bottom: 16px;
`;

const retirement_input_CSS = css`
  width: 340px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  margin-bottom: 32px;
  padding-left: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;

export const Member_name_input = styled.input`${retirement_input_CSS}`;
export const CPF_input = styled.input`${retirement_input_CSS}`;
export const RG_input = styled.input`${retirement_input_CSS}`;
export const UFRGS_card_input = styled.input`${retirement_input_CSS}`;
export const Start_date_input = styled.input`${retirement_input_CSS}`;
export const End_date_input = styled.input`${retirement_input_CSS}`;
export const Position_worked = styled.textarea`
  width: 336px;
  height: 100px;
  margin-bottom: 60px;

  color: var(--white-text);
  background: var(--secondary);
  border-radius: 4px;

  font-size: 16px;
  padding: 8px;

  resize: none;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;

export const Confirm_retirement_button = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  bottom: 10px;
  right: 0;

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