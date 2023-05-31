import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	position: absolute;
	justify-content: center;
	width: 100vw;

	@media (min-width: 960px) {
		flex-direction: row;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	position: absolute;
	justify-content: center;
	flex-direction: column;
	margin-top: 150px;

	@media (min-width: 500px) {
		margin-left: 250px;
	}

	@media (min-width: 960px) {
		flex-direction: row;
	}
`;

export const ConstructionImg = styled.img`
	height: 200px;
	width: 360px;

	@media (min-width: 500px) {
		margin-right: 50px;
	}
`;

export const Warning = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 32px;

	> h1 {
		font-size: 34px;
		color: var(--sinc-light-color);
	}
	> p {
		padding-top: 21px;
		font-size: 21px;
		color: var(--white);
	}

	@media (min-width: 960px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
	}
`;
