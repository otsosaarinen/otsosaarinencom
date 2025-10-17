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
			<div className="flex flex-col justify-between text-sm">
				<div className="flex flex-col">
					<div className="flex w-full flex-row items-center justify-between">
						<p className="font-medium">{title}</p>
						<p className="text-xs italic">{date}</p>
					</div>
					<p className="text-neutral-400">{company}</p>
				</div>
				<p className="py-3 text-neutral-400">{description}</p>
				<div className="flex flex-row items-center justify-start gap-1 text-xs text-neutral-400">
					<Tags size={15} color="#7bf1a8" />
					<p>
						{skills.map((skill, index) => (
							<span
								key={index}
								className="duration cursor-pointer rounded-md border-neutral-400 px-0.5 transition-colors duration-250 ease-in-out hover:text-green-300"
							>
								{skill}
							</span>
						))}
					</p>
				</div>
			</div>
			<div className="my-3 h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ExperienceButton;
