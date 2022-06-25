import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: 1px solid var(--secondary);
  border-radius: 3px;
  color: inherit;
  display: flex;
  font-size: inherit;
  width: 280px;
  padding: 8px;

  &:after {
    content: "";
    border-bottom: 1px solid var(--white);
    border-right: 1px solid var(--white);
    height: 0.5em;
    right: 16px;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: var(--primary);
  border: 1px solid var(--secondary);
  display: ${props => (props.active ? "block" : "none")};
  margin: 0;
  min-width: 180px;
  padding: 0;
  position: absolute;
  li {
    list-style: none;
    color: var(--white);
    margin: 0;
    text-decoration: none;
    a,
    a:link {
      display: block;
      padding: 0.5em;
      &:hover {
        background-color: var(--select-dropdown);
      }
    }
  }
`;
