import styled, { css } from "styled-components";

import {
	UserPlus,
	UserCheck,
	RadioButtonChecked,
	RadioButtonUnchecked,
} from "../../styles/Icons";

export const Container = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;

	width: 350px;
	margin-top: 100px;
	border: 2px solid var(--secondary);
	border-radius: 8px;
`;

//! DropDownMenu
export const DropDownMenu = styled.div`
	margin-left: 8px;
`;

export const ExitArea = styled.div`
	&.active {
		width: 100vw;
		height: 100vh;
		position: fixed;

		top: 0;
		left: 0;
		z-index: 1;

		background: rgb(255, 255, 255, 0.2);
	}
`;

export const WrapperDDM = styled.div`
	width: 250px;
	height: 64px;
`;

export const DropMenuButton = styled.div`
	border: 2px solid var(--white);
	border-radius: 8px;
	position: absolute;
	z-index: 2;

	display: flex;
	align-items: center;
	cursor: pointer;

	padding: 8px;
	top: 12px;
	width: 300px;
	height: 40px;

	> p {
		font-size: 0;
		&.active {
			color: var(--white-text);
			font-size: 20px;
			position: absolute;
			left: 8px;
		}
	}
`;

const PersonIconCSS = css`
	display: flex;
	position: absolute;
	right: 8px;
	width: 32px;
	height: 32px;
	fill: var(--white);
	cursor: pointer;
`;

export const PersonIcon = styled(UserPlus)`
	${PersonIconCSS};

	&:hover {
		fill: var(--sinc-light-color);
	}
	&.active {
		display: none;
	}
`;

export const PersonCheck = styled(UserCheck)`
	display: none;

	&.active {
		${PersonIconCSS};

		&:hover {
			fill: var(--sinc-light-color);
		}
	}
`;

export const SelectionArea = styled.div`
	display: none;

	&.active {
		position: absolute;
		display: flex;
		flex-direction: column;

		overflow-y: scroll;
		overflow-x: hidden;
		height: 400px;
		width: 316px;
		top: 52px;

		border: 2px solid var(--secondary);
		background: var(--primary);
		border-radius: 8px;
		z-index: 2;

		@media (min-width: 500px) {
			width: 416px;
		}
	}
`;

export const MemberSelection = styled.div`
	> p {
		font-size: 0;
	}
	&.active {
		margin: 0 10px 0 8px;
		border-bottom: 1px solid var(--white);
		padding-top: 12px;
		cursor: pointer;

		&:hover {
			background: rgb(139, 9, 36, 0.4);
		}

		> p {
			width: 298px;
			font-size: 20px;
			padding-bottom: 12px;

			left: 48px;
			position: relative;
			color: var(--white-text);

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 200px;

			@media (min-width: 500px) {
				width: 398px;
				max-width: 300px;
			}
		}
	}
`;

export const FilledRadioButton = styled(RadioButtonUnchecked)`
	display: flex;
	position: absolute;
	left: 16px;
	width: 24px;
	height: 24px;
	fill: var(--white-text);
	cursor: pointer;

	&:hover {
		fill: var(--sinc-light-color);
	}
	&.active {
		display: none;
	}
`;

export const EmptyRadioButton = styled(RadioButtonChecked)`
	display: none;

	&.active {
		display: flex;
		position: absolute;
		left: 16px;
		width: 24px;
		height: 24px;
		fill: var(--sinc-light-color);
		cursor: pointer;

		&:hover {
			fill: var(--sinc-dark-color);
		}
	}
`;

export const TimeStampArea = styled.div`
	width: 334px;
	height: 64px;

	border-top: 1px solid var(--white);
	border-bottom: 1px solid var(--white);

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px;

	@media (min-width: 500px) {
		width: 434px;
	}
`;

// Parte para inserir o instante de início
export const TimeStamp = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;

	> p {
		font-size: 16px;
		color: var(--white);
	}
`;

//! CSS dos inputs de TimeStampArea ;)
const inputLabelCSS = css`
	width: 28px;
	height: 22px;

	color: var(--white-text);

	font-size: 16px;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}
`;
export const StartDay = styled.input`
	margin-left: 4px;
	${inputLabelCSS}
`;
export const StartMonth = styled.input`
	margin-left: 4px;
	margin-right: 4px;
	${inputLabelCSS}
`;
export const StartYear = styled.input`
	margin-left: 4px;
	margin-right: 16px;
	${inputLabelCSS}
`;
export const StartHour = styled.input`
	margin-left: 16px;
	${inputLabelCSS}
`;
export const StartMinutes = styled.input`
	margin-left: 4px;
	${inputLabelCSS}
`;

// Duração
export const Duration = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		font-size: 18px;
		color: var(--white);
		font-weight: 500;
	}
	> p {
		font-size: 16px;
		color: var(--white);
	}
`;
export const HoursInput = styled.input`
	margin-left: 16px;
	${inputLabelCSS}
`;
export const MinutesInput = styled.input`
	margin-left: 4px;
	${inputLabelCSS}
`;

// Parte inferior
export const MemberDescriptionInput = styled.textarea`
	width: 336px;
	height: 150px;

	color: var(--white-text);

	font-size: 16px;
	padding: 8px;

	resize: none;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}

	@media (min-width: 500px) {
		width: 434px;
	}
`;

export const DeleteNotationButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	width: 120px;
	height: 32px;
	border-radius: 16px;

	left: 0;
	bottom: -48px;

	border: 2px solid var(--sinc-light-color);
	border-radius: 16px;
	cursor: pointer;

	> p {
		color: var(--white-text);
		font-size: 20px;
		font-weight: 400;
	}

	&:hover {
		background: var(--sinc-button-dark-hover);
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
	bottom: -48px;

	background: var(--sinc-light-color);
	cursor: pointer;

	> p {
		color: var(--primary);
		font-size: 20px;
		font-weight: 400;
	}

	&:hover {
		background: var(--sinc-button-hover);
	}
`;
