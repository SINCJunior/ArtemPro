import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "../../../components/Header";
import SidebarMenu from "../../../components/SidebarMenu";
import BottomMenu from "../../../components/BottomMenu";
import SincAlerts from "../../../components/SincAlerts";

import {
	Container,
	Wrapper,
	Warning,
	MemberNameInput,
	DateInput,
	AbsenceCategory,
	AbsenceReason,
	ConfirmAbsenceButton,
} from "./styles";

const Absence: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Afastamento</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<Warning>RH: Afastamento</Warning>
				<h3>Nome completo:</h3>
				<MemberNameInput type="text" placeholder="Nome completo" />
				<h3>Data da reunião que você irá faltar:</h3>
				<DateInput type="text" placeholder="DD/MM/AAAA" />
				<h3>Categoria de afastamento:</h3>
				<AbsenceCategory placeholder="Categoria">
					<option></option>
					<option>Doença</option>
					<option>Prova</option>
					<option>Viagem</option>
					<option>Bolsa/Estágio</option>
					<option>À serviço da Sinc</option>
					<option>Outro</option>
				</AbsenceCategory>
				<h3>Motivo da falta:</h3>
				<AbsenceReason placeholder="Motivo da falta" />
				<Link to="/apontamento">
					<ConfirmAbsenceButton>
						<p>Enviar</p>
					</ConfirmAbsenceButton>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Absence;
