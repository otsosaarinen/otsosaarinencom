import { Github, Linkedin, Mail, BadgeCheck } from "lucide-react";

import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { Button } from "@/components/ui/button";
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
	return (
		<>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div
					className="bg-background flex h-screen flex-col items-center justify-center"
					style={{ fontFamily: "var(--font-montserrat)" }}
				>
					<div className="absolute top-5 right-5">
						<ModeToggle />
					</div>

					<Card className="w-full max-w-md">
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
									Tailwind
								</Badge>
								<Badge variant="secondary">
									<BadgeCheck />
									Node.js
								</Badge>
								<Badge variant="secondary">
									<BadgeCheck />
									Python
								</Badge>
								<Badge variant="secondary">
									<BadgeCheck />
									REST API
								</Badge>
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
