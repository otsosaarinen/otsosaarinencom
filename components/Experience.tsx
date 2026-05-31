import FadeIn from "./FadeIn";

interface Job {
	title: string;
	company: string;
	year: string;
	period: string;
	description: string;
}

const jobs: Job[] = [
	{
		title: "System Specialist",
		company: "University of Turku",
		year: "2026",
		period: "Jan 2026 – Present",
		description:
			"Administered and developed Microsoft 365 and Azure environments. Managed identities across cloud and on-premises using Active Directory and Entra ID, and developed PowerShell scripts to automate administrative tasks.",
	},
	{
		title: "Software Engineer",
		company: "Since AI",
		year: "2026",
		period: "Mar 2026 – May 2026",
		description:
			"Built a hackathon platform using TypeScript, Next.js, and NestJS. Implemented authentication with Better Auth, role-based access, team management, ELO-based voting, and judging workflows. Containerized with Docker, deployed on Hetzner, and set up CI/CD pipelines with GitHub Actions.",
	},
	{
		title: "Integration Analyst",
		company: "Lowell",
		year: "2025",
		period: "Jul 2025 – Jan 2026",
		description:
			"Managed data transfers between Lowell and client companies. Maintained SFTP servers, configured file transfers with MOVEit and BizTalk, and resolved API integration issues.",
	},
	{
		title: "Medical Engineering Research Intern",
		company: "NIT Hachinohe (八戸高専)",
		year: "2024",
		period: "Apr 2024 – Jul 2024",
		description:
			"Researched radiofrequency ablation (RFA) and its thermal effects on human tissue.",
	},
	{
		title: "Application Specialist Intern",
		company: "2M-IT",
		year: "2024",
		period: "Nov 2023 – Apr 2024",
		description:
			"Solved IT issues for employees in the wellbeing services counties of Southwest Finland and Kanta-Häme using Active Directory, Azure, Intune, and Entra ID.",
	},
];

export default function Experience() {
	return (
		<section className="mb-14">
			<FadeIn>
				<div className="mb-8 flex items-center gap-6">
					<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-indigo-600">
						Experience
					</h2>
					<div className="h-px flex-1 bg-indigo-100" />
				</div>
			</FadeIn>
			<div className="flex flex-col">
				{jobs.map((job, index) => {
					const showYear = index === 0 || jobs[index - 1].year !== job.year;
					const isLast = index === jobs.length - 1;
					return (
						<FadeIn key={`${job.company}-${job.title}`}>
						<div className="flex gap-4">
							<p className="w-10 shrink-0 pt-1 text-right text-xs text-indigo-400">
								{showYear ? job.year : ""}
							</p>
							<div className="flex shrink-0 flex-col items-center">
								<div className="mt-1.5 h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-white" />
								{!isLast && (
									<div className="mt-1.5 w-px flex-1 bg-indigo-100" />
								)}
							</div>
							<div className={`flex-1 ${isLast ? "" : "pb-7"}`}>
								<div className="flex items-start justify-between gap-4">
									<p className="text-sm font-semibold text-gray-900">
										{job.title}
									</p>
									<p className="shrink-0 text-xs text-gray-400">{job.period}</p>
								</div>
								<p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
									{job.company}
								</p>
								<p className="mt-1 text-sm leading-relaxed text-gray-600">
									{job.description}
								</p>
							</div>
						</div>
					</FadeIn>
					);
				})}
			</div>
		</section>
	);
}
