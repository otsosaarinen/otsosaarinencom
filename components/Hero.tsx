import { Mail, Trophy } from "lucide-react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
	return (
		<header className="flex flex-col gap-8 sm:flex-row sm:gap-12">
			<div className="shrink-0">
				<Image
					src="/profile.jpg"
					alt="Otso Saarinen"
					width={112}
					height={144}
					className="object-cover object-top"
					priority
				/>
			</div>
			<div className="flex flex-col gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Otso Saarinen
					</h1>
					<p className="mt-1 text-sm text-gray-500">
						System Specialist · Turku, Finland
					</p>
				</div>
				<p className="max-w-lg text-sm leading-relaxed text-gray-600">
					System Specialist at the University of Turku, working with Azure,
					Microsoft 365, Entra ID, and PowerShell. Interested in artificial
					intelligence, cloud infrastructure, and health technology.
				</p>
				<div className="flex flex-wrap items-center gap-5">
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
				<div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1">
					<Trophy className="h-3 w-3 text-amber-600" />
					<span className="text-xs font-medium text-amber-700">
						Since AI Hackathon 2025 — 1st Place
					</span>
				</div>
			</div>
		</header>
	);
}
