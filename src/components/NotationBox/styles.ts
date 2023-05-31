import styled from "styled-components";
import { DotsVerticalRounded } from "../../styles/Icons";

export const Container = styled.div`
	width: 300px;
	height: 336;
	border-radius: 8px;

	background: var(--secondary);

	@media (min-width: 500px) {
		width: 336px;
	}
`;

export const ParticipatingMembersArea = styled.div`
	width: 300px;
	height: 72px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 500px) {
		width: 336px;
	}
`;

export const ParticipatingMembers = styled.select`
	width: 250px;
	height: 36px;

	margin-left: 8px;
	color: var(--white);
	font-size: 16px;
	font-weight: 400;
`;

export const EditNotation = styled(DotsVerticalRounded)`
	color: var(--white);
	width: 32px;
	height: 32px;
	right: 0%;
`;

export const TimeStampArea = styled.div`
	width: 300px;
	height: 64px;

	border-top: 1px solid var(--white);
	border-bottom: 1px solid var(--white);

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px;

	@media (min-width: 500px) {
		width: 336px;
	}
`;

export const TimeStamp = styled.p`
	font-size: 18px;
	color: var(--white);
	margin-bottom: 4px;
`;

export const Duration = styled.p`
	font-size: 18px;
	color: var(--white);
`;

export const MemberDescriptionArea = styled.div`
	width: 300px;
	height: 200px;

	display: flex;
	overflow-y: scroll;

	> p {
		font-size: 16px;
		color: var(--white);

		margin: 8px;
	}

	@media (min-width: 500px) {
		width: 336px;
	}
`;
