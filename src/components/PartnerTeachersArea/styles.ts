import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 336px;
	height: 336px;
	border-radius: 4px;
	background: var(--secondary);
	padding: 8px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	border-bottom: 1px solid var(--white);
	padding-bottom: 8px;
	height: 24px;

	> h4 {
		font-size: 20px;
		font-family: 500;
		color: var(--white);
	}
`;

export const Contact = styled.div`
	display: flex;
	flex-direction: column;

	border-bottom: 1px solid var(--white);
	padding-bottom: 8px;
	height: 64px;

	> p {
		font-size: 16px;
		font-family: 400;
		color: var(--white);
		padding-top: 8px;
	}
`;

//! CSS dos textos de Área de atuação e Histórico de contato
const textCSS = css`
	font-size: 16px;
	font-family: 400;
	color: var(--white);

	overflow-y: scroll;

	> span {
		font-size: 18px;
		font-weight: 500;
		color: var(--sinc-light-color);
	}
`;

export const ActuationArea = styled.p`
	height: 90px;
	padding-top: 8px;
	border-bottom: 1px solid var(--white);

	${textCSS};
`;

export const Historic = styled.p`
	height: 130px;
	padding-top: 8px;

	${textCSS};
`;
