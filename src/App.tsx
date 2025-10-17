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
			setShowContent(true);
		},
	});

	return (
		<>
			<div className="font-inter flex min-h-screen flex-col items-center justify-start bg-neutral-900 py-15 text-white">
				<div className="flex w-190 flex-col gap-15">
					<div className="flex flex-row items-start justify-between">
						<div className="flex flex-col items-start justify-center">
							<h1
								className="font-semibold"
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
							className={`flex flex-col items-end justify-center opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
						>
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
					<div
						className={`w-100 text-sm text-neutral-400 opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
					>
						portfolio website showcasing my recent experience,
						personal projects & technical skills
					</div>
					<div
						className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
					>
						<h3 className="mb-3 text-right font-semibold text-green-300 italic">
							experience
						</h3>
						<ExperienceButton
							title="integration analyst"
							company="lowell suomi oy"
							date="7/2025 - present"
							description="tldr"
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
							description="tldr"
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
							description="tldr"
							skills={["it support", "problem solving", "vpn"]}
						/>
					</div>
					<div
						className={`w-full opacity-0 xl:col-span-2 ${showContent ? "animate-show-content-blocks" : ""}`}
					>
						<h3 className="mb-3 text-right font-semibold text-indigo-300 italic">
							projects
						</h3>
						<div className="">coming soon</div>
					</div>
					<div
						className={`w-full opacity-0 ${showContent ? "animate-show-content-blocks" : ""}`}
					>
						<h3 className="mb-3 text-right font-semibold text-rose-300 italic">
							education
						</h3>
						<ExperienceButton
							title="bachelor of engineering, ict"
							company="turku university of applied sciences"
							date="8/2021 - 4/2025"
							description="tldr"
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
						<ExperienceButton
							title="student exchange program"
							company="national institute of technology, hachinohe college (八戸高専)"
							date="4/2024 - 7/2024"
							description="tldr"
							skills={[
								"medical engineering",
								"3d modeling",
								"elmergui",
								"salome",
								"fem",
							]}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
