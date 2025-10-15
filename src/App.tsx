import "./App.css";
import { useState } from "react";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";

import { useScramble } from "use-scramble";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	const [showContent, setShowContent] = useState(false);

	const nameScramble = useScramble({
		text: "OTSO SAARINEN",
		speed: 0.7,
		tick: 2,
		step: 1,
		scramble: 10,
		seed: 5,
		chance: 1,
		range: [33, 125],
		onAnimationEnd: () => {
			setShowContent(true);
		},
	});

	return (
		<>
			<div className="font-inter flex flex-col justify-center overflow-x-hidden bg-linear-to-r from-blue-700 to-indigo-700 text-white">
				<div className="flex h-75 w-full flex-col items-center justify-center">
					<h1
						className="z-10 p-5 text-center text-4xl font-bold tracking-wide sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
						ref={nameScramble.ref}
						onMouseEnter={nameScramble.replay}
					></h1>
				</div>
				<div className="flex grow items-center justify-center bg-neutral-900/90 py-15">
					<div className="grid w-[70%] grid-cols-1 justify-items-start gap-15 xl:grid-cols-2">
						<div
							className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">EXPERIENCE</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="Integration Analyst"
								company="Lowell Suomi Oy"
								date="7/2025 - Present"
								description="Worked in the data transfer team and handled
								data transfers between Lowell and client
								companies. Managed SFTP servers and configured
								file transfers (e.g. with MOVEit and BizTalk)."
								tags="Data integration, SFTP, SSH, BizTalk,
									MOVEit, SQL, Jira"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="Application Specialist"
								company="2M-IT Oy"
								date="11/2023 - 4/2024"
								description="Internship at 2M-IT's Service Desk. Solved IT issues for employees in the wellbeing services counties of Southwest Finland and Kanta-Häme."
								tags="Azure, Active Directory, Intune, Entra ID, Citrix, VPN"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="Student Assistant"
								company="Turun ammattikorkeakoulu Oy"
								date="5/2022 - 6/2025"
								description="Assisted applicants with IT issues during the Turku UAS entrance exam. Helped applicants connect to the exam network and supervised them during the exam."
								tags="IT support, Problem solving"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
						</div>
						<div
							className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">EDUCATION</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="Bachelor of Engineering, ICT"
								company="Turku University of Applied Sciences"
								date="8/2021 - 4/2025"
								description="Completed health technology specialization studies and took courses in software development, medical regulations and AI."
								tags="TypeScript, JavaScript, Python, React, Azure, AI, RAG, Databases"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="Student exchange program"
								company="National Institute of Technology, Hachinohe College (八戸高専)"
								date="4/2024 - 7/2024"
								description="Exchange student in Hachinohe, Japan. Researched radiofrequency ablation (RFA) cancer treatment and its impact on human cells."
								tags="Medical engineering, ElmerGUI, SALOME, FEM, 3D modeling"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
						</div>
						<div
							className={`w-full opacity-0 xl:col-span-2 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">PROJECTS</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<div className="text-sm italic">Coming soon</div>
						</div>

						<div
							className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">CONTACT ME</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<div className="flex flex-col items-start justify-center gap-3">
								<ContactButton
									url="https://github.com/otsosaarinen"
									text="GitHub"
									icon={Github}
								/>
								<ContactButton
									url="https://www.linkedin.com/in/otsosaarinen/"
									text="LinkedIn"
									icon={Linkedin}
								/>{" "}
								<ContactButton
									url="mailto:saarinenotso@gmail.com"
									text="Email"
									icon={Mail}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
