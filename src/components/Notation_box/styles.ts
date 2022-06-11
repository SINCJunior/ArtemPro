import styled from "styled-components";

export const Container = styled.div`
  width: 336px;
  height: 336px;

  margin-bottom: 16px;
`;

export const Participating_members_area = styled.div`
  width: 336px;
  height: 72px;

  background: var(--secondary);

  display: flex;
  align-items: center;
`;

export const Participating_members = styled.div`
  width: 36px;
  height: 36px;

  border-radius: 100%;
  margin-left: 8px;
  background: var(--white);
`;

export const Time_stamp_area = styled.div`
  width: 336px;
  height: 64px;

  background: var(--secondary);

  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;

export const Time_stamp = styled.p`
  font-size: 18px;
  color: var(--white);
  margin-bottom: 4px;
`;

export const Duration = styled.p`
  font-size: 18px;
  color: var(--white);
`;

export const Member_description_area = styled.div`
  width: 336px;
  height: 216px;

  background: var(--secondary);

  display: flex;
`;

export const Member_description = styled.p`
  font-size: 16px;
  color: var(--white);

  margin: 8px;
`;
