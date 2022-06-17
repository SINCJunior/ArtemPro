import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 150px;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const Construction_img = styled.img`
  height: 200px;

  @media (min-width: 500px) {
    margin-right: 50px;
  }
`;

export const Warning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;

  > h1 {
    font-size: 34px;
    color: var(--sinc-light-color);
  }
  > p {
    padding-top: 21px;
    font-size: 21px;
    color: var(--white);
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`;

export const Back_to_home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;

  width: 120px;
  height: 32px;
  border-radius: 16px;

  border: 2px solid var(--sinc-light-color);
  background: var(--primary);
  cursor: pointer;

  > p {
    color: var(--sinc-light-color);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    border: 2px solid var(--white);
    > p {
      color: var(--white);
    }
  }
`;