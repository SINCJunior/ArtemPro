import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 100px;
	left: 120px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	left: 8%;

	@media (min-width: 500px) {
		left: 36%;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: initial;

	> h3 {
		font-size: 20px;
		font-weight: 400;
		color: var(--white);
		margin-bottom: 8px;
	}
`;

export const Warning = styled.h2`
	font-size: 24px;
	color: var(--white);
	margin-bottom: 16px;
`;

const breakInputCSS = css`
	width: 340px;
	height: 34px;

	background: var(--secondary);
	border-radius: 4px;
	color: var(--white-text);

	font-size: 16px;
	margin-bottom: 32px;
	padding-left: 8px;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}
`;

export const MemberNameInput = styled.input`
	${breakInputCSS}
`;
export const CPFInput = styled.input`
	${breakInputCSS}
`;
export const RGInput = styled.input`
	${breakInputCSS}
`;
export const UFRGSCardInput = styled.input`
	${breakInputCSS}
`;
export const StartDateInput = styled.input`
	${breakInputCSS}
`;
export const EndDateInput = styled.input`
	${breakInputCSS}
`;
export const BreakReason = styled.textarea`
	width: 336px;
	height: 100px;
	margin-bottom: 60px;

	color: var(--white-text);
	background: var(--secondary);
	border-radius: 4px;

	font-size: 16px;
	padding: 8px;

	resize: none;

	&::placeholder {
		color: var(--white);
		opacity: 60%;
	}
`;

export const ConfirmBreakButton = styled.div`
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;

	width: 120px;
	height: 32px;
	border-radius: 16px;

	bottom: 10px;
	right: 0;

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
