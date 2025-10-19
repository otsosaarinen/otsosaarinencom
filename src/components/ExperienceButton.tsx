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
			<div className="group flex cursor-pointer flex-col justify-between pt-3 pr-1 pb-1 pl-1 text-sm transition-colors duration-250 ease-in-out hover:bg-neutral-700">
				<div className="flex flex-col">
					<div className="flex w-full flex-row items-center justify-between">
						<p className="font-medium text-green-300">{title}</p>
						<p className="text-xs italic">{date}</p>
					</div>
					<p className="">{company}</p>
				</div>
				<p className="py-3 text-neutral-400 group-hover:text-white">
					{description}
				</p>
				<div className="mb-3 flex flex-row items-center justify-start gap-0.75 text-xs text-neutral-400">
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
			<div className="h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ExperienceButton;
