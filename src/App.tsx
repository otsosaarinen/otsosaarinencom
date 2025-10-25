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
} from "lucide-react";

import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
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
} from "@/components/ui/item";

function App() {
	const [loadingBlockVisibility, setLoadingBlockVisibility] =
		useState("flex");
	const [contentVisibility, setContentVisibility] = useState("hidden");

	useEffect(() => {
		const timers: number[] = [];

		timers.push(
			setTimeout(() => {
				setLoadingBlockVisibility("hidden");
			}, 2500),
		);

		timers.push(
			setTimeout(() => {
				setContentVisibility("flex");
			}, 2600),
		);

		return () => timers.forEach(clearTimeout);
	}, []);

	return (
		<>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div
					className="bg-background flex h-screen w-full flex-col items-center justify-center"
					style={{ fontFamily: "var(--font-montserrat)" }}
				>
					<div className="fixed top-3 right-3 hidden sm:block">
						<ModeToggle />
					</div>

					<div
						className={`animate-loading-block items-center justify-center ${loadingBlockVisibility} flex-col [--radius:1rem]`}
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
						className={`${contentVisibility} animate-show-content mt-200 flex w-[90%] flex-col items-center gap-4 opacity-0 sm:mt-175 sm:w-lg`}
					>
						<h1 className="text-foreground text-4xl font-extrabold sm:text-6xl">
							Otso Saarinen
						</h1>
						<h2 className="mb-10">
							<Badge>Welcome to my portfolio</Badge>
						</h2>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Profile</CardTitle>
								<CardDescription>
									<div>
										I'm an ICT engineer from Turku, Finland,
										currently working as an Integration
										Analyst at Lowell. I enjoy building web
										projects and exploring new technologies.
										Currently learning more about .NET
										Framework.
									</div>
								</CardDescription>
								<CardAction>
									<User />
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
											href="mailto:saarinenotso@gmai.com"
											target="_blank"
										>
											<Mail />
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Skills</CardTitle>
								<CardAction>
									<Code2 />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>+ 3 years</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
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
												React
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Node.js
											</Badge>

											<Badge variant="secondary">
												<BadgeCheck />
												Git
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>1 - 2 years</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												TypeScript
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												REST API
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Express.js
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Tailwind CSS
											</Badge>

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
												Docker
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												CI/CD
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="p-0">
									<ItemContent>
										<ItemTitle>0 - 1 years</ItemTitle>
										<ItemDescription className="flex flex-wrap gap-2">
											<Badge variant="secondary">
												<BadgeCheck />
												Apache Kafka
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Microsoft Azure
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												C#
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												.NET
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Next.js
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Grafana
											</Badge>
											<Badge variant="secondary">
												<BadgeCheck />
												Jira
											</Badge>
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>

						<Card className="w-full">
							<CardHeader>
								<CardTitle>Experience</CardTitle>
								<CardAction>
									<Waypoints />
								</CardAction>
							</CardHeader>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Integration Analyst
										</ItemTitle>
										<ItemDescription>
											7/2025 - Present
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Lowell Suomi Oy
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>
											Application Specialist
										</ItemTitle>
										<ItemDescription>
											11/2023 - 4/2024
										</ItemDescription>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											2M-IT Oy
										</ItemDescription>
									</ItemContent>
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
											Turun Ammattikorkeakoulu Oy
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>

						<Card className="w-full">
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
											Spotify Web Controller
										</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											Web appliation for controlling
											Spotify music playback.
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Klemmari</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											AI chatbot built with RAG
											architecture
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
							<CardContent>
								<Item className="gap-0 p-0">
									<ItemHeader>
										<ItemTitle>Pathway</ItemTitle>
									</ItemHeader>
									<ItemContent>
										<ItemDescription>
											.NET WPF application for managing
											filetransfers.
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardContent>
						</Card>

						<div className="mt-15 mb-2 text-xs">
							© 2025 Otso Saarinen. All rights reserved.
						</div>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
