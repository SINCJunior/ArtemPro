import React, { useState } from "react";

import {
	Container,
	Header,
	TeachersName,
	Contact,
	PhoneNumber,
	Email,
	ActuationArea,
	Historic,
	AddTeacherButton,
} from "./styles";

const AddPartnerTeachersArea: React.FC = () => {
	const [isShowToDirexsActive, setIsShowToDirexsActive] = useState(true);

	return (
		<Container className={isShowToDirexsActive ? "" : "active"}>
			<Header>
				<TeachersName placeholder="Nome do professor" />
			</Header>
			<Contact>
				<PhoneNumber placeholder="(51) 98765-4321" />
				<Email placeholder="email@email.com" />
			</Contact>
			<ActuationArea placeholder="Área de atuação" />
			<Historic placeholder="Histórico de contato" />
			<AddTeacherButton>
				<p>Adicionar</p>
			</AddTeacherButton>
		</Container>
	);
};

export default AddPartnerTeachersArea;
