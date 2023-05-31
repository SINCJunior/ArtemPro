import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	overflow-x: hidden;
`;

export const Wrapper = styled.div`
	display: flex;
	position: absolute;

	top: 100px;
	left: 120px;

	height: 590px;
	width: 2px;
	background: var(--white);

	@media (min-width: 500px) {
		margin-left: 116px;
	}
	@media (min-width: 960px) {
		margin-left: 250px;
	}
`;

export const BlackBar = styled.div`
	height: 100px;
	width: 80px;
	position: absolute;
	bottom: -100px;
`;

const eventCSS = css`
	display: flex;
	align-items: center;
	position: absolute;

	height: 80px;
	width: 60vw;
	margin-bottom: 100px;

	> p {
		position: absolute;
		color: var(--white);
		left: -100px;

		@media (min-width: 960px) {
			left: -110px;
		}
	}

	> h3 {
		position: absolute;
		left: 24px;
		padding: 8px;
		border-radius: 8px;
	}
`;

export const Event = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-dark-color);
		color: var(--white-text);
	}
`;

export const Event2 = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-beige);
		color: var(--primary);
	}
	top: 100px;
`;

export const Event3 = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-beige);
		color: var(--primary);
	}
	top: 200px;
`;

export const Event4 = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-beige);
		color: var(--primary);
	}
	top: 300px;
`;

export const Event5 = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-beige);
		color: var(--primary);
	}
	top: 400px;
`;

export const Event6 = styled.div`
	${eventCSS};
	> h3 {
		background: var(--sinc-beige);
		color: var(--primary);
	}
	top: 500px;
`;

const BallIndicatorCSS = css`
	display: flex;
	position: absolute;
	left: -14px;
	width: 32px;
	height: 32px;
	border-radius: 16px;
	border: 6px solid var(--primary);
`;

export const BallIndicator = styled.div`
	${BallIndicatorCSS};
	background: var(--sinc-dark-color);
`;

export const BallIndicator2 = styled.div`
	${BallIndicatorCSS};
	background: var(--sinc-beige);
`;
