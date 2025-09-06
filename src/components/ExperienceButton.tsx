function ExperienceButton({
	title,
	company,
	description,
	date,
}: {
	title: string;
	company: string;
	description: string;
	date: string;
}) {
	return (
		<>
			<div className="group relative flex max-w-100 flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl border border-neutral-800 p-5 text-neutral-900 sm:max-w-125 md:max-w-150 lg:max-w-175">
				<div className="transition-color absolute left-0 z-0 h-full w-full duration-150 ease-in group-hover:bg-blue-100"></div>
				<div className="absolute -right-10 -bottom-10 h-50 w-50 rounded-full bg-blue-200 transition-all duration-150 ease-in group-hover:scale-115 group-hover:bg-blue-300"></div>
				<div className="z-10 w-full">
					<div className="flex w-full flex-row items-center justify-between">
						<div className="text-lg font-medium">{title}</div>
						<div className="text-sm font-light">{date}</div>
					</div>
					<div className="text-blue-600">{company}</div>
				</div>
				<div className="z-10 text-sm font-light">{description}</div>
			</div>
		</>
	);
}

export default ExperienceButton;
