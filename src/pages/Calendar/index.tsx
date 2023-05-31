import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";

import {
	Container,
	Wrapper,
	Event,
	Event2,
	Event3,
	Event4,
	Event5,
	Event6,
	BallIndicator,
	BallIndicator2,
	BlackBar,
} from "./styles";

const Calendar: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Calendário</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<Event>
					<p>27/10/2022</p>
					<BallIndicator />
					<h3>RG presencial às 9h</h3>
				</Event>
				<Event2>
					<p>31/10/2022</p>
					<BallIndicator2 />
					<h3>Início da CapaSINCtação</h3>
				</Event2>
				<Event3>
					<p>02/11/2022</p>
					<BallIndicator2 />
					<h3>Final da CapaSINCtação</h3>
				</Event3>
				<Event4>
					<p>17/11/2022</p>
					<BallIndicator2 />
					<h3>
						Não sei mais o que botar lalalal lalalalla lalalalal
						allalalala allalalal
					</h3>
				</Event4>
				<Event5>
					<p>17/11/2022</p>
					<BallIndicator2 />
					<h3>Não sei mais o que botar</h3>
				</Event5>
				<Event6>
					<p>17/11/2022</p>
					<BallIndicator2 />
					<h3>Não sei mais o que botar</h3>
				</Event6>
				<BlackBar />
			</Wrapper>
		</Container>
	);
};

export default Calendar;
