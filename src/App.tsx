import "./App.css";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";
import Highlight from "./components/Highlight";
import SkillButton from "./components/SkillButton";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	return (
		<>
			<div className="font-inter">
				{/* Animation interface */}
				<div className="animate-hide-loading-screen fixed top-0 left-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-3 bg-rose-400 text-white">
					<div className="animate-close-loading-bar h-2 w-[300px] rounded-full bg-neutral-900">
						<div className="animate-loading-bar h-2 w-0 rounded-full bg-white"></div>
					</div>
				</div>

				{/* Base website interface */}
				<div className="flex flex-col items-center justify-center bg-white text-neutral-900">
					<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 px-3 text-center">
						<h1 className="text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl">
							Otso <span className="text-blue-600">Saarinen</span>
						</h1>
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
							Integration Analyst & Software Developer
						</h2>
					</div>
					<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-blue-600 text-white lg:flex-row">
						<img
							src="/kuva.jpg"
							alt="Profile"
							className="h-80 rounded-2xl"
						/>
						<div className="flex h-80 flex-col items-center justify-center gap-5 lg:items-start lg:justify-start">
							<Highlight color="bg-rose-400">About me</Highlight>
							<div className="w-90 text-center text-2xl sm:w-140 lg:text-left">
								<span className="font-black">“ </span>
								I'm Otso, an Integration Analyst ja Software
								Developer from Turku, Finland. I'm currently
								working fulltime at Lowell and doing hobby
								programming on my free time with TS/JS &
								.NET/C#. I specialize in building web apps and
								love working with both frontend and backend
								tech. <span className="font-black">”</span>
							</div>
						</div>
					</div>
					<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 p-15">
						<Highlight color="bg-rose-400">Experience</Highlight>
						<div className="flex flex-col gap-3">
							<ExperienceButton
								title="Integration Analyst"
								company="Lowell Suomi Oy"
								description="Worked in the data transfer team and handled data transfers between Lowell and client companies. Managed SFTP servers and configured file transfers (e.g. with MOVEit and BizTalk)."
								date="7/2025 - Present"
							/>
							<ExperienceButton
								title="Exchange study"
								company="National Institute of Technology, Hachinohe
								College (八戸高専)"
								description="Exchange student in Hachinohe, Japan. Researched
							radiofrequency ablation (RFA) cancer treatment and
							its impact on human cells."
								date="4/2024 - 7/2024"
							/>
							<ExperienceButton
								title="Application Specialist"
								company="2M-IT Oy"
								description="Internship at 2M-IT's Service Desk. Solved IT issues
							for employees in the wellbeing services counties of
							Southwest Finland and Kanta-Häme."
								date="11/2023 - 4/2024"
							/>
							<ExperienceButton
								title="Student Assistant"
								company="Turku University of Applied Sciences"
								description="Assisted applicants with IT issues during the Turku UAS entrance exam. Helped applicants connect to the exam network and supervised them during the exam."
								date="5/2022 - 6/2025"
							/>
						</div>
					</div>
					<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-blue-600 text-white">
						<Highlight color="bg-rose-400">
							Technical skills
						</Highlight>
						<div className="flex w-[90%] flex-row flex-wrap items-center justify-center gap-3 sm:w-125">
							<SkillButton text="TypeScript" />
							<SkillButton text="JavaScript" />
							<SkillButton text="React" />
							<SkillButton text="Node.js" />
							<SkillButton text="Express.js" />
							<SkillButton text="Tailwind CSS" />
							<SkillButton text="Python" />
							<SkillButton text="Microsoft Azure" />
							<SkillButton text="Apache Kafka" />
							<SkillButton text="REST API" />
							<SkillButton text="SQL" />
							<SkillButton text="Docker" />
							<SkillButton text="GitHub" />
						</div>
					</div>
					<div className="flex w-full flex-col items-center justify-center gap-5 p-40">
						<Highlight color="bg-rose-400">Contact me</Highlight>
						<div className="flex flex-row gap-3">
							<ContactButton
								link_url="https://www.linkedin.com/in/otsosaarinen/"
								icon={Linkedin}
							/>
							<ContactButton
								link_url="https://github.com/otsosaarinen"
								icon={Github}
							/>
							<ContactButton
								link_url="mailto:saarinenotso@gmail.com"
								icon={Mail}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
