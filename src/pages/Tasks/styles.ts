import styled, { css } from "styled-components";

export const Container = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

export const Wrapper = styled.div`
	flex-direction: row;
	position: absolute;
	display: flex;
	top: 100px;

	width: 90vw;
	height: 472px;
	padding: 16px;

	overflow-y: hidden;
	overflow-x: scroll;

	border: 2px solid var(--secondary);
	border-radius: 16px;

	@media (min-width: 500px) {
		left: 116px;
		width: 70vh;
	}
	@media (min-width: 960px) {
		left: 250px;
		width: 70vw;
	}
	@media (min-width: 1299px) {
		left: 250px;
		width: 80vw;
	}
`;
