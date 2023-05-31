import styled, { css } from "styled-components";

import {
	FilterAlt,
	UserPlus,
	UserCheck,
	RadioButtonChecked,
	RadioButtonUnchecked,
} from "../../styles/Icons";

export const Container = styled.div`
	margin-top: 72px;
	padding: 8px;
	margin-left: 40px;

	//! Tabela de resolução:
	//! 0 até 499px (celular): padrão
	//! 500 até 989px (tablet na vertical): 1° @media
	//! 990 até 1299px (tablet na horizontal): 2° @media
	//! 1300 até 1689px (monitores pequenos - laptop): 3º @media
	//! maior do que 1690px (monitores grandes - PC): 4° @media
	@media (min-width: 500px) {
		margin-left: 116px;
	}

	@media (min-width: 950px) {
		margin-left: 250px;
	}
`;

const ButtonPageCSS = css`
	display: flex;
	justify-content: center;
	align-items: center;

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

export const StopwatchPage = styled.div`
	${ButtonPageCSS};
	width: 180px;
`;

export const AddNotationPage = styled.div`
	${ButtonPageCSS};
	width: 250px;
	margin: 16px 0;

	@media (min-width: 1336px) {
		margin: 0;
	}
`;

//Filtro e drop_down_menu
export const SettingsBar = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1336px) {
		width: 100%;
		margin-bottom: 16px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const RightWrapper = styled.div`
	width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 500px) {
		width: 336px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Grid = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-gap: 16px;

	@media (min-width: 1336px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1690px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const FilterIcon = styled(FilterAlt)`
	width: 32px;
	height: 32px;

	fill: var(--white);
	cursor: pointer;
	z-index: 2;

	&:hover {
		fill: var(--sinc-light-color);
	}
	&.active {
		fill: var(--sinc-light-color);

		&:hover {
			fill: var(--white);
		}
	}
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

export const Wrapper = styled.div`
	width: 250px;
	height: 64px;
`;

export const SelectionArea = styled.div`
	display: none;

	&.active {
		display: flex;
		position: absolute;
		flex-direction: column;

		overflow-y: scroll;
		overflow-x: hidden;
		height: 400px;
		width: 316px;
		top: 180px;

		border: 2px solid var(--secondary);
		background: var(--primary);
		border-radius: 8px;
		z-index: 2;

		@media (min-width: 500px) {
			width: 416px;
		}

		@media (min-width: 1336px) {
			top: 132px;
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

export const FilterButton = styled.div`
	display: none;

	&.active {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;

		width: 310px;
		height: 48px;
		top: 564px;
		margin-left: 2px;

		z-index: 3;
		background: var(--primary);
		border-radius: 8px;
		cursor: pointer;

		> p {
			color: var(--primary);
			background: var(--sinc-light-color);
			font-size: 20px;
			font-weight: 400;

			width: 150px;
			height: 24px;
			border-radius: 16px;
			padding-left: 18px;

			&:hover {
				background: var(--sinc-button-hover);
			}
		}

		@media (min-width: 500px) {
			width: 412px;
		}

		@media (min-width: 1336px) {
			top: 482px;
		}
	}
`;
