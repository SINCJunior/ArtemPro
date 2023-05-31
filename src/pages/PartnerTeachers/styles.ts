import styled from "styled-components";

export const Container = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const Wrapper = styled.div`
	display: grid;
	margin-top: 72px;
	padding: 8px;

	grid-template-columns: 1fr;
	grid-gap: 16px;

	//! Tabela de resolução:
	//! 0 até 499px (celular): padrão
	//! 500 até 959px (tablet na vertical): 1° @media
	//! 960 até 1299px (tablet na horizontal): 2° @media
	//! 1300 até 1649px (monitores pequenos - laptop): 3º @media
	//! maior do que 1650px (monitores grandes - PC): 4° @media
	@media (min-width: 500px) {
		margin-left: 116px;
	}

	@media (min-width: 820px) {
		margin-left: 116px;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 960px) {
		margin-left: 250px;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1300px) {
		margin-left: 250px;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1650px) {
		margin-left: 250px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
