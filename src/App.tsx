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
		text: "otso saarinen",
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
							<h3 className="font-bold">experience</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="integration analyst"
								company="lowell suomi oy"
								date="7/2025 - present"
								description="worked in the data transfer team and handled
								data transfers between lowell and client
								companies. managed sftp servers and configured
								file transfers (e.g. with moveit and biztalk)."
								tags="data integration, sftp, ssh, biztalk,
									moveit, sql, jira"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="application specialist"
								company="2m-it oy"
								date="11/2023 - 4/2024"
								description="internship at 2m-it's service desk. solved it issues for employees in the wellbeing services counties of southwest finland and kanta-häme."
								tags="azure, active directory, intune, entra id, citrix, vpn"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="student assistant"
								company="turun ammattikorkeakoulu oy"
								date="5/2022 - 6/2025"
								description="assisted applicants with it issues during the turku uas entrance exam. helped applicants connect to the exam network and supervised them during the exam."
								tags="it support, problem solving"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
						</div>
						<div
							className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">education</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="bachelor of engineering, ict"
								company="turku university of applied sciences"
								date="8/2021 - 4/2025"
								description="completed health technology specialization studies and took courses in software development, medical regulations and ai."
								tags="typescript, javascript, python, react, azure, ai, rag, databases"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<ExperienceButton
								title="student exchange program"
								company="national institute of technology, hachinohe college (八戸高専)"
								date="4/2024 - 7/2024"
								description="exchange student in hachinohe, japan. researched radiofrequency ablation (rfa) cancer treatment and its impact on human cells."
								tags="medical engineering, elmergui, salome, fem, 3d modeling"
							/>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
						</div>
						<div
							className={`w-full opacity-0 xl:col-span-2 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">projects</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<div className="text-sm italic">coming soon</div>
						</div>
						<div
							className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
							<h3 className="font-bold">contact me</h3>
							<div className="my-3 h-[0.5px] w-full bg-neutral-500"></div>
							<div className="flex flex-col items-start justify-center gap-3">
								<ContactButton
									url="https://github.com/otsosaarinen"
									text="github"
									icon={Github}
								/>
								<ContactButton
									url="https://www.linkedin.com/in/otsosaarinen/"
									text="linkedin"
									icon={Linkedin}
								/>{" "}
								<ContactButton
									url="mailto:saarinenotso@gmail.com"
									text="email"
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
