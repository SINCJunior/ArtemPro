import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";

import {
	Container,
	Wrapper,
	OldPass,
	NewPass,
	RepeatNewPass,
	UpdateInfoButton,
	Forms,
	RetirementButton,
} from "./styles";

const Profile: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Perfil</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<h3>Editar senha</h3>
				<OldPass type="text" placeholder="Senha antiga" />
				<NewPass type="text" placeholder="Senha nova" />
				<RepeatNewPass
					type="text"
					placeholder="Repita sua senha nova"
				/>
				<UpdateInfoButton>
					<p>Atualizar senha</p>
				</UpdateInfoButton>
				<Forms>
					<h3>Formulários:</h3>
					<Link
						to={"/justificativa-de-falta"}
						style={{ textDecoration: "none" }}
					>
						<RetirementButton>
							· Justificativa de falta
						</RetirementButton>
					</Link>
					<Link to={"/ouvidoria"} style={{ textDecoration: "none" }}>
						<RetirementButton>· Ouvidoria</RetirementButton>
					</Link>
					<Link
						to={"/afastamento"}
						style={{ textDecoration: "none" }}
					>
						<RetirementButton>· Afastamento</RetirementButton>
					</Link>
					<Link
						to={"/desligamento"}
						style={{ textDecoration: "none" }}
					>
						<RetirementButton>· Desligamento</RetirementButton>
					</Link>
				</Forms>
			</Wrapper>
		</Container>
	);
};

export default Profile;
