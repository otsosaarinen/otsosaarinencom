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
		<section className="mb-14">
			<div className="mb-8 flex items-center gap-6">
				<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-gray-400">
					Skills
				</h2>
				<div className="h-px flex-1 bg-gray-200" />
			</div>
			<div className="flex flex-col gap-3">
				{skillGroups.map(({ label, tags }) => (
					<div key={label} className="flex gap-8">
						<p className="w-24 shrink-0 text-xs text-gray-400">{label}</p>
						<p className="text-sm text-gray-600">{tags.join(", ")}</p>
					</div>
				))}
			</div>
		</section>
	);
}
