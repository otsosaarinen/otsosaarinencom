interface Job {
	title: string;
	company: string;
	year: string;
	description: string;
}

const jobs: Job[] = [
	{
		title: "System Specialist",
		company: "University of Turku",
		year: "2026",
		description:
			"Administered and developed Microsoft 365 and Azure environments. Managed identities across cloud and on-premises using Active Directory and Entra ID, and developed PowerShell scripts to automate administrative tasks.",
	},
	{
		title: "Software Engineer",
		company: "Since AI",
		year: "2026",
		description:
			"Built a hackathon platform using TypeScript, Next.js, and NestJS. Implemented authentication with Better Auth, role-based access, team management, ELO-based voting, and judging workflows. Containerized with Docker, deployed on Hetzner, and set up CI/CD pipelines with GitHub Actions.",
	},
	{
		title: "Integration Analyst",
		company: "Lowell",
		year: "2025",
		description:
			"Managed data transfers between Lowell and client companies. Maintained SFTP servers, configured file transfers with MOVEit and BizTalk, and resolved API integration issues.",
	},
	{
		title: "Application Specialist Intern",
		company: "2M-IT",
		year: "2024",
		description:
			"Solved IT issues for employees in the wellbeing services counties of Southwest Finland and Kanta-Häme using Active Directory, Azure, Intune, and Entra ID.",
	},
	{
		title: "Medical Engineering Research Intern",
		company: "NIT Hachinohe (八戸高専)",
		year: "2024",
		description:
			"Researched radiofrequency ablation (RFA) and its thermal effects on human tissue.",
	},
];

export default function Experience() {
	return (
		<section className="mb-14">
			<div className="mb-8 flex items-center gap-6">
				<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-indigo-600">
					Experience
				</h2>
				<div className="h-px flex-1 bg-indigo-100" />
			</div>
			<div className="flex flex-col gap-7">
				{jobs.map((job) => (
					<div key={`${job.company}-${job.title}`} className="flex gap-8">
						<p className="w-10 shrink-0 pt-0.5 text-xs text-indigo-400">
							{job.year}
						</p>
						<div className="flex flex-1 flex-col gap-1">
							<p className="text-sm font-semibold text-gray-900">{job.title}</p>
							<p className="text-xs font-medium uppercase tracking-wider text-gray-400">
								{job.company}
							</p>
							<p className="mt-1 text-sm leading-relaxed text-gray-600">
								{job.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
