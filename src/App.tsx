import "./App.css";
import { useState } from "react";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";
import ProjectButton from "./components/ProjectButton";
import EducationButton from "./components/EducationButton";

import { useScramble } from "use-scramble";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	const [showFirstBlock, setShowFirstBlock] = useState(false);
	const [showSecondBlock, setShowSecondBlock] = useState(false);

	const nameScramble = useScramble({
		text: "otso saarinen",
		speed: 0.7,
		tick: 2,
		step: 1,
		scramble: 10,
		seed: 5,
		chance: 1,
		range: [33, 125],
	});

	const titleScramble = useScramble({
		text: "web & integration developer",
		speed: 0.7,
		tick: 2,
		step: 1,
		scramble: 10,
		seed: 5,
		chance: 1,
		range: [33, 125],
		onAnimationEnd: () => {
			setShowFirstBlock(true);

			setTimeout(() => {
				setShowSecondBlock(true);
			}, 1000);
		},
	});

	return (
		<>
			<div className="font-inter flex min-h-screen flex-col items-center justify-start bg-neutral-900 py-15 text-white">
				<div className="flex w-80 flex-col gap-15 sm:w-120 md:w-160 lg:w-190">
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col items-start justify-center">
							<h1
								className="font-bold"
								ref={nameScramble.ref}
								onMouseEnter={nameScramble.replay}
							></h1>
							<h2
								className="text-sm text-neutral-400"
								ref={titleScramble.ref}
								onMouseEnter={titleScramble.replay}
							></h2>
						</div>
						<div
							className={`flex flex-col items-end justify-center opacity-0 ${showFirstBlock ? "animate-show-first-block" : ""}`}
						>
							<ContactButton
								url="https://github.com/otsosaarinen"
								text="github"
								icon={Github}
								color="#8ec5ff"
							/>
							<ContactButton
								url="https://www.linkedin.com/in/otsosaarinen/"
								text="linkedin"
								icon={Linkedin}
								color="#ffb86a"
							/>{" "}
							<ContactButton
								url="mailto:saarinenotso@gmail.com"
								text="email"
								icon={Mail}
								color="#ffa2a2"
							/>
						</div>
					</div>
					<div
						className={`w-80 text-sm text-neutral-400 opacity-0 sm:w-100 ${showFirstBlock ? "animate-show-first-block" : ""}`}
					>
						portfolio website showcasing my recent experiences and
						personal projects
					</div>
					<div
						className={`w-full opacity-0 ${showSecondBlock ? "animate-show-second-block" : ""}`}
					>
						<h3 className="mb-3 text-right text-lg font-semibold text-blue-300 italic">
							experience
						</h3>
						<ExperienceButton
							title="integration analyst"
							company="lowell suomi oy"
							date="7/2025 - present"
							description="worked in the data transfer team and solved daily data transfer issues within sftp servers and api integrations"
							skills={[
								"integration",
								"api",
								"sftp",
								"ssh",
								"biztalk",
								"moveit",
								"sql",
								"jira",
							]}
						/>
						<ExperienceButton
							title="service desk"
							company="2m-it oy"
							date="11/2023 - 4/2024"
							description="resolved it issues for employees in the wellbeing services counties of southwest finland and kanta-häme"
							skills={[
								"azure",
								"active directory",
								"intune",
								"entra id",
								"citrix",
								"vpn",
							]}
						/>
						<ExperienceButton
							title="student assistant"
							company="turun ammattikorkeakoulu oy"
							date="5/2022 - 6/2025"
							description="assisted applicants with it-related issues during the turku uas entrance exams"
							skills={["it support", "problem solving", "vpn"]}
						/>
					</div>
					<div
						className={`w-full opacity-0 ${showSecondBlock ? "animate-show-second-block" : ""}`}
					>
						<h3 className="mb-3 text-right text-lg font-semibold text-orange-300 italic">
							projects
						</h3>
						<ProjectButton
							title="föli-api"
							description="api wrapper for tsjl data interface"
							tags={[
								"typescript",
								"react",
								"rest api",
								"tailwind",
								"cloudflare",
							]}
							github_link="https://github.com/otsosaarinen/foli-api"
						/>
						<ProjectButton
							title="spotify-web-controller"
							description="web application for controlling spotify music playback"
							tags={[
								"typescript",
								"react",
								"rest api",
								"tailwind",
							]}
							github_link="https://github.com/otsosaarinen/spotify-web-controller"
						/>
						<ProjectButton
							title="bachelor's thesis"
							description="real-time patient data collection and analysis using apache kafka"
							tags={[
								"apache kafka",
								"python",
								"influxdb",
								"grafana",
							]}
							github_link="https://github.com/otsosaarinen/Thesis"
						/>
						<ProjectButton
							title="klemmari"
							description="website featuring a rag-ai chatbot"
							tags={[
								"azure",
								"ai",
								"rag",
								"python",
								"react",
								"javascript",
							]}
							github_link="https://github.com/otsosaarinen/Klemmari"
						/>
					</div>
					<div
						className={`w-full opacity-0 ${showSecondBlock ? "animate-show-second-block" : ""}`}
					>
						<h3 className="mb-3 text-right text-lg font-semibold text-red-300 italic">
							education
						</h3>
						<EducationButton
							title="bachelor of engineering, ict"
							school="turku university of applied sciences"
							date="8/2021 - 4/2025"
							description="specialized in health technology and took courses in software development"
							skills={[
								"typescript",
								"javascript",
								"python",
								"react",
								"azure",
								"ai",
								"rag",
								"databases",
							]}
						/>
						<EducationButton
							title="student exchange program"
							school="national institute of technology, hachinohe college (八戸高専)"
							date="4/2024 - 7/2024"
							description="three-month student exchange in japan researching radiofrequency ablation"
							skills={[
								"medical engineering",
								"3d modeling",
								"rfa",
								"elmergui",
								"salome",
								"fem",
							]}
						/>
					</div>
					<div
						className={`w-full text-sm text-neutral-400 opacity-0 ${showSecondBlock ? "animate-show-second-block" : ""}`}
					>
						<p>
							built using{" "}
							<span className="font-medium text-blue-300 italic">
								typescript
							</span>
							,{" "}
							<span className="font-medium text-blue-300 italic">
								react
							</span>{" "}
							and{" "}
							<span className="font-medium text-blue-300 italic">
								tailwind
							</span>
						</p>
						<p>
							hosted on{" "}
							<span className="font-medium text-orange-300 italic">
								cloudflare
							</span>
						</p>
						<p>
							icons from{" "}
							<span className="font-medium text-red-300 italic">
								lucide.dev
							</span>
						</p>
						<p>
							updated on{" "}
							<span className="font-medium text-white italic">
								20.10.2025
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
