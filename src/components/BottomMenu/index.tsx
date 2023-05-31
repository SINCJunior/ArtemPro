import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
	BottomMenuContainer,
	StyledLink,
	TaskDoneBottomIcon,
	NotationBottomIcon,
	CalendarBottomIcon,
	MenuBottomIcon,
} from "./styles";

const BottomMenu: React.FC = () => {
	const [isShowToDirexsActive, setIsShowToDirexsActive] = useState(true);
	const pathname = useLocation().pathname;

	return (
		<BottomMenuContainer>
			<StyledLink
				to={"/tarefas"}
				className={`${pathname === "/tarefas" ? "active" : ""}`}
			>
				<TaskDoneBottomIcon />
			</StyledLink>

			<StyledLink
				to={"/apontamento"}
				className={`${pathname === "/apontamento" ? "active" : ""}`}
			>
				<NotationBottomIcon />
			</StyledLink>

			<StyledLink
				to={"/calendario"}
				className={`${pathname === "/calendario" ? "active" : ""}`}
			>
				<CalendarBottomIcon />
			</StyledLink>

			<StyledLink
				to={"/menu"}
				className={`${pathname === "/menu" ? "active" : ""}`}
			>
				<MenuBottomIcon />
			</StyledLink>
		</BottomMenuContainer>
	);
};

export default BottomMenu;
