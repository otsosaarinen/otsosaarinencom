import { useEffect, useState } from "react";

import { Github, Linkedin, Mail, BadgeCheck } from "lucide-react";

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
	const [profileVisibility, setProfileVisibility] = useState("hidden");
	const [loadingBlockVisibility, setLoadingBlockVisibility] =
		useState("flex");

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingBlockVisibility("hidden");
			setProfileVisibility("flex");
		}, 2500);
		return () => clearTimeout(timer);
	});

	return (
		<>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div
					className="bg-background flex h-screen w-full flex-col items-center justify-center"
					style={{ fontFamily: "var(--font-montserrat)" }}
				>
					<div className="absolute top-5 right-5">
						<ModeToggle />
					</div>

					<div
						className={`animate-loading-block ${loadingBlockVisibility} flex-col gap-4 [--radius:1rem]`}
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

					<Card
						className={`${profileVisibility} animate-show-profile w-full max-w-md opacity-0`}
					>
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
										Software Engineer • Integration Analyst
									</ItemDescription>
								</ItemContent>
							</Item>
						</CardHeader>
						<CardContent>
							<div className="text-sm">
								I'm an ICT engineer from Turku, Finland,
								currently working as an Integration Analyst at
								Lowell. I enjoy building web projects and
								exploring new technologies.
							</div>
						</CardContent>
						<CardFooter>
							<div className="flex flex-col gap-6">
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
							</div>
						</CardFooter>
					</Card>

					<div className="absolute bottom-3 text-xs">
						© 2025 Otso Saarinen. All rights reserved.
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
