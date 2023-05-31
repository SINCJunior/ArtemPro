import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import {
	Container,
	Wrapper,
	MenuItem,
	SDRIcon,
	ProfessorsIcon,
	CloudIcon,
	DirexSide,
	PerformanceIcon,
	DirexIcon,
	BottomMenu,
	NotationBottomIcon,
	TaskDoneBottomIcon,
	CalendarBottomIcon,
	MenuBottomIcon,
} from "./styles";

const MenuBottom: React.FC = () => {
	return (
		<Container>
			<Helmet>
				<title>Menu</title>
			</Helmet>
			<Header />

			<Wrapper>
				<a
					href="https://app.pipefy.com/organizations/300611579"
					style={{ textDecoration: "none" }}
				>
					<MenuItem>
						<SDRIcon />
						<span>Pipefy</span>
					</MenuItem>
				</a>
				<Link to={"/parcerias"} style={{ textDecoration: "none" }}>
					<MenuItem>
						<ProfessorsIcon />
						<span>Parcerias</span>
					</MenuItem>
				</Link>
				<a
					href="https://drive.google.com/drive/u/1/folders/0B_pfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA"
					style={{ textDecoration: "none" }}
				>
					<MenuItem>
						<CloudIcon />
						<span>Drive</span>
					</MenuItem>

					<Link to={"/feedback"} style={{ textDecoration: "none" }}>
						<MenuItem>
							<PerformanceIcon />
							<span>Feedback</span>
						</MenuItem>
					</Link>
				</a>

				<DirexSide>
					<Link to={"/direx"} style={{ textDecoration: "none" }}>
						<MenuItem>
							<DirexIcon />
							<span>Diretoria</span>
						</MenuItem>
					</Link>
				</DirexSide>
			</Wrapper>
			<BottomMenu>
				<Link to={"/tarefas"} style={{ textDecoration: "none" }}>
					<TaskDoneBottomIcon />
				</Link>
				<Link to={"/apontamento"} style={{ textDecoration: "none" }}>
					<NotationBottomIcon />
				</Link>
				<Link to={"/calendario"} style={{ textDecoration: "none" }}>
					<CalendarBottomIcon />
				</Link>
				<Link to={"/menu"} style={{ textDecoration: "none" }}>
					<MenuBottomIcon className="active" />
				</Link>
			</BottomMenu>
		</Container>
	);
};

export default MenuBottom;
