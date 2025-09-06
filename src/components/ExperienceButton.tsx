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
			<div className="flex flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl border-1 border-blue-800 bg-blue-700 p-5 transition-all duration-150 ease-in hover:cursor-pointer hover:bg-blue-900">
				<div className="w-full">
					<div className="flex w-full flex-row items-center justify-between">
						<div className="text-lg">{title}</div>
						<div>{date}</div>
					</div>
					<div className="text-neutral-300">{company}</div>
				</div>
				<div className="max-w-150 text-sm text-neutral-300">
					{description}
				</div>
			</div>
		</>
	);
}

export default ExperienceButton;
