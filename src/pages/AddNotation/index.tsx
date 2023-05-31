import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";
import BottomMenu from "../../components/BottomMenu";
import SincAlerts from "../../components/SincAlerts";

import {
	Container,
	Wrapper,
	DropDownMenu,
	ExitArea,
	WrapperDDM,
	DropMenuButton,
	PersonIcon,
	PersonCheck,
	SelectionArea,
	MemberSelection,
	EmptyRadioButton,
	FilledRadioButton,
	TimeStampArea,
	TimeStamp,
	StartDay,
	StartMonth,
	StartYear,
	StartHour,
	StartMinutes,
	Duration,
	HoursInput,
	MinutesInput,
	MemberDescriptionInput,
	DeleteNotationButton,
	AddNotationButton,
} from "./styles";

const AddNotation: React.FC = () => {
	//Seleciona feedback para consultor ou para diretor
	const [isDropDownMenu, setIsDropDownMenuActive] = useState(false);
	const changeFeedbackTarget = () => {
		setIsDropDownMenuActive(!isDropDownMenu);
	};

	const [isMember1, setIsMember1Active] = useState(false); // Responsável por exibir ou não a linha
	const [isAddMember1, setIsAddMember1] = useState(false); // Responsável por marcar o Radio Button
	const changeAddMember1 = () => {
		// Responsável por trocar o Radio Button
		setIsAddMember1(!isAddMember1);
	};
	const [isMember2, setIsMember2Active] = useState(false);
	const [isAddMember2, setIsAddMember2] = useState(false);
	const changeAddMember2 = () => {
		setIsAddMember2(!isAddMember2);
	};
	const [isMember3, setIsMember3Active] = useState(false);
	const [isAddMember3, setIsAddMember3] = useState(false);
	const changeAddMember3 = () => {
		setIsAddMember3(!isAddMember3);
	};
	const [isMember4, setIsMember4Active] = useState(false);
	const [isAddMember4, setIsAddMember4] = useState(false);
	const changeAddMember4 = () => {
		setIsAddMember4(!isAddMember4);
	};
	const [isMember5, setIsMember5Active] = useState(false);
	const [isAddMember5, setIsAddMember5] = useState(false);
	const changeAddMember5 = () => {
		setIsAddMember5(!isAddMember5);
	};
	const [isMember6, setIsMember6Active] = useState(false);
	const [isAddMember6, setIsAddMember6] = useState(false);
	const changeAddMember6 = () => {
		setIsAddMember6(!isAddMember6);
	};
	const [isMember7, setIsMember7Active] = useState(false);
	const [isAddMember7, setIsAddMember7] = useState(false);
	const changeAddMember7 = () => {
		setIsAddMember7(!isAddMember7);
	};
	const [isMember8, setIsMember8Active] = useState(false);
	const [isAddMember8, setIsAddMember8] = useState(false);
	const changeAddMember8 = () => {
		setIsAddMember8(!isAddMember8);
	};
	const [isMember9, setIsMember9Active] = useState(false);
	const [isAddMember9, setIsAddMember9] = useState(false);
	const changeAddMember9 = () => {
		setIsAddMember9(!isAddMember9);
	};
	const [isMember10, setIsMember10Active] = useState(false);
	const [isAddMember10, setIsAddMember10] = useState(false);
	const changeAddMember10 = () => {
		setIsAddMember10(!isAddMember10);
	};

	const [isMember11, setIsMember11Active] = useState(false);
	const [isAddMember11, setIsAddMember11] = useState(false);
	const changeAddMember11 = () => {
		setIsAddMember11(!isAddMember11);
	};
	const [isMember12, setIsMember12Active] = useState(false);
	const [isAddMember12, setIsAddMember12] = useState(false);
	const changeAddMember12 = () => {
		setIsAddMember12(!isAddMember12);
	};
	const [isMember13, setIsMember13Active] = useState(false);
	const [isAddMember13, setIsAddMember13] = useState(false);
	const changeAddMember13 = () => {
		setIsAddMember13(!isAddMember13);
	};
	const [isMember14, setIsMember14Active] = useState(false);
	const [isAddMember14, setIsAddMember14] = useState(false);
	const changeAddMember14 = () => {
		setIsAddMember14(!isAddMember14);
	};
	const [isMember15, setIsMember15Active] = useState(false);
	const [isAddMember15, setIsAddMember15] = useState(false);
	const changeAddMember15 = () => {
		setIsAddMember15(!isAddMember15);
	};
	const [isMember16, setIsMember16Active] = useState(false);
	const [isAddMember16, setIsAddMember16] = useState(false);
	const changeAddMember16 = () => {
		setIsAddMember16(!isAddMember16);
	};
	const [isMember17, setIsMember17Active] = useState(false);
	const [isAddMember17, setIsAddMember17] = useState(false);
	const changeAddMember17 = () => {
		setIsAddMember17(!isAddMember17);
	};
	const [isMember18, setIsMember18Active] = useState(false);
	const [isAddMember18, setIsAddMember18] = useState(false);
	const changeAddMember18 = () => {
		setIsAddMember18(!isAddMember18);
	};
	const [isMember19, setIsMember19Active] = useState(false);
	const [isAddMember19, setIsAddMember19] = useState(false);
	const changeAddMember19 = () => {
		setIsAddMember19(!isAddMember19);
	};
	const [isMember20, setIsMember20Active] = useState(false);
	const [isAddMember20, setIsAddMember20] = useState(false);
	const changeAddMember20 = () => {
		setIsAddMember20(!isAddMember20);
	};

	const [isMember21, setIsMember21Active] = useState(false);
	const [isAddMember21, setIsAddMember21] = useState(false);
	const changeAddMember21 = () => {
		setIsAddMember21(!isAddMember21);
	};
	const [isMember22, setIsMember22Active] = useState(false);
	const [isAddMember22, setIsAddMember22] = useState(false);
	const changeAddMember22 = () => {
		setIsAddMember22(!isAddMember22);
	};
	const [isMember23, setIsMember23Active] = useState(false);
	const [isAddMember23, setIsAddMember23] = useState(false);
	const changeAddMember23 = () => {
		setIsAddMember23(!isAddMember23);
	};
	const [isMember24, setIsMember24Active] = useState(false);
	const [isAddMember24, setIsAddMember24] = useState(false);
	const changeAddMember24 = () => {
		setIsAddMember24(!isAddMember24);
	};
	const [isMember25, setIsMember25Active] = useState(false);
	const [isAddMember25, setIsAddMember25] = useState(false);
	const changeAddMember25 = () => {
		setIsAddMember25(!isAddMember25);
	};
	const [isMember26, setIsMember26Active] = useState(false);
	const [isAddMember26, setIsAddMember26] = useState(false);
	const changeAddMember26 = () => {
		setIsAddMember26(!isAddMember26);
	};
	const [isMember27, setIsMember27Active] = useState(false);
	const [isAddMember27, setIsAddMember27] = useState(false);
	const changeAddMember27 = () => {
		setIsAddMember27(!isAddMember27);
	};
	const [isMember28, setIsMember28Active] = useState(false);
	const [isAddMember28, setIsAddMember28] = useState(false);
	const changeAddMember28 = () => {
		setIsAddMember28(!isAddMember28);
	};
	const [isMember29, setIsMember29Active] = useState(false);
	const [isAddMember29, setIsAddMember29] = useState(false);
	const changeAddMember29 = () => {
		setIsAddMember29(!isAddMember29);
	};
	const [isMember30, setIsMember30Active] = useState(false);
	const [isAddMember30, setIsAddMember30] = useState(false);
	const changeAddMember30 = () => {
		setIsAddMember30(!isAddMember30);
	};

	return (
		<Container>
			<Helmet>
				<title>Adicionar apontamento</title>
			</Helmet>
			<Header />
			<SidebarMenu />
			<BottomMenu />
			<SincAlerts />

			<Wrapper>
				<DropDownMenu>
					<ExitArea
						onClick={changeFeedbackTarget}
						className={isDropDownMenu ? "active" : ""}
					/>
					<WrapperDDM>
						<DropMenuButton onClick={changeFeedbackTarget}>
							<PersonIcon
								className={isDropDownMenu ? "active" : ""}
							/>
							<PersonCheck
								className={isDropDownMenu ? "active" : ""}
							/>
							<p className={isDropDownMenu ? "" : "active"}>
								Adicionar membros
							</p>
							<p className={isDropDownMenu ? "active" : ""}>
								Membros adicionados
							</p>
						</DropMenuButton>

						<SelectionArea
							className={isDropDownMenu ? "active" : ""}
						>
							<MemberSelection
								onClick={changeAddMember1}
								className={isMember1 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember1}
									className={isAddMember1 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember1}
									className={isAddMember1 ? "active" : ""}
								/>
								<p className={isMember1 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember2}
								className={isMember2 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember2}
									className={isAddMember2 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember2}
									className={isAddMember2 ? "active" : ""}
								/>
								<p className={isMember2 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember3}
								className={isMember3 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember3}
									className={isAddMember3 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember3}
									className={isAddMember3 ? "active" : ""}
								/>
								<p className={isMember3 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember4}
								className={isMember4 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember4}
									className={isAddMember4 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember4}
									className={isAddMember4 ? "active" : ""}
								/>
								<p className={isMember4 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember5}
								className={isMember5 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember5}
									className={isAddMember5 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember5}
									className={isAddMember5 ? "active" : ""}
								/>
								<p className={isMember5 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember6}
								className={isMember6 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember6}
									className={isAddMember6 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember6}
									className={isAddMember6 ? "active" : ""}
								/>
								<p className={isMember6 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember7}
								className={isMember7 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember7}
									className={isAddMember7 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember7}
									className={isAddMember7 ? "active" : ""}
								/>
								<p className={isMember7 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember8}
								className={isMember8 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember8}
									className={isAddMember8 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember8}
									className={isAddMember8 ? "active" : ""}
								/>
								<p className={isMember8 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember9}
								className={isMember9 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember9}
									className={isAddMember9 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember9}
									className={isAddMember9 ? "active" : ""}
								/>
								<p className={isMember9 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember10}
								className={isMember10 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember10}
									className={isAddMember10 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember10}
									className={isAddMember10 ? "active" : ""}
								/>
								<p className={isMember10 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>

							<MemberSelection
								onClick={changeAddMember11}
								className={isMember11 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember11}
									className={isAddMember11 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember11}
									className={isAddMember11 ? "active" : ""}
								/>
								<p className={isMember11 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember12}
								className={isMember12 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember12}
									className={isAddMember12 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember12}
									className={isAddMember12 ? "active" : ""}
								/>
								<p className={isMember12 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember13}
								className={isMember13 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember13}
									className={isAddMember13 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember13}
									className={isAddMember13 ? "active" : ""}
								/>
								<p className={isMember13 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember14}
								className={isMember14 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember14}
									className={isAddMember14 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember14}
									className={isAddMember14 ? "active" : ""}
								/>
								<p className={isMember14 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember15}
								className={isMember15 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember15}
									className={isAddMember15 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember15}
									className={isAddMember15 ? "active" : ""}
								/>
								<p className={isMember15 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember16}
								className={isMember16 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember16}
									className={isAddMember16 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember16}
									className={isAddMember16 ? "active" : ""}
								/>
								<p className={isMember16 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember17}
								className={isMember17 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember17}
									className={isAddMember17 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember17}
									className={isAddMember17 ? "active" : ""}
								/>
								<p className={isMember17 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember18}
								className={isMember18 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember18}
									className={isAddMember18 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember18}
									className={isAddMember18 ? "active" : ""}
								/>
								<p className={isMember18 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember19}
								className={isMember19 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember19}
									className={isAddMember19 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember19}
									className={isAddMember19 ? "active" : ""}
								/>
								<p className={isMember19 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember20}
								className={isMember20 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember20}
									className={isAddMember20 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember20}
									className={isAddMember20 ? "active" : ""}
								/>
								<p className={isMember20 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>

							<MemberSelection
								onClick={changeAddMember21}
								className={isMember21 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember21}
									className={isAddMember21 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember21}
									className={isAddMember21 ? "active" : ""}
								/>
								<p className={isMember21 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember22}
								className={isMember22 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember22}
									className={isAddMember22 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember22}
									className={isAddMember22 ? "active" : ""}
								/>
								<p className={isMember22 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember23}
								className={isMember23 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember23}
									className={isAddMember23 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember23}
									className={isAddMember23 ? "active" : ""}
								/>
								<p className={isMember23 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember24}
								className={isMember24 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember24}
									className={isAddMember24 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember24}
									className={isAddMember24 ? "active" : ""}
								/>
								<p className={isMember24 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember25}
								className={isMember25 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember25}
									className={isAddMember25 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember25}
									className={isAddMember25 ? "active" : ""}
								/>
								<p className={isMember25 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember26}
								className={isMember26 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember26}
									className={isAddMember26 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember26}
									className={isAddMember26 ? "active" : ""}
								/>
								<p className={isMember26 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember27}
								className={isMember27 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember27}
									className={isAddMember27 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember27}
									className={isAddMember27 ? "active" : ""}
								/>
								<p className={isMember27 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember28}
								className={isMember28 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember28}
									className={isAddMember28 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember28}
									className={isAddMember28 ? "active" : ""}
								/>
								<p className={isMember28 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember29}
								className={isMember29 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember29}
									className={isAddMember29 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember29}
									className={isAddMember29 ? "active" : ""}
								/>
								<p className={isMember29 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
							<MemberSelection
								onClick={changeAddMember30}
								className={isMember30 ? "" : "active"}
							>
								<EmptyRadioButton
									onClick={changeAddMember30}
									className={isAddMember30 ? "active" : ""}
								/>
								<FilledRadioButton
									onClick={changeAddMember30}
									className={isAddMember30 ? "active" : ""}
								/>
								<p className={isMember30 ? "active" : ""}>
									Cesar Rolli Bevilaqua
								</p>
							</MemberSelection>
						</SelectionArea>
					</WrapperDDM>
				</DropDownMenu>

				<TimeStampArea>
					<TimeStamp>
						<StartDay type="text" placeholder="DD" maxLength={2} />
						<p>/</p>
						<StartMonth
							type="text"
							placeholder="MM"
							maxLength={2}
						/>
						<p>/</p>
						<StartYear type="text" placeholder="AA" maxLength={2} />
						<p>às</p>
						<StartHour type="text" placeholder="HH" maxLength={2} />
						<p>:</p>
						<StartMinutes
							type="text"
							placeholder="MM"
							maxLength={2}
						/>
					</TimeStamp>
					<Duration>
						<h4>Duração:</h4>
						<HoursInput
							type="text"
							placeholder="HH"
							maxLength={2}
						/>
						<p>:</p>
						<MinutesInput
							type="text"
							placeholder="MM"
							maxLength={2}
						/>
					</Duration>
				</TimeStampArea>
				<MemberDescriptionInput placeholder="Descrição" />
				<Link to={"/apontamento"}>
					<DeleteNotationButton>
						<p>Excluir</p>
					</DeleteNotationButton>
				</Link>
				<Link to={"/apontamento"}>
					<AddNotationButton>
						<p>Adicionar</p>
					</AddNotationButton>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default AddNotation;
