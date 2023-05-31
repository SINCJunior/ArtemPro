import React from "react";

import {
	Container,
	TimeStampArea,
	TimeStamp,
	StartDay,
	StartMonth,
	StartYear,
	StartHour,
	StartMinutes,
	Duration,
	HoursInput,
	MinutesInput,
	MemberDescriptionInput,
	AddNotationButton,
} from "./styles";

// TODO: implementar uma filtragem de texto nos inputs do "Time_stamp"
// TODO: para aceitar somente números (preguiça de fazer agr)

const AddNotationBox: React.FC = () => {
	return (
		<Container>
			<TimeStampArea>
				<TimeStamp>
					<StartDay type="text" placeholder="DD" maxLength={2} />
					<p>/</p>
					<StartMonth type="text" placeholder="MM" maxLength={2} />
					<p>/</p>
					<StartYear type="text" placeholder="AA" maxLength={2} />
					<p>às</p>
					<StartHour type="text" placeholder="HH" maxLength={2} />
					<p>:</p>
					<StartMinutes type="text" placeholder="MM" maxLength={2} />
				</TimeStamp>
				<Duration>
					<h4>Duração:</h4>
					<HoursInput type="text" placeholder="HH" maxLength={2} />
					<p>:</p>
					<MinutesInput type="text" placeholder="MM" maxLength={2} />
				</Duration>
			</TimeStampArea>
			<MemberDescriptionInput placeholder="Descrição" />
			<AddNotationButton>
				<p>Adicionar</p>
			</AddNotationButton>
		</Container>
	);
};

export default AddNotationBox;
