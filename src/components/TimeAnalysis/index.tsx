import React from "react";

import {
	Container,
	Header,
	ThisWeekActivity,
	PulseIcon,
	HoursPerMember,
	LastWeekActivity,
} from "./styles";

const Time_analysis: React.FC = () => {
	return (
		<Container>
			<ThisWeekActivity>
				<Header>
					<PulseIcon />
					<h1>Atividade dessa semana</h1>
				</Header>
				<HoursPerMember>
					<p style={{ fontWeight: "bold" }}>Total</p>
					<p style={{ fontWeight: "bold" }}>99h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 1</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 2</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 3</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 4</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 5</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 6</p>
					<p>9h 29m</p>
				</HoursPerMember>
			</ThisWeekActivity>

			<LastWeekActivity>
				<Header>
					<PulseIcon />
					<h1>Semana passada</h1>
				</Header>
				<HoursPerMember>
					<p style={{ fontWeight: "bold" }}>Total</p>
					<p style={{ fontWeight: "bold" }}>99h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 1</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 2</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 3</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 4</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 5</p>
					<p>9h 29m</p>
				</HoursPerMember>
				<HoursPerMember>
					<p>Membro 6</p>
					<p>9h 29m</p>
				</HoursPerMember>
			</LastWeekActivity>
		</Container>
	);
};

export default Time_analysis;
