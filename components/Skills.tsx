const skillGroups = [
	{ label: "Languages", tags: ["TypeScript", "JavaScript", "Python", "PowerShell"] },
	{ label: "Frontend", tags: ["React", "Next.js", "Tailwind CSS"] },
	{
		label: "Backend",
		tags: ["Node.js", "NestJS", "Express.js", "Apache Kafka", "REST API"],
	},
	{ label: "Databases", tags: ["SQL", "PostgreSQL", "InfluxDB"] },
	{ label: "DevOps", tags: ["Azure", "Docker", "CI/CD", "GitHub Actions"] },
	{ label: "Tools", tags: ["Git", "Jira", "Grafana", "SFTP"] },
];

export default function Skills() {
	return (
		<section>
			<h2 className="mb-6 border-b border-gray-100 pb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
				Skills
			</h2>
			<div className="flex flex-col gap-4">
				{skillGroups.map(({ label, tags }) => (
					<div key={label} className="flex flex-col gap-2">
						<p className="text-xs font-medium text-gray-400">{label}</p>
						<div className="flex flex-wrap gap-1.5">
							{tags.map((tag) => (
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
