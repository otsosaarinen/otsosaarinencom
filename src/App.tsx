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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	CardAction,
} from "@/components/ui/card";
import {
	Item,
	ItemActions,
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
					<div className="absolute top-3 right-3">
						<ModeToggle />
					</div>

					<div className="absolute bottom-3 text-xs">
						© 2025 Otso Saarinen. All rights reserved.
					</div>

					<div
						className={`animate-loading-block items-center justify-center ${loadingBlockVisibility} flex-col [--radius:1rem]`}
					>
						<Item variant="muted">
							<ItemMedia>
								<Spinner className="text-blue-600" />
							</ItemMedia>
							<ItemContent>
								<ItemTitle className="line-clamp-1">
									Loading website...
								</ItemTitle>
							</ItemContent>
						</Item>
					</div>

					<div
						className={`${contentVisibility} animate-show-content flex w-full max-w-md flex-col gap-4 opacity-0`}
					>
						<Card>
							<CardHeader>
								<Item className="p-0">
									<ItemMedia>
										<Avatar className="size-10">
											<AvatarImage src="cv_kuva_neliö.jpg"></AvatarImage>
											<AvatarFallback>OS</AvatarFallback>
										</Avatar>
									</ItemMedia>
									<ItemContent>
										<ItemTitle>Otso Saarinen</ItemTitle>
										<ItemDescription>
											Software Engineer • Integration
											Analyst
										</ItemDescription>
									</ItemContent>
								</Item>
							</CardHeader>
						</Card>

						<Card className="w-full max-w-md">
							<CardHeader>
								<CardTitle>Profile</CardTitle>
								<CardDescription>
									I'm an ICT engineer from Turku, Finland,
									currently working as an Integration Analyst
									at Lowell. I enjoy building web projects and
									exploring new technologies.
								</CardDescription>
								<CardAction>
									<User />
								</CardAction>
							</CardHeader>
							<CardContent></CardContent>
							<CardFooter>
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
							</CardFooter>
						</Card>

						<Card className="w-full max-w-md">
							<CardHeader>
								<CardTitle>Skills</CardTitle>
								<CardAction>
									<Code2 />
								</CardAction>
							</CardHeader>
							<CardContent>
								<div className="flex flex-row flex-wrap gap-2">
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
										Node.js
									</Badge>
									<Badge variant="secondary">
										<BadgeCheck />
										Tailwind CSS
									</Badge>
									<Badge variant="secondary">
										<BadgeCheck />
										REST API
									</Badge>
									<Badge variant="secondary">
										<BadgeCheck />
										Python
									</Badge>
									<Badge variant="secondary">
										<BadgeCheck />
										Docker
									</Badge>
									<Badge variant="secondary">
										<BadgeCheck />
										Git
									</Badge>
								</div>
							</CardContent>
						</Card>

						<Card className="w-full max-w-md">
							<CardHeader>
								<CardTitle>Experience</CardTitle>
								<CardAction>
									<Waypoints />
								</CardAction>
							</CardHeader>
						</Card>

						<Card className="w-full max-w-md">
							<CardHeader>
								<CardTitle>Projects</CardTitle>
								<CardAction>
									<ToolCase />
								</CardAction>
							</CardHeader>
						</Card>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
