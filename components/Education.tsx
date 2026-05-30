export default function Education() {
	return (
		<section className="mb-14">
			<div className="mb-8 flex items-center gap-6">
				<h2 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-indigo-600">
					Education
				</h2>
				<div className="h-px flex-1 bg-indigo-100" />
			</div>
			<div className="flex gap-4">
				<p className="w-10 shrink-0 pt-1 text-right text-xs text-indigo-400">
					2025
				</p>
				<div className="flex shrink-0 flex-col items-center">
					<div className="mt-1.5 h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-white" />
				</div>
				<div className="flex-1">
					<p className="text-sm font-semibold text-gray-900">
						Bachelor of Engineering, ICT
					</p>
					<p className="text-xs font-medium uppercase tracking-wider text-gray-400">
						Turku University of Applied Sciences
					</p>
					<p className="text-xs text-gray-400">Specialisation: Health Technology</p>
					<p className="mt-0.5 text-xs text-gray-400">GPA 4.1 / 5</p>
				</div>
			</div>
		</section>
	);
}
