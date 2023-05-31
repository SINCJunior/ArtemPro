import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
	Container,
	MembersSide,
	StyledLink,
	StyledAnchor,
	MenuItem,
	NotationIcon,
	TaskDoneIcon,
	SDRIcon,
	CalendarIcon,
	ProfessorsIcon,
	CloudIcon,
	DirexSide,
	PerformanceIcon,
	DirexIcon,
} from "./styles";

const SidebarMenu: React.FC = (classes) => {
	const [isShowToDirexsActive, setIsShowToDirexsActive] = useState(true);
	const pathname = useLocation().pathname;

	return (
		<Container>
			<MembersSide>
				<StyledLink to={"/tarefas"}>
					<MenuItem
						className={`${pathname == "/tarefas" ? "active" : ""}`}
					>
						<TaskDoneIcon />
						<span>Tarefas</span>
					</MenuItem>
				</StyledLink>

				<StyledLink to={"/apontamento"}>
					<MenuItem
						className={`${
							pathname == "/apontamento" ? "active" : ""
						}`}
					>
						<NotationIcon />
						<span>Apontamento</span>
					</MenuItem>
				</StyledLink>

				<StyledAnchor href="https://app.pipefy.com/organizations/300611579">
					<MenuItem>
						<SDRIcon />
						<span>Pipefy</span>
					</MenuItem>
				</StyledAnchor>

				<StyledLink to={"/calendario"}>
					<MenuItem
						className={`${
							pathname == "/calendario" ? "active" : ""
						}`}
					>
						<CalendarIcon />
						<span>Calendário</span>
					</MenuItem>
				</StyledLink>

				<StyledLink to={"/parcerias"}>
					<MenuItem
						className={`${
							pathname == "/parcerias" ? "active" : ""
						}`}
					>
						<ProfessorsIcon />
						<span>Parcerias</span>
					</MenuItem>
				</StyledLink>

				<StyledAnchor href="https://drive.google.com/drive/u/1/folders/0B_pfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA">
					<MenuItem>
						<CloudIcon />
						<span>Drive</span>
					</MenuItem>
				</StyledAnchor>

				<StyledLink to={"/feedback"}>
					<MenuItem
						className={`${pathname == "/feedback" ? "active" : ""}`}
					>
						<PerformanceIcon />
						<span>Feedback</span>
					</MenuItem>
				</StyledLink>
			</MembersSide>

			<DirexSide>
				<StyledLink to={"/direx"}>
					<MenuItem
						className={`${pathname == "/direx" ? "active" : ""}`}
					>
						<DirexIcon />
						<span>Diretoria</span>
					</MenuItem>
				</StyledLink>
			</DirexSide>
		</Container>
	);
};

export default SidebarMenu;
