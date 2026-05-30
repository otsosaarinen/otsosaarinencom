import { Mail } from "lucide-react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
	return (
		<header className="mb-16">
			<div className="mb-6 flex items-start justify-between gap-8">
				<div>
					<h1
						className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl"
						style={{ fontFamily: "var(--font-playfair)" }}
					>
						Otso Saarinen
					</h1>
					<p className="mt-3 text-sm tracking-wide text-gray-500">
						System Specialist · Turku, Finland
					</p>
				</div>
				<Image
					src="/profile.jpg"
					alt="Otso Saarinen"
					width={72}
					height={92}
					className="shrink-0 object-cover object-top"
					priority
				/>
			</div>
			<p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600">
				System Specialist at the University of Turku, working with Azure,
				Microsoft 365, Entra ID, and PowerShell. Interested in artificial
				intelligence, cloud infrastructure, and health technology.
			</p>
			<div className="mb-3 flex flex-wrap items-center gap-5">
				<a
					href="https://github.com/otsosaarinen"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
				>
					<GitHubIcon className="h-3.5 w-3.5" />
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/otsosaarinen/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
				>
					<LinkedInIcon className="h-3.5 w-3.5" />
					LinkedIn
				</a>
				<a
					href="mailto:saarinenotso@proton.me"
					className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
				>
					<Mail className="h-3.5 w-3.5" />
					saarinenotso@proton.me
				</a>
			</div>
			<p className="text-xs font-medium text-amber-600">
				Since AI Hackathon 2025 — 1st Place
			</p>
		</header>
	);
}
