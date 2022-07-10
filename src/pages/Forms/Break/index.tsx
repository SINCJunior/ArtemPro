import React from 'react';
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
  BreakReason,
  ConfirmBreakButton
} from './styles';

const Break: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Afastamento</title>
      </Helmet>
      <Wrapper>
        <Warning>RH: Afastamento</Warning>
        <h3>Nome completo:</h3>
        <MemberNameInput type='text' placeholder='Nome completo' />
        <h3>CPF (sem pontos e traços):</h3>
        <CPFInput type='text' placeholder='CPF' />
        <h3>RG (sem pontos e traços):</h3>
        <RGInput type='text' placeholder='RG' />
        <h3>Cartão UFRGS:</h3>
        <UFRGSCardInput type='text' placeholder='Cartão UFRGS' />
        <h3>Data de início de afastamento</h3>
        <StartDateInput type='text' placeholder='DD/MM/AAAA' />
        <h3>Data de término do afastamento</h3>
        <EndDateInput type='text' placeholder='DD/MM/AAAA' />
        <h3>Motivo do afastamento</h3>
        <BreakReason placeholder='Motivo do afastamento' />
        <Link to='/apontamento'>
          <ConfirmBreakButton><p>Enviar</p></ConfirmBreakButton>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Break;