import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
	AddAlarm,
	HeadsetMic,
	Menu,
	CalendarToday,
	Task,
} from "../../styles/Icons";

export const BottomMenuContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;

	background: var(--primary);
	width: 100%;
	border-top: 1px solid var(--secondary);

	display: flex;
	justify-content: space-between;

	padding: 8px min(46px, max(10vw, 10px));

	@media (min-width: 500px) {
		display: none;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	color: white;

	&:hover,
	&:focus,
	&.active {
		color: var(--sinc-light-color);
	}
`;

// Ícones usados na página estática
const iconCSSBottomBar = css`
	width: 32px;
	height: 32px;

	cursor: pointer;

	/* fill: var(--white);

	&:hover,
	&:focus,
	&.active {
		fill: var(--sinc-light-color);
	} */
`;

export const Active = css`
	fill: var(--sinc-light-color);
`;

export const TaskDoneBottomIcon = styled(Task)`
	${iconCSSBottomBar}
`;
export const NotationBottomIcon = styled(AddAlarm)`
	${iconCSSBottomBar}
`;
export const SDRBottomIcon = styled(HeadsetMic)`
	${iconCSSBottomBar}
`;
export const CalendarBottomIcon = styled(CalendarToday)`
	${iconCSSBottomBar}
`;
export const MenuBottomIcon = styled(Menu)`
	${iconCSSBottomBar}
`;
