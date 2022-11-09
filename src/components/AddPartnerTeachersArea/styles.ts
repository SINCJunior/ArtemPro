import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 336px;
  height: 336px;
  border-radius: 4px;
  background: var(--secondary);
  padding: 8px;

  &.active {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--white);
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--white);
`;

//! CSS dos inputs
const inputCSS = css`
  width: 320px;
  height: 24px;

  color: var(--white-text);

  font-size: 16px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const TeachersName = styled.input`${inputCSS}`;
export const PhoneNumber = styled.input`
  ${inputCSS};
  margin-top: 8px;
  margin-bottom: 4px;  
`;
export const Email = styled.input`
  ${inputCSS};
  margin-bottom: 4px;  
`;

//! CSS das textareas
const textareaCSS = css`
  width: 320px;
  height: 10px;

  color: var(--white-text);

  font-size: 16px;
  padding: 8px;
  height: 90px;

  resize: none;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;
export const ActuationArea = styled.textarea`
  ${textareaCSS};
  border-bottom: 1px solid var(--white);
`;
export const Historic = styled.textarea`${textareaCSS}`;


export const AddTeacherButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  left: 200px;
  top: 16px;

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