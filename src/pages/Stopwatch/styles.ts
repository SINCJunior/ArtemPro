import styled, { css } from "styled-components";

import {
	AddAlarm,
	PlayCircle,
	PauseCircle,
	CheckBox,
	CheckBoxOutlineBlank,
} from "../../styles/Icons";

export const Container = styled.div`
	background: var(--primary);

	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	height: 100vh;
	width: 350px;
	top: 80px;
	display: flex;
	flex-direction: column;
	position: absolute;

	@media (min-width: 500px) {
		width: 450px;
		height: 90%;
	}
	@media (min-width: 960px) {
		padding-left: 64px;
	}
`;

export const NotationPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 180px;
	height: 40px;
	border-radius: 16px;

	background: var(--primary);
	border: 2px solid var(--sinc-light-color);
	cursor: pointer;

	color: var(--white);
	font-size: 20px;
	font-weight: 400;

	&:hover {
		background: var(--sinc-button-dark-hover);
	}
`;

export const Pomodoro = styled.div`
	margin: 32px 0;
	display: flex;
	flex-direction: column;
`;

export const PomodoroConfig = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 16px;

	> h3 {
		margin-left: 8px;
		color: var(--white-text);
		font-size: 24px;
		font-weight: bold;
	}
`;

export const EmptyCheckbox = styled(CheckBoxOutlineBlank)`
	display: flex;
	width: 32px;
	height: 32px;
	fill: var(--white);
	cursor: pointer;

	&:hover {
		fill: var(--sinc-light-color);
	}
	&.active {
		display: none;
	}
`;

export const FilledCheckbox = styled(CheckBox)`
	display: none;

	&.active {
		display: flex;
		width: 32px;
		height: 32px;
		fill: var(--sinc-light-color);
		cursor: pointer;

		&:hover {
			fill: var(--sinc-dark-color);
		}
	}
`;

export const EditTime = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 0 8px 32px;

	> p {
		color: var(--white-text);
		font-size: 20px;
		font-weight: 400;
	}
`;

export const TimeInput = styled.input`
	width: 32px;
	height: 16px;
	margin-left: 8px;

	color: var(--white-text);
	font-size: 16px;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}
`;

export const Counter = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;

	top: 202px;
	left: 80px;
	align-items: center;
	margin-bottom: 16px;

	> span {
		color: var(--white-text);
		font-size: 32px;
		font-weight: bold;
		margin-left: 4px;
	}
	@media (min-width: 500px) {
		left: 170px;
	}
`;

export const Timer = styled.p`
	color: var(--white);
	font-size: 32px;
	font-weight: 500;
	margin-right: 32px;
`;

const playPauseIconCSS = css`
	width: 32px;
	height: 32px;
	fill: var(--white);

	margin-left: 32px;

	cursor: pointer;
`;

export const PauseIcon = styled(PauseCircle)`
	display: none;

	&.active {
		display: flex;
		${playPauseIconCSS};

		&:hover {
			fill: var(--sinc-light-color);
		}
	}
`;

export const PlayIcon = styled(PlayCircle)`
	${playPauseIconCSS};

	&:hover {
		fill: var(--sinc-light-color);
	}

	&.active {
		display: none;
	}
`;

export const Member = styled.input`
	width: 350px;
	height: 72px;
	margin-bottom: 16px;

	position: absolute;
	top: 266px;

	color: var(--white-text);
	background: var(--secondary);
	border-radius: 8px;

	font-size: 16px;
	padding: 8px;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}

	@media (min-width: 500px) {
		width: 450px;
	}
`;

export const Description = styled.textarea`
	width: 350px;
	height: 150px;
	margin-bottom: 32px;

	position: absolute;
	top: 354px;

	color: var(--white-text);
	border: 2px solid var(--secondary);
	border-radius: 8px;

	font-size: 16px;
	padding: 8px;

	resize: none;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}

	@media (min-width: 500px) {
		width: 450px;
	}
`;

export const AddNotationButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	width: 120px;
	height: 32px;
	border-radius: 16px;

	right: 0;
	top: 516px;

	background: var(--sinc-light-color);
	cursor: pointer;

	@media (min-width: 960px) {
		right: -64px;
	}

	> p {
		color: var(--primary);
		font-size: 20px;
		font-weight: 400;
	}

	&:hover {
		background: var(--sinc-button-hover);
	}
`;

const warningCSS = css`
	display: flex;
	flex-direction: row;
	width: 350px;
	position: absolute;

	align-items: center;
	margin-top: 16px;

	> p {
		font-size: 20px;
		font-weight: 400;
		color: var(--white);

		margin-left: 16px;
	}

	@media (min-width: 500px) {
		width: 450px;
	}
`;
export const FirstWarning = styled.div`
	${warningCSS};
	top: 564px;
`;
export const SecondWarning = styled.div`
	${warningCSS};
	top: 628px;
`;
export const ThirdWarning = styled.div`
	${warningCSS};
	top: 716px;
	padding-bottom: 64px;
`;

const imgCSS = css`
	width: 32px;
	height: 32px;
`;
export const NoSmartphonesImg = styled.img`
	${imgCSS}
`;
export const WaterImg = styled.img`
	${imgCSS}
`;

export const PopUpMessage = styled.div`
	display: none;

	&.active {
		display: flex;
		background: #f0f;
		width: 400px;
		height: 400px;
	}
`;

const iconCSSMenuBar = css`
	flex-shrink: 0;

	width: 32px;
	height: 32px;
	color: var(--white);
`;

export const NotationIcon = styled(AddAlarm)`
	${iconCSSMenuBar}
`;
