import { useEffect, useState } from "react";

import {
	Github,
	Linkedin,
	Mail,
	BadgeCheck,
	Code2,
	User,
	Waypoints,
	ToolCase,
	GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "./components/ui/spinner";
import { Badge } from "./components/ui/badge";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardAction,
} from "@/components/ui/card";
import {
	Item,
	ItemHeader,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
	ItemFooter,
} from "@/components/ui/item";

const LOADING_HIDE_DELAY = 2000;
const CONTENT_SHOW_DELAY = 2100;

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timers: number[] = [];

		timers.push(
			setTimeout(() => {
				setIsLoading(false);
			}, LOADING_HIDE_DELAY),
		);

		timers.push(
			setTimeout(() => {
				setIsVisible(true);
			}, CONTENT_SHOW_DELAY),
		);

		return () => timers.forEach(clearTimeout);
	}, []);

	return (
		<div className="bg-background flex min-h-screen w-full flex-col items-center justify-start font-sans">
			<div
				className={`animate-loading-block fixed inset-0 z-50 items-center justify-center [--radius:1rem] ${isLoading ? "flex" : "hidden"}`}
			>
				<Item variant="muted">
					<ItemMedia>
						<Spinner />
					</ItemMedia>
					<ItemContent>
						<ItemTitle className="line-clamp-1">
							Loading website...
						</ItemTitle>
					</ItemContent>
				</Item>
			</div>

			<div
				className={`animate-show-content mt-12 w-[90%] max-w-4xl opacity-0 ${isVisible ? "block" : "hidden"}`}
			>
				<div className="mb-6 flex flex-col items-center gap-3">
					<h1 className="text-foreground text-center text-4xl font-extrabold sm:text-6xl">
						Hi, I'm Otso Saarinen
					</h1>
					<Badge className="bg-blue-500 text-white">
						Welcome to my portfolio
					</Badge>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{/* Left column */}
					<div className="flex flex-col gap-4">
						<Card className="border-[#8EC5FF]">
							<CardHeader>
								<CardTitle>Profile</CardTitle>
								<CardDescription>
									I'm an ICT engineer from Turku, Finland,
									currently working as an Integration
									Analyst at Lowell. I enjoy building web
									projects and exploring new technologies,
									and I'm currently learning more about
									.NET framework.
								</CardDescription>
								<CardAction>
									<User />
								</CardAction>
							</CardHeader>
							<CardContent>
								<div className="flex flex-row gap-2">
									<Button size="icon" variant="secondary" asChild>
										<a href="https://github.com/otsosaarinen" target="_blank" rel="noopener noreferrer">
											<Github />
										</a>
									</Button>
									<Button size="icon" variant="secondary" asChild>
										<a href="https://www.linkedin.com/in/otsosaarinen/" target="_blank" rel="noopener noreferrer">
											<Linkedin />
										</a>
									</Button>
									<Button size="icon" variant="secondary" asChild>
										<a href="mailto:saarinenotso@gmail.com" target="_blank" rel="noopener noreferrer">
											<Mail />
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="border-[#B5EAD7]">
							<CardHeader>
								<CardTitle>Education</CardTitle>
								<CardAction>
									<GraduationCap />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Bachelor of Engineering, ICT
										</ItemTitle>
										<ItemDescription>
											8/2021 - 4/2025
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Turku University of Applied Sciences
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Bachelor of Engineering at
											Information and Communications
											Technology
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Student exchange program
										</ItemTitle>
										<ItemDescription>
											4/2024 - 7/2024
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											NIT Hachinohe (八戸高専)
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Completed student exchange in
											Hachinohe, Japan, where I researched
											radiofrequency ablation cancer
											treatment technology
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
						</Card>

						<Card className="border-[#C3B1E1]">
							<CardHeader>
								<CardTitle>Skills</CardTitle>
								<CardAction>
									<Code2 />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Programming Languages</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />TypeScript</Badge>
											<Badge variant="secondary"><BadgeCheck />JavaScript</Badge>
											<Badge variant="secondary"><BadgeCheck />Python</Badge>
											<Badge variant="secondary"><BadgeCheck />C#</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Frontend</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />React</Badge>
											<Badge variant="secondary"><BadgeCheck />Next.js</Badge>
											<Badge variant="secondary"><BadgeCheck />Tailwind CSS</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Backend</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />Node.js</Badge>
											<Badge variant="secondary"><BadgeCheck />Express.js</Badge>
											<Badge variant="secondary"><BadgeCheck />Apache Kafka</Badge>
											<Badge variant="secondary"><BadgeCheck />REST API</Badge>
											<Badge variant="secondary"><BadgeCheck />.NET</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Databases</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />SQL</Badge>
											<Badge variant="secondary"><BadgeCheck />PostgreSQL</Badge>
											<Badge variant="secondary"><BadgeCheck />InfluxDB</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>DevOps and Tools</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />Microsoft Azure</Badge>
											<Badge variant="secondary"><BadgeCheck />Docker</Badge>
											<Badge variant="secondary"><BadgeCheck />Git</Badge>
											<Badge variant="secondary"><BadgeCheck />CI/CD</Badge>
											<Badge variant="secondary"><BadgeCheck />Jira</Badge>
											<Badge variant="secondary"><BadgeCheck />Grafana</Badge>
											<Badge variant="secondary"><BadgeCheck />SFTP</Badge>
											<Badge variant="secondary"><BadgeCheck />SSH</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>
					</div>

					{/* Right column */}
					<div className="flex flex-col gap-4">
						<Card className="border-[#FFB86A]">
							<CardHeader>
								<CardTitle>Experience</CardTitle>
								<CardAction>
									<Waypoints />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Integration Analyst</ItemTitle>
										<ItemDescription>
											7/2025 - Present
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Lowell Suomi Oy
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Worked in the data transfer team,
											troubleshooting issues related to
											SFTP servers and API integrations
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Application Specialist</ItemTitle>
										<ItemDescription>
											11/2023 - 4/2024
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											2M-IT Oy
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Resolved IT issues for employees in
											the wellbeing services counties of
											Southwest Finland and Kanta-Häme
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Student Assistant</ItemTitle>
										<ItemDescription>
											5/2022 - 6/2025
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Turku University of Applied Sciences
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Assisted applicants with IT issues
											during Turku UAS entrance exams
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
						</Card>

						<Card className="border-[#FFA2A2]">
							<CardHeader>
								<CardTitle>Projects</CardTitle>
								<CardAction>
									<ToolCase />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a href="https://www.theseus.fi/handle/10024/881694" target="_blank" rel="noopener noreferrer">
												Bachelor's thesis
											</a>
										</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Real-time patient data collection
											and analysis using Apache Kafka
										</ItemDescription>
										<div className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />Apache Kafka</Badge>
											<Badge variant="secondary"><BadgeCheck />Python</Badge>
											<Badge variant="secondary"><BadgeCheck />InfluxDB</Badge>
											<Badge variant="secondary"><BadgeCheck />Grafana</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a href="https://github.com/otsosaarinen/spotify-web-controller" target="_blank" rel="noopener noreferrer">
												Spotify Web Controller
											</a>
										</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Web application for controlling
											Spotify music playback
										</ItemDescription>
										<div className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />TypeScript</Badge>
											<Badge variant="secondary"><BadgeCheck />React</Badge>
											<Badge variant="secondary"><BadgeCheck />Tailwind CSS</Badge>
											<Badge variant="secondary"><BadgeCheck />REST API</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a href="https://github.com/otsosaarinen/pathway" target="_blank" rel="noopener noreferrer">
												Pathway
											</a>
										</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											.NET WPF application for managing
											file transfers
										</ItemDescription>
										<div className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />C#</Badge>
											<Badge variant="secondary"><BadgeCheck />.NET</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a href="https://github.com/otsosaarinen/klemmari" target="_blank" rel="noopener noreferrer">
												Klemmari
											</a>
										</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											AI chatbot built using RAG
											architecture
										</ItemDescription>
										<div className="flex flex-wrap gap-2">
											<Badge variant="secondary"><BadgeCheck />Microsoft Azure</Badge>
											<Badge variant="secondary"><BadgeCheck />AI</Badge>
											<Badge variant="secondary"><BadgeCheck />Python</Badge>
											<Badge variant="secondary"><BadgeCheck />React</Badge>
											<Badge variant="secondary"><BadgeCheck />JavaScript</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="mt-6 mb-4 text-center text-xs">
					© 2025 Otso Saarinen. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default App;
