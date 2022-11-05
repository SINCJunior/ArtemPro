import React, { useState } from 'react';

import { Container, CloseButton } from './styles';

const SincAlerts: React.FC = () => {
  //Set Close Alerts
  const [isCloseAlertsActive, setIsCloseAlertsActive] = useState(true);

  return(
    <Container className={isCloseAlertsActive? 'active' : ''}>
      <h3>Comercial</h3>
      <CloseButton onClick={() => setIsCloseAlertsActive(false)}/>
      <p>Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial Mensagem do comercial</p>
    </Container>
  )
};

export default SincAlerts;