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
			<div className="group cursor-pointer pt-3 pr-1 pb-1 pl-1 text-sm transition-colors duration-250 ease-in-out hover:bg-neutral-700">
				<div className="flex flex-row items-center justify-between">
					<div className="font-medium text-green-300">{title}</div>
					<div className="flex flex-row items-center justify-center gap-1 text-neutral-400 group-hover:text-white">
						<a href={github_link} target="_blank">
							repository
						</a>
						<Github size={15} color="#7bf1a8" />
					</div>
				</div>
				<div className="py-3 text-neutral-400 group-hover:text-white">
					{description}
				</div>
				<div className="mb-3 flex flex-wrap space-x-1.5 text-xs">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="rounded-sm border-1 border-neutral-400 px-1.5 py-0.5 text-neutral-400 group-hover:border-green-300"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="h-[0.5px] w-full bg-neutral-700"></div>
		</>
	);
}

export default ProjectButton;
