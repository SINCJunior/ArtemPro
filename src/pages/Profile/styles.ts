import styled, { css } from "styled-components";

import { AccountCircle } from "../../styles/Icons";

export const Container = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	width: 100vw;
`;

export const Wrapper = styled.div`
	display: flex;
	position: absolute;
	flex-direction: column;

	width: 100vw;
	top: 120px;

	align-items: center;

	> h3 {
		margin-bottom: 16px;
		font-size: 24px;
		color: var(--white);
	}
`;

export const SincLogo = styled.img`
	top: 0;
	margin-left: 16px;
	height: 48px;
`;

export const ProfileIcon = styled(AccountCircle)`
	width: 32px;
	height: 32px;

	cursor: pointer;

	fill: var(--white);
	margin-right: 16px;

	&:hover,
	&.active {
		fill: var(--sinc-light-color);
	}
`;

const inputLabelCSS = css`
	width: 340px;
	height: 34px;

	background: var(--secondary);
	border-radius: 4px;
	color: var(--white-text);

	font-size: 16px;
	margin-bottom: 16px;
	padding-left: 8px;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}
`;
export const OldPass = styled.input`
	${inputLabelCSS}
`;
export const NewPass = styled.input`
	${inputLabelCSS}
`;
export const RepeatNewPass = styled.input`
	${inputLabelCSS}
`;

export const UpdateInfoButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 340px;
	height: 40px;
	border-radius: 16px;
	margin-top: 16px;
	margin-bottom: 48px;

	background: var(--primary);
	border: 2px solid var(--sinc-light-color);
	cursor: pointer;

	> p {
		color: var(--sinc-light-color);
		font-size: 20px;
		font-weight: 400;
	}

	&:hover {
		background: var(--sinc-button-dark-hover);
	}
`;

export const Forms = styled.div`
	display: flex;
	justify-content: center;
	align-items: initial;
	flex-direction: column;

	margin-left: -150px;

	> h3 {
		color: var(--white);
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 16px;
	}
`;

export const RetirementButton = styled.p`
	margin-bottom: 16px;
	color: var(--white);
	font-size: 20px;
	font-weight: 400;

	&:hover {
		color: var(--sinc-dark-color);
	}
`;
