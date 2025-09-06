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
			<div className="flex max-w-175 flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 p-5 text-white">
				<div className="w-full">
					<div className="flex w-full flex-row items-center justify-between">
						<div className="text-lg font-medium">{title}</div>
						<div className="text-sm font-light">{date}</div>
					</div>
					<div className="text-neutral-300">{company}</div>
				</div>
				<div className="text-sm font-light">{description}</div>
			</div>
		</>
	);
}

export default ExperienceButton;
