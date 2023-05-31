import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";
import PartnerTeachersArea from "../../components/PartnerTeachersArea";
import AddPartnerTeachersArea from "../../components/AddPartnerTeachersArea";

import { Container, Wrapper } from "./styles";

const Profile: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Professores parceiros</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<AddPartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
				<PartnerTeachersArea />
			</Wrapper>
		</Container>
	);
};

export default Profile;
