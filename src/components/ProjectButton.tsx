import { Github } from "lucide-react";

function ProjectButton({
	title,
	description,
	tags,
	github_link,
}: {
	title: string;
	description: string;
	tags: string[];
	github_link: string;
}) {
	return (
		<>
			<div className="text-sm">
				<div className="flex flex-row items-center justify-between">
					<div className="font-medium">{title}</div>

					<div className="flex flex-row items-center justify-center gap-1 text-neutral-300">
						<a href={github_link} target="_blank">
							repository
						</a>
						<Github size={15} color="#7bf1a8" />
					</div>
				</div>
				<div className="py-3 text-neutral-300">{description}</div>
				<div className="flex flex-wrap text-xs">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="my-0.5 mr-1.5 rounded-sm border-1 border-neutral-300 px-1.5 py-0.5 text-neutral-300"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="my-3 h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ProjectButton;
