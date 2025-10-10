function SkillButton({ text }: { text: string }) {
	return (
		<>
			<div
				className={`rounded-2xl border-2 border-white px-4 py-1 text-center text-lg text-white transition-all duration-150 ease-in hover:cursor-pointer hover:bg-white hover:font-semibold hover:text-blue-600`}
			>
				{text}
			</div>
		</>
	);
}

export default SkillButton;
