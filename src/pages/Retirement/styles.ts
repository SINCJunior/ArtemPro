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

export const Changing_time_img = styled.img`
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
