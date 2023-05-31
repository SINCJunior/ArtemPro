import styled, { css } from "styled-components";

import { CheckBox, CheckBoxOutlineBlank } from "../../styles/Icons";

export const Container = styled.div`
	align-items: center;

	width: 300px;
	height: 440px;
	border-radius: 8px;
	margin-right: 16px;
	padding-top: 28px;

	overflow-y: scroll;
	overflow-x: hidden;
	flex: 0 0 300px;

	border: 2px solid var(--secondary);

	> h3 {
		position: absolute;
		top: 16px;
		width: 300px;
		padding: 8px 8px 8px 16px;

		border-radius: 8px;

		color: var(--white-text);
		background: var(--secondary);
		z-index: 2;
	}
`;

const taskN_CSS = css`
	width: 240px;
	max-height: 200px;
	background: var(--secondary);
	border-radius: 8px;
	margin: 30px;

	overflow-y: scroll;
	overflow-x: hidden;

	> h1 {
		font-size: 16px;
		color: var(
			--white-text
		); // Cor da letra: branca - mas se o fundo for amarelo: preta
		background: var(--sinc-dark-color); // muda conforme o banco de dados

		position: sticky;
		border-radius: 8px;
		width: 268px;
		padding: 8px;
	}

	> p {
		font-size: 16px;
		color: var(--white-text);

		margin: 8px;
	}

	@media (min-width: 500px) {
		width: 268px;
		margin: 16px;
	}
`;

export const Task1 = styled.div`
	${taskN_CSS}
`;
export const Task2 = styled.div`
	${taskN_CSS}
`;
export const Task3 = styled.div`
	${taskN_CSS}
`;
export const Task4 = styled.div`
	${taskN_CSS}
`;
export const Task5 = styled.div`
	${taskN_CSS}
`;

export const TaskDone = styled.div`
	display: none;

	&.active {
		display: flex;
		flex-direction: row;

		background: var(--sinc-dark-color);
		z-index: 1;
		bottom: 0;

		padding: 4px;
		align-items: center;
		justify-content: space-around;

		> p {
			font-size: 16px;
			color: var(--white-text);
		}
	}
`;

export const EmptyCheckbox = styled(CheckBoxOutlineBlank)`
	display: flex;
	width: 24px;
	height: 24px;
	fill: var(--white-text);
	cursor: pointer;

	&.active {
		display: none;
	}
`;

export const FilledCheckbox = styled(CheckBox)`
	display: none;

	&.active {
		display: flex;
		width: 24px;
		height: 24px;
		fill: var(--white-text);
		cursor: pointer;
	}
`;
