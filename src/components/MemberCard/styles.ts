import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  border-radius: 8px;
  
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  
  border-top: 32px solid rgba(230, 236, 245, 0.5);
  
  > h3 {
    color: var(--primary );
    margin-top: -26px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: center;
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