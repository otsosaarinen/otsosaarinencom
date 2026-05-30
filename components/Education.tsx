interface Degree {
	degree: string;
	school: string;
	specialisation?: string;
	gpa?: string;
	year: string;
}

const degrees: Degree[] = [
	{
		degree: "Bachelor of Engineering, ICT",
		school: "Turku University of Applied Sciences",
		specialisation: "Health Technology",
		gpa: "4.1 / 5",
		year: "2025",
	},
];

export default function Education() {
	return (
		<section className="mb-14">
			<div className="mb-8 flex items-center gap-6">
				<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-indigo-600">
					Education
				</h2>
				<div className="h-px flex-1 bg-indigo-100" />
			</div>
			<div className="flex flex-col gap-7">
				{degrees.map((edu) => (
					<div key={edu.degree} className="flex gap-4">
						<p className="w-10 shrink-0 pt-1 text-right text-xs text-indigo-400">
							{edu.year}
						</p>
						<div className="flex shrink-0 flex-col items-center">
							<div className="mt-1.5 h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-white" />
						</div>
						<div className="flex-1">
							<p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
							<p className="text-xs font-medium uppercase tracking-wider text-gray-400">
								{edu.school}
							</p>
							{edu.specialisation && (
								<p className="text-xs text-gray-400">Specialisation: {edu.specialisation}</p>
							)}
							{edu.gpa && (
								<p className="mt-0.5 text-xs text-gray-400">GPA {edu.gpa}</p>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
