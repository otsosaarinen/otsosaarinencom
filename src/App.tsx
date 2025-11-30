import "./App.css";

function App() {
	return (
		<>
			<div className="font-montserrat flex min-h-screen flex-col items-center justify-start bg-neutral-900 text-xl text-white">
				<div className="mt-20 flex flex-col">
					<section className="flex flex-row items-center justify-center gap-5">
						<img
							src="cv_kuva_neliö.jpg"
							alt="Picture of Otso Saarinen"
							className="h-20 w-20 rounded-xl object-cover"
						/>
						<div>
							<h1 className="text-6xl font-bold">
								Otso Saarinen
							</h1>
							<h2 className="text-semibold">
								Integraatioanalyytikko
							</h2>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
