import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";
import MemberCard from "../../components/MemberCard";

import { Container, Wrapper } from "./styles";

const Tasks: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Tarefas</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<MemberCard />
				<MemberCard />
				<MemberCard />
				<MemberCard />
				<MemberCard />
				<MemberCard />
				<MemberCard />
				<MemberCard />
			</Wrapper>
		</Container>
	);
};

export default Tasks;
