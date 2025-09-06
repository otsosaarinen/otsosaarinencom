import "./App.css";
import ContactButton from "./components/ContactButton";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	return (
		<>
			<div className="font-inter flex min-h-screen min-w-screen flex-col items-center justify-center gap-10 bg-neutral-900 text-white">
				<div className="flex flex-col items-center justify-center gap-1">
					<h1 className="text-6xl font-semibold">Otso Saarinen</h1>
					<h2 className="text-lg">
						Integration Analyst & Software Developer
					</h2>
				</div>
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="text-2xl">Experience</div>
					<div className="flex flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl border-1 border-blue-900 bg-blue-950 p-5 transition-all duration-150 ease-in hover:cursor-pointer hover:bg-blue-900">
						<div className="w-full">
							<div className="flex w-full flex-row items-center justify-between">
								<div className="text-lg">
									Integration Analyst
								</div>
								<div>7/2025 - Present</div>
							</div>
							<div className="text-neutral-300">
								Lowell Suomi Oy
							</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Worked in the data transfer team and solved issues
							in customer integrations. Handled daily data
							transfer tasks and helped improve existing customer
							integrations.
						</div>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 rounded-2xl border-1 border-blue-900 bg-blue-950 p-5 transition-all duration-150 ease-in hover:cursor-pointer hover:bg-blue-900">
						<div className="w-full">
							<div className="flex w-full flex-row items-center justify-between">
								<div className="text-lg">Exchange study</div>
								<div>4/2024 - 7/2024</div>
							</div>
							<div className="text-neutral-300">
								National Institute of Technology, Hachinohe
								College (八戸高専)
							</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Exchange student in Hachinohe, Japan. Researched
							radiofrequency ablation (RFA) cancer treatment and
							its impact on human cells.
						</div>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 rounded-2xl border-1 border-blue-900 bg-blue-950 p-5 transition-all duration-150 ease-in hover:cursor-pointer hover:bg-blue-900">
						<div className="w-full">
							<div className="flex w-full flex-row items-center justify-between">
								<div className="text-lg">
									Application Specialist
								</div>
								<div>11/2023 - 4/2024</div>
							</div>
							<div className="text-neutral-300">2M-IT Oy</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Internship at 2M-IT's Service Desk. Solved IT issues
							for employees in the wellbeing services counties of
							Southwest Finland and Kanta-Häme.
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="text-2xl">Contact me</div>
					<div className="flex flex-row gap-3">
						<ContactButton
							link_url="https://www.linkedin.com/in/otsosaarinen/"
							icon={Linkedin}
						/>
						<ContactButton
							link_url="https://github.com/otsosaarinen"
							icon={Github}
						/>
						<ContactButton link_url="" icon={Mail} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
