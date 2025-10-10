function Highlight({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="relative inline-block">
				<div className="relative z-20 text-4xl font-bold">
					{children}
				</div>
				<div className="absolute bottom-0.5 z-10 h-[25%] w-full bg-rose-400"></div>
			</div>
		</>
	);
}

export default Highlight;
