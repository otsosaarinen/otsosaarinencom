import "./App.css";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	return (
		<>
			<div className="font-inter relative flex flex-col items-center justify-center bg-white text-neutral-900">
				<div className="animate-cover-slide-out fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center rounded-xl bg-blue-600">
					<div className="animate-close-loading-bar h-2 w-60 rounded-full bg-blue-800">
						<div className="animate-loading-bar h-full w-0 rounded-full bg-white"></div>
					</div>
				</div>
				<div className="flex min-h-screen w-full flex-col items-center justify-center gap-3 text-center">
					<div className="flex flex-row">
						<h1 className="w-75 text-6xl font-bold sm:w-auto sm:text-7xl md:text-8xl lg:text-9xl">
							Otso <span className="text-blue-600">Saarinen</span>
						</h1>
					</div>
					<h2 className="text-lg sm:text-2xl">
						Integration Analyst & Software Developer
					</h2>
				</div>
				<div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-blue-600 text-white lg:flex-row">
					<img
						src="/kuva.jpg"
						alt="Profile"
						className="h-80 rounded-2xl"
					/>

					<div className="flex h-80 flex-col items-center justify-center gap-3 lg:items-start lg:justify-start">
						<div className="relative z-10 text-4xl font-bold">
							About me
							<div className="absolute bottom-0 left-0 -z-10 h-3 w-41 bg-rose-400"></div>
						</div>
						<div className="w-90 text-center text-2xl sm:w-140 lg:text-left">
							<span className="font-extrabold">“ </span>
							I'm Otso, an Integration Analyst ja Software
							Developer from Turku, Finland. I'm currently working
							fulltime at Lowell and doing hobby programming on my
							free time with TS/JS & .NET/C#. I specialize in
							building web apps and love working with both
							frontend and backend tech.{" "}
							<span className="font-extrabold">”</span>
						</div>
					</div>
				</div>
				<div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 pt-15">
					<div className="relative z-10 text-4xl font-bold">
						Experience
						<div className="absolute bottom-0 left-0 -z-10 h-3 w-47 bg-rose-400"></div>
					</div>
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
				<div className="flex w-full flex-col items-center justify-center gap-5 pt-25 pb-50">
					<div className="relative z-10 text-4xl font-bold">
						Contact me
						<div className="absolute bottom-0 left-0 -z-10 h-3 w-49 bg-rose-400"></div>
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
