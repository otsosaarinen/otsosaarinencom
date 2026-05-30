interface Job {
	title: string;
	company: string;
	period: string;
	description: string;
}

const jobs: Job[] = [
	{
		title: "System Specialist",
		company: "University of Turku",
		period: "Jan 2026 – Present",
		description:
			"Administered and developed Microsoft 365 and Azure environments. Managed identities across cloud and on-premises using Active Directory and Entra ID, and developed PowerShell scripts to automate administrative tasks.",
	},
	{
		title: "Software Engineer",
		company: "Since AI",
		period: "Mar 2026 – May 2026",
		description:
			"Built a hackathon platform using TypeScript, Next.js, and NestJS. Implemented authentication with Better Auth, role-based access, team management, ELO-based voting, and judging workflows. Containerized with Docker, deployed on Hetzner, and set up CI/CD pipelines with GitHub Actions.",
	},
	{
		title: "Integration Analyst",
		company: "Lowell",
		period: "Jul 2025 – Jan 2026",
		description:
			"Managed data transfers between Lowell and client companies. Maintained SFTP servers, configured file transfers with MOVEit and BizTalk, and resolved API integration issues.",
	},
	{
		title: "Application Specialist Intern",
		company: "2M-IT",
		period: "Nov 2023 – Apr 2024",
		description:
			"Solved IT issues for employees in the wellbeing services counties of Southwest Finland and Kanta-Häme using Active Directory, Azure, Intune, and Entra ID.",
	},
	{
		title: "Medical Engineering Research Intern",
		company: "NIT Hachinohe (八戸高専)",
		period: "Apr 2024 – Jul 2024",
		description:
			"Researched radiofrequency ablation (RFA) and its thermal effects on human tissue.",
	},
];

export default function Experience() {
	return (
		<section>
			<h2 className="mb-6 border-b border-gray-100 pb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
				Experience
			</h2>
			<div className="flex flex-col gap-8">
				{jobs.map((job) => (
					<div
						key={`${job.company}-${job.title}`}
						className="flex flex-col gap-1.5"
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="text-sm font-semibold text-gray-900">
									{job.title}
								</p>
								<p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
									{job.company}
								</p>
							</div>
							<p className="shrink-0 text-xs text-gray-400">{job.period}</p>
						</div>
						<p className="text-sm leading-relaxed text-gray-600">
							{job.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
