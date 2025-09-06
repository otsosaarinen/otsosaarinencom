import "./App.css";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	return (
		<>
			<div className="font-inter flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900">
				<div className="flex h-screen w-full flex-col items-center justify-center gap-3">
					<h1 className="text-9xl font-bold">
						Otso <span className="text-blue-600">Saarinen</span>
					</h1>
					<h2 className="text-2xl">
						Integration Analyst & Software Developer
					</h2>
				</div>
				<div className="relative flex h-screen w-full flex-row items-center justify-center gap-5 bg-blue-600 text-white">
					<img
						src="src/assets/kuva.jpg"
						alt="Profile"
						className="h-80 rounded-2xl"
					/>

					<div className="flex h-80 flex-col gap-3">
						<div className="text-4xl font-bold">About me</div>
						<div className="w-140 text-2xl">
							<p>
								<span className="font-extrabold">“ </span>
								I'm Otso, an Integration Analyst ja Software
								Developer from Finland. I'm currently working
								fulltime at Lowell and doing hobby programming
								on my free time with TS/JS & .NET/C#. I
								specialize in building web apps and love working
								with both frontend and backend tech.{" "}
								<span className="font-extrabold">”</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex h-screen w-full flex-col items-center justify-center gap-5">
					<div className="text-4xl font-bold">Experience</div>
					<div className="flex flex-col gap-3">
						<ExperienceButton
							title="Integration Analyst"
							company="Lowell Suomi Oy"
							description="Worked in the data transfer team and handled daily data transfer tasks. Solved issues and helped improve existing customer integrations."
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
				<div className="flex w-full flex-col items-center justify-center gap-3 py-25">
					<div className="text-lg font-bold underline decoration-neutral-900 decoration-1 underline-offset-8">
						Contact me
					</div>
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
		</>
	);
}

export default App;
