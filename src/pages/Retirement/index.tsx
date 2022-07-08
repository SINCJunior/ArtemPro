import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  Container,
  Wrapper,
  Warning,
  Member_name_input,
  CPF_input,
  RG_input,
  UFRGS_card_input,
  Start_date_input,
  End_date_input,
  Position_worked,
  Confirm_retirement_button
} from './styles';

const Retirement: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Desligamento</title>
      </Helmet>
      <Wrapper>
        <Warning>RH: Desligamento</Warning>
        <h3>Nome completo:</h3>
        <Member_name_input type='text' placeholder='Nome completo' />
        <h3>CPF (sem pontos e traços):</h3>
        <CPF_input type='text' placeholder='CPF' />
        <h3>RG (sem pontos e traços):</h3>
        <RG_input type='text' placeholder='RG' />
        <h3>Cartão UFRGS:</h3>
        <UFRGS_card_input type='text' placeholder='Cartão UFRGS' />
        <h3>Data de início na Sinc</h3>
        <Start_date_input type='text' placeholder='DD/MM/AAAA' />
        <h3>Data para desligamento</h3>
        <End_date_input type='text' placeholder='DD/MM/AAAA' />
        <h3>Cargos que ocupou</h3>
        <Position_worked placeholder='Cargos que ocupou' />
        <Link to='/apontamento'>
          <Confirm_retirement_button><p>Enviar</p></Confirm_retirement_button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Retirement;