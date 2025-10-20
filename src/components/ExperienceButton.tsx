function ExperienceButton({
	title,
	company,
	description,
	date,
	skills,
}: {
	title: string;
	company: string;
	description: string;
	date: string;
	skills: string[];
}) {
	return (
		<>
			<div className="group flex cursor-pointer flex-col justify-between px-1 py-3 text-sm transition-colors duration-250 ease-in-out hover:bg-neutral-800">
				<div className="flex flex-col">
					<div className="flex w-full flex-row items-center justify-between">
						<p className="font-medium text-blue-300">{title}</p>
						<p className="text-xs text-neutral-400 italic group-hover:text-white">
							{date}
						</p>
					</div>
					<p className="text-neutral-400 group-hover:text-white">
						{company}
					</p>
				</div>
				<p className="my-3 text-neutral-400 group-hover:text-white">
					{description}
				</p>

				<div className="flex flex-wrap gap-1.5 text-xs">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="rounded-sm border-1 border-blue-300 px-1.5 py-0.5 text-white"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
			<div className="h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ExperienceButton;
