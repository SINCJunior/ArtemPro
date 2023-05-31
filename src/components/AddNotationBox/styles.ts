import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 336px;
	height: 336px;
	border-radius: 8px;

	background: var(--secondary);
	position: absolute;
`;

// Parte superior
export const TimeStampArea = styled.div`
	width: 336px;
	height: 64px;

	border-top: 1px solid var(--white);
	border-bottom: 1px solid var(--white);

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px;
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

//! CSS dos inputs de Time_stamp_area ;)
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
`;
export const AddNotationButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	width: 120px;
	height: 32px;
	border-radius: 16px;

	right: 8px;
	bottom: 8px;

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
