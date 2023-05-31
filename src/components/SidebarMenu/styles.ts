import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
	Analyse,
	CloudQueue,
	InsertChartOutlined,
	Rocket,
	AddAlarm,
	HeadsetMic,
	CalendarToday,
	Task,
} from "../../styles/Icons";

export const Container = styled.div`
	display: none;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;

		position: fixed;
		top: 72px;
		left: 0;
		z-index: 2;

		padding: 8px 16px;

		width: min(300px, auto);
		height: calc(100% - 72px);
		overflow-y: auto;
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
`;

export const StyledAnchor = styled.a`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

export const MembersSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-bottom: 16px;

	@media (min-width: 960px) {
		align-items: flex-start;
	}
`;

export const DirexSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	top: 0;
	padding-top: 16px;
	border-top: 1px solid var(--secondary);

	@media (min-width: 960px) {
		align-items: flex-start;
	}
`;

export const MenuItem = styled.button`
	/* textdecoration: none; */

	display: flex;
	align-items: center;
	flex-shrink: 0;

	> span {
		display: none;
	}

	@media (min-width: 960px) {
		> span {
			display: inline;
			margin-left: 16px;

			font-size: 19px;
			color: var(--white);
		}

		padding-right: 16px;
	}

	padding: 8px;
	outline: 0;

	cursor: pointer;
	border-radius: 25px;

	&:hover,
	&.active {
		background: var(--sinc-menu-bar-hover);
		> span,
		svg {
			color: var(--sinc-light-color);
		}
	}
`;

//Ícones do menu lateral
const iconCSSMenuBar = css`
	flex-shrink: 0;

	width: 32px;
	height: 32px;
	color: var(--white);
`;

export const NotationIcon = styled(AddAlarm)`
	${iconCSSMenuBar}
`;
export const TaskDoneIcon = styled(Task)`
	${iconCSSMenuBar}
`;
export const SDRIcon = styled(HeadsetMic)`
	${iconCSSMenuBar}
`;
export const ProfessorsIcon = styled(Analyse)`
	${iconCSSMenuBar}
`;
export const CalendarIcon = styled(CalendarToday)`
	${iconCSSMenuBar}
`;
export const CloudIcon = styled(CloudQueue)`
	${iconCSSMenuBar}
`;
export const PerformanceIcon = styled(InsertChartOutlined)`
	${iconCSSMenuBar}
`;
export const DirexIcon = styled(Rocket)`
	${iconCSSMenuBar}
`;
