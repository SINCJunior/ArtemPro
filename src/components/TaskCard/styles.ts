import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  border-radius: 8px;
  
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-top: 32px solid rgba(230, 236, 245, 0.5);
  cursor: grab;
  
  > h3 {
    color: var(--primary );
  }
  
  > h4 {
    font-size: 18px;
    margin: 16px;
    font-weight: 500;
    margin-top: 16px;
    width: 90%;
    overflow-y: scroll; 
    color: var(--primary );
  }
  
  @media (min-width: 500px) {
    width: 20vw;
  }
  
  @media (min-width: 960px) {
    width: 12vw;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 90%;
  margin: 0 16px;
  flex-direction: row;
  margin-top: -26px;
  justify-content: space-between;
`;