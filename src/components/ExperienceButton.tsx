import { Tags } from "lucide-react";

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
			<div className="flex flex-col justify-between">
				<div className="flex flex-col">
					<div className="flex w-full flex-row items-center justify-between">
						<p className="text-sm font-medium">{title}</p>
						<p className="text-xs italic">{date}</p>
					</div>
					<p className="text-sm text-neutral-300">{company}</p>
				</div>
				<p className="py-3 text-sm text-neutral-300">{description}</p>
				<div className="flex flex-row items-center justify-start gap-0.75 text-xs text-neutral-300">
					<Tags size={15} color="#7bf1a8" />
					<div className="flex flex-wrap">
						{skills.map((skill, index) => (
							<span key={index} className="rounded-md px-0.75">
								#{skill}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="my-3 h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ExperienceButton;
