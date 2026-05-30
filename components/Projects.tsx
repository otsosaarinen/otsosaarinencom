import { Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

interface Project {
	name: string;
	description: string;
	tags: string[];
	link?: { label: string; href: string };
	isPrivate?: boolean;
}

const projects: Project[] = [
	{
		name: "AIDA",
		description: "AI-powered job lead sourcing from company career pages",
		tags: ["React", "TypeScript", "Python", "FastAPI", "LangChain", "Llama 3", "n8n"],
		isPrivate: true,
	},
	{
		name: "Bachelor's Thesis",
		description:
			"Real-time patient data collection and analysis using Apache Kafka",
		tags: ["Apache Kafka", "Python", "InfluxDB", "Grafana"],
		link: {
			label: "View on GitHub",
			href: "https://github.com/otsosaarinen/thesis",
		},
	},
	{
		name: "Klemmari",
		description: "AI-powered chatbot using RAG architecture",
		tags: ["React", "Python", "Azure", "GPT-4o", "RAG"],
		link: {
			label: "View on GitHub",
			href: "https://github.com/otsosaarinen/klemmari",
		},
	},
];

export default function Projects() {
	return (
		<section>
			<h2 className="mb-6 border-b border-gray-100 pb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
				Projects
			</h2>
			<div className="flex flex-col gap-4">
				{projects.map((project) => (
					<div
						key={project.name}
						className="flex flex-col gap-3 rounded-lg border border-gray-100 p-4"
					>
						<div className="flex items-start justify-between gap-4">
							<p className="text-sm font-semibold text-gray-900">
								{project.name}
							</p>
							{project.isPrivate ? (
								<span className="flex items-center gap-1 text-xs text-gray-400">
									<Lock className="h-3 w-3" />
									Private
								</span>
							) : project.link ? (
								<a
									href={project.link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-gray-700"
								>
									<GitHubIcon className="h-3 w-3" />
									{project.link.label}
								</a>
							) : null}
						</div>
						<p className="text-sm text-gray-600">{project.description}</p>
						<div className="flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
