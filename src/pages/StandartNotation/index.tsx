import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";
import NotationArea from "../../components/NotationArea";
import TimeAnalysis from "../../components/TimeAnalysis";

import { Container, Wrapper } from "./styles";

const StandartNotation: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Apontamento</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<NotationArea />
				<TimeAnalysis />
			</Wrapper>
		</Container>
	);
};

export default StandartNotation;
