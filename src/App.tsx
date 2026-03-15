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
	ItemTitle,
	ItemFooter,
} from "@/components/ui/item";

const LOADING_HIDE_DELAY = 1400;
const CONTENT_SHOW_DELAY = 1500;

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
				className={`animate-loading-block fixed inset-0 z-50 flex items-center justify-center ${isLoading ? "flex" : "hidden"}`}
			>
				<div className="border-foreground bg-background flex w-52 flex-col gap-3 border-2 px-6 pt-4 pb-4">
					<span className="text-sm font-semibold tracking-wide">
						Loading...
					</span>
					<div className="bg-muted h-[2px] w-full overflow-hidden">
						<div className="animate-loading-bar bg-foreground h-full" />
					</div>
				</div>
			</div>

			<div
				className={`animate-show-content mt-12 w-[90%] max-w-4xl opacity-0 ${isVisible ? "block" : "hidden"}`}
			>
				<div className="border-border mb-8 flex flex-col items-center gap-6 border-b pb-8 sm:flex-row sm:items-center">
					<img
						src="/cv_kuva_neliö.jpg"
						alt="Otso Saarinen"
						className="h-32 w-32 object-cover"
					/>
					<div className="flex flex-col gap-1 text-center sm:text-left">
						<p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
							Portfolio
						</p>
						<h1 className="text-foreground text-4xl font-extrabold sm:text-5xl">
							Otso Saarinen
						</h1>
						<p className="text-muted-foreground text-sm tracking-wide">
							System Specialist · Turku, Finland
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div className="contents sm:flex sm:flex-col sm:gap-4">
						<Card className="order-1 border-2 border-[#8EC5FF] sm:order-none">
							<CardHeader>
								<CardTitle>Profile</CardTitle>
								<CardDescription>
									I'm an ICT engineer from Turku, Finland,
									currently working as a System Specialist at
									the University of Turku.
								</CardDescription>
								<CardAction>
									<div className="bg-[#8EC5FF]/20 p-1.5">
										<User className="h-4 w-4 text-[#8EC5FF]" />
									</div>
								</CardAction>
							</CardHeader>
							<CardContent>
								<div className="flex flex-row gap-2">
									<Button
										size="icon"
										variant="secondary"
										asChild
									>
										<a
											href="https://github.com/otsosaarinen"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github />
										</a>
									</Button>
									<Button
										size="icon"
										variant="secondary"
										asChild
									>
										<a
											href="https://www.linkedin.com/in/otsosaarinen/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin />
										</a>
									</Button>
									<Button
										size="icon"
										variant="secondary"
										asChild
									>
										<a
											href="mailto:saarinenotso@gmail.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Mail />
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="order-3 border-2 border-[#B5EAD7] sm:order-none">
							<CardHeader>
								<CardTitle>Education</CardTitle>
								<CardAction>
									<div className="bg-[#B5EAD7]/20 p-1.5">
										<GraduationCap className="h-4 w-4 text-[#B5EAD7]" />
									</div>
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Turku University of Applied Sciences
										</ItemTitle>
										<ItemDescription className="shrink-0 self-start whitespace-nowrap">
											8/2021 - 4/2025
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Bachelor of Engineering, ICT
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											NIT Hachinohe (八戸高専)
										</ItemTitle>
										<ItemDescription className="shrink-0 self-start whitespace-nowrap">
											4/2024 - 7/2024
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Medical Engineering Research
											Exchange
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>

						<Card className="order-4 border-2 border-[#C3B1E1] sm:order-none">
							<CardHeader>
								<CardTitle>Skills</CardTitle>
								<CardAction>
									<div className="bg-[#C3B1E1]/20 p-1.5">
										<Code2 className="h-4 w-4 text-[#C3B1E1]" />
									</div>
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Languages</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												TypeScript
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												JavaScript
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Python
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												PowerShell
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												C#
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Frontend</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												React
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Next.js
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Tailwind CSS
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Backend</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												Node.js
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Express.js
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Apache Kafka
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												REST API
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												.NET
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>Databases</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												SQL
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												PostgreSQL
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												InfluxDB
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>DevOps and Tools</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												Azure
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Docker
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Git
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												CI/CD
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Jira
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Grafana
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												SFTP
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>
					</div>
					<div className="contents sm:flex sm:flex-col sm:gap-4">
						<Card className="order-2 border-2 border-[#FFB86A] sm:order-none">
							<CardHeader>
								<CardTitle>Experience</CardTitle>
								<CardAction>
									<div className="bg-[#FFB86A]/20 p-1.5">
										<Waypoints className="h-4 w-4 text-[#FFB86A]" />
									</div>
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Software Engineer</ItemTitle>
										<ItemDescription className="shrink-0 whitespace-nowrap self-start">
											3/2026 - Present
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Since AI
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Volunteer work developing a
											registration and voting system for
											the Since AI hackathon.
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>System Specialist</ItemTitle>
										<ItemDescription className="shrink-0 whitespace-nowrap self-start">
											1/2026 - Present
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											University of Turku
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Administered and developed Microsoft
											365 and Azure environments. Managed
											identities using Active Directory
											and Entra ID, and automated tasks
											with PowerShell scripts.
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Integration Analyst
										</ItemTitle>
										<ItemDescription className="shrink-0 whitespace-nowrap self-start">
											7/2025 - 1/2026
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Lowell Suomi Oy
										</ItemDescription>
									</ItemContent>
									<ItemFooter className="mt-1">
										<ItemDescription className="line-clamp-none">
											Managed data transfers between
											Lowell and client companies.
											Maintained SFTP servers, configured
											file transfers with MOVEit and
											BizTalk, and resolved API
											integration issues.
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Application Specialist
										</ItemTitle>
										<ItemDescription className="shrink-0 whitespace-nowrap self-start">
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
											Internship at 2M-IT's Service Desk.
											Solved IT issues for employees in
											VARHA and Oma Häme wellbeing
											services counties using Active
											Directory, Azure, Intune, Entra ID
											and Lifecare.
										</ItemDescription>
									</ItemFooter>
								</Item>
							</CardContent>
						</Card>

						<Card className="order-5 border-2 border-[#FFA2A2] sm:order-none">
							<CardHeader>
								<CardTitle>Projects</CardTitle>
								<CardAction>
									<div className="bg-[#FFA2A2]/20 p-1.5">
										<ToolCase className="h-4 w-4 text-[#FFA2A2]" />
									</div>
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a
												href="https://github.com/otsosaarinen/spotify-web-controller"
												target="_blank"
												rel="noopener noreferrer"
											>
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
											<Badge variant="secondary">
												<BadgeCheck />
												TypeScript
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												React
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Tailwind CSS
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												REST API
											</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a
												href="https://github.com/otsosaarinen/pathway"
												target="_blank"
												rel="noopener noreferrer"
											>
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
											<Badge variant="secondary">
												<BadgeCheck />
												.NET
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												C#
											</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											<a
												href="https://github.com/otsosaarinen/klemmari"
												target="_blank"
												rel="noopener noreferrer"
											>
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
											<Badge variant="secondary">
												<BadgeCheck />
												Azure
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Artificial Intelligence
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Python
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												React
											</Badge>
										</div>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="border-border text-muted-foreground mt-8 mb-6 border-t pt-4 text-center text-xs tracking-wide">
					© 2026 Otso Saarinen
				</div>
			</div>
		</div>
	);
}

export default App;
