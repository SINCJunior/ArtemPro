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

const retirementInputCSS = css`
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
	${retirementInputCSS}
`;
export const CPFInput = styled.input`
	${retirementInputCSS}
`;
export const RGInput = styled.input`
	${retirementInputCSS}
`;
export const UFRGSCardInput = styled.input`
	${retirementInputCSS}
`;
export const StartDateInput = styled.input`
	${retirementInputCSS}
`;
export const EndDateInput = styled.input`
	${retirementInputCSS}
`;
export const PositionWorked = styled.textarea`
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

const retirementButtonCSS = css`
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;

	width: 120px;
	height: 32px;
	border-radius: 16px;

	bottom: 10px;
	right: 0;

	cursor: pointer;

	> p {
		font-size: 20px;
		font-weight: 400;
	}
`;

export const ActivePopUp = styled.div`
	${retirementButtonCSS};
	background: var(--sinc-light-color);

	> p {
		color: var(--primary);
	}

	&:hover {
		background: var(--sinc-button-hover);
	}
`;

export const ConfirmPopUpBackground = styled.div`
	display: none;

	&.active {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		position: absolute;

		width: 340px;
		height: 101vh;

		background: var(--primary);
		opacity: 0.9;
	}
`;

export const PopUpContainer = styled.div`
	display: none;

	&.active {
		display: flex;
		flex-direction: column;
		background: var(--primary);
		z-index: 3;

		position: absolute;
		opacity: 1;
		height: 160px;
		width: 340px;
	}
`;

export const PopUp = styled.div`
	display: flex;
	align-items: initial;
	justify-content: center;
	flex-direction: column;

	> h2 {
		color: var(--white);
		font-size: 24px;
		font-weight: bold;
		padding-bottom: 24px;
	}
	> p {
		color: var(--white);
		font-size: 20px;
		font-weight: 400;
	}
`;

export const BottomButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
`;

export const CancelButton = styled.div`
	${retirementButtonCSS};
	background: var(--sinc-light-color);

	> p {
		color: var(--primary);
	}

	&:hover {
		background: var(--sinc-button-hover);
	}
`;

export const ConfirmRetirementButton = styled.div`
	${retirementButtonCSS};
	background: var(--primary);
	left: 0;
	border: 2px solid var(--secondary);

	> p {
		color: var(--secondary);
	}

	&:hover {
		background: var(--sinc-button-dark-hover);
	}
`;
