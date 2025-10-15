import { Tags } from "lucide-react";

function ExperienceButton({
	title,
	company,
	description,
	date,
	tags,
}: {
	title: string;
	company: string;
	description: string;
	date: string;
	tags: string;
}) {
	return (
		<>
			<div className="flex flex-col justify-between">
				<div className="flex flex-col">
					<div className="flex w-full flex-row items-center justify-between">
						<p className="font-medium">{title}</p>
						<p className="text-sm italic">{date}</p>
					</div>
					<p className="text-sm text-white/50">{company}</p>
				</div>
				<p className="py-3 text-sm">{description}</p>
				<div className="flex flex-row items-center justify-start gap-1 text-sm italic">
					<Tags size={15} color="#a684ff" />
					<p>{tags}</p>
				</div>
			</div>
		</>
	);
}

export default ExperienceButton;
