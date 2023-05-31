import styled from "styled-components";

import { CheckBox, CheckBoxOutlineBlank } from "../../styles/Icons";

export const Container = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	width: 100vw;
`;

export const TargetConfig = styled.div`
	display: flex;
	flex-direction: row;

	align-items: center;

	position: absolute;
	top: 100px;
	left: 40px;

	> h3 {
		color: var(--white-text);
		font-size: 24px;
		font-weight: bold;
		margin-right: 32px;
	}

	@media (min-width: 500px) {
		left: 100px;
	}
	@media (min-width: 960px) {
		left: 40vw;
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

export const Wrapper = styled.div`
	display: none;

	&.active {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 160px;
		flex-direction: column;

		@media (min-width: 500px) {
			left: 100px;
		}
		@media (min-width: 960px) {
			left: 40vw;
		}
	}
`;

export const FeedbackItem = styled.div`
	display: flex;
	flex-direction: column;
	width: 80vw;
	padding-bottom: 12px;

	> h3 {
		padding-bottom: 8px;
		font-size: 24px;
		color: var(--white);
	}
	> p {
		padding-bottom: 16px;
		font-size: 20px;
		color: var(--white);
		font-family: 400;
	}

	@media (min-width: 500px) {
		width: 500px;
	}
`;

export const SelectInput = styled.select`
	width: 80vw;
	height: 34px;

	background: var(--secondary);
	border-radius: 4px;
	color: var(--white-text);

	font-size: 16px;
	margin-bottom: 16px;
	padding-left: 8px;

	@media (min-width: 500px) {
		width: 500px;
	}

	> option {
		display: none;

		&.active {
			display: flex;
		}
	}
`;

export const FeedbackButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 80vw;
	height: 40px;
	border-radius: 16px;
	margin-bottom: 24px;

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

	@media (min-width: 500px) {
		width: 500px;
	}
`;

export const BlackBar = styled.div`
	height: 40px;
`;
