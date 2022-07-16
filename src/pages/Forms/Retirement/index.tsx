import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  Container,
  Wrapper,
  Warning,
  MemberNameInput,
  CPFInput,
  RGInput,
  UFRGSCardInput,
  StartDateInput,
  EndDateInput,
  PositionWorked,
  ActivePopUp,
  ConfirmPopUpBackground,
  PopUpContainer,
  PopUp,
  BottomButtons,
  CancelButton,
  ConfirmRetirementButton,
} from './styles';

const Retirement: React.FC = () => {
  //Active confirm popup
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }


  return (
    <Container>
      <Helmet>
        <title>Desligamento</title>
      </Helmet>
      <Wrapper>
        <Warning>RH: Desligamento</Warning>
        <h3>Nome completo:</h3>
        <MemberNameInput type='text' placeholder='Nome completo' />
        <h3>CPF (sem pontos e traços):</h3>
        <CPFInput type='text' placeholder='CPF' />
        <h3>RG (sem pontos e traços):</h3>
        <RGInput type='text' placeholder='RG' />
        <h3>Cartão UFRGS:</h3>
        <UFRGSCardInput type='text' placeholder='Cartão UFRGS' />
        <h3>Data de início na Sinc</h3>
        <StartDateInput type='text' placeholder='DD/MM/AAAA' />
        <h3>Data para desligamento</h3>
        <EndDateInput type='text' placeholder='DD/MM/AAAA' />
        <h3>Cargos que ocupou</h3>
        <PositionWorked placeholder='Cargos que ocupou' />
        <ActivePopUp onClick={toggleClass}><p>Enviar</p></ActivePopUp>

        <ConfirmPopUpBackground className={isActive? 'active' : ''} />
        <PopUpContainer className={isActive? 'active' : ''}>
          <PopUp>
            <h2>Você irá mesmo se desligar?</h2>
            <p>Essa ação não terá volta!</p>
          </PopUp>
          <BottomButtons>
            <Link to='/apontamento'>
              <CancelButton><p>Cancelar</p></CancelButton>
            </Link>
            <Link to='/apontamento'>
              <ConfirmRetirementButton><p>Enviar</p></ConfirmRetirementButton>
            </Link>
          </BottomButtons>
        </PopUpContainer>
      </Wrapper>
    </Container>
  )
}

export default Retirement;