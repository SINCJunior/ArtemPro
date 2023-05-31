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
	RecognitionCategory,
	OmbudsmanCategory,
	OmbudsmanWho,
	OmbudsmanReason,
	ConfirmOmbudsmanButton,
} from "./styles";

const Ombudsman: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Ouvidoria</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<Warning>RH: Ouvidoria</Warning>
				<h3>
					Deseja que seu reconhecimento seja exposto anonimamente?
				</h3>
				<RecognitionCategory>
					<option>Sim, não quero me identificar</option>
					<option>Não, quero me identificar</option>
				</RecognitionCategory>
				<h3>Para quem é o seu Feedback?</h3>
				<OmbudsmanCategory>
					<option></option>
					<option>Diretoria</option>
					<option>Consultores</option>
					<option>Trainee's</option>
					<option>Outro</option>
				</OmbudsmanCategory>
				<h3>Alguém em específico? (Caso tenha escolhido "Outro")</h3>
				<OmbudsmanWho />
				<h3>O que você gostaria de dizer sobre essa(s) pessoa(s)?</h3>
				<OmbudsmanReason placeholder="Feedback" />
				<Link to="/apontamento">
					<ConfirmOmbudsmanButton>
						<p>Enviar</p>
					</ConfirmOmbudsmanButton>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Ombudsman;
