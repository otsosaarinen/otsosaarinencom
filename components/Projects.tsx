import { Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

interface Project {
	name: string;
	description: string;
	tags: string[];
	link?: { href: string };
	isPrivate?: boolean;
}

const projects: Project[] = [
	{
		name: "AIDA",
		description: "AI-powered job lead sourcing from company career pages",
		tags: ["React", "TypeScript", "Python", "FastAPI", "LangChain", "n8n"],
		isPrivate: true,
	},
	{
		name: "Bachelor's Thesis",
		description:
			"Real-time patient data collection and analysis using Apache Kafka",
		tags: ["Apache Kafka", "Python", "InfluxDB", "Grafana"],
		link: { href: "https://github.com/otsosaarinen/thesis" },
	},
	{
		name: "Klemmari",
		description: "AI-powered chatbot using RAG architecture",
		tags: ["React", "Python", "Azure", "RAG"],
		link: { href: "https://github.com/otsosaarinen/klemmari" },
	},
];

export default function Projects() {
	return (
		<section className="mb-14">
			<div className="mb-8 flex items-center gap-6">
				<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-gray-400">
					Projects
				</h2>
				<div className="h-px flex-1 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-6">
				{projects.map((project) => (
					<div key={project.name}>
						<div className="flex items-baseline justify-between gap-4">
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
									GitHub
								</a>
							) : null}
						</div>
						<p className="mt-0.5 text-sm text-gray-600">{project.description}</p>
						<p className="mt-1 text-xs text-gray-400">{project.tags.join(", ")}</p>
					</div>
				))}
			</div>
		</section>
	);
}
