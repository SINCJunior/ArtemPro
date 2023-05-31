import React from "react";
import { Helmet } from "react-helmet";

import teamwork from "../../assets/teamwork.png";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";

import { Container, Wrapper, ConstructionImg, Warning } from "./styles";

const ConstructionPage: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Em construção</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<ConstructionImg src={teamwork} />
				<Warning>
					<h1>Calma, time!</h1>
					<p>
						Em breve estará pronto
						<br />
						para você usar...
					</p>
				</Warning>
			</Wrapper>
		</Container>
	);
};

export default ConstructionPage;
