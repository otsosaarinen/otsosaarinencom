import "./App.css";

function App() {
	return (
		<>
			<div className="font-inter flex h-screen w-screen flex-col items-center justify-center gap-10 bg-neutral-950 text-white">
				<div className="text-6xl text-white">Otso Saarinen</div>
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="text-2xl">Experience</div>
					<div className="flex flex-col items-start justify-center gap-3 rounded-2xl border-1 border-blue-900 bg-blue-950 p-5">
						<div>
							<div className="text-lg">Integration Analyst</div>
							<div className="text-neutral-300">
								Lowell Suomi Oy
							</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Worked in the data transfer team and solved issues
							in customer integrations. Handled daily data
							transfer tasks and helped improve existing customer
							integrations.
						</div>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 rounded-2xl border-1 border-blue-900 bg-blue-950 p-5">
						<div>
							<div className="text-lg">
								Application Specialist
							</div>
							<div className="text-neutral-300">2M-IT Oy</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Internship at 2M-IT's Service Desk. Solved IT issues
							for employees in the wellbeing services counties of
							Southwest Finland and Kanta-Häme.
						</div>
					</div>
					<div className="flex flex-col items-start justify-center gap-3 rounded-2xl border-1 border-blue-900 bg-blue-950 p-5">
						<div>
							<div className="text-lg">Internship</div>
							<div className="text-neutral-300">
								National Institute of Technology, Hachinohe
								College (八戸高専)
							</div>
						</div>
						<div className="max-w-150 text-sm text-neutral-300">
							Exchange student in Hachinohe, Japan. Researched
							radiofrequency ablation (RFA) cancer treatment and
							its impact on human cells.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
