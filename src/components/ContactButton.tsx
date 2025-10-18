function ContactButton({
	url,
	text,
	icon: Icon,
}: {
	url: string;
	text: string;
	icon: React.ElementType;
}) {
	return (
		<>
			<div
				className={`group flex cursor-pointer items-center justify-center gap-1 text-sm text-neutral-400 transition-all duration-250 ease-in-out hover:text-white`}
				onClick={() => window.open(url, "_blank")}
			>
				{text}
				<Icon
					size={15}
					color="#7bf1a8"
					className="transition-transform duration-250 ease-in-out group-hover:rotate-[15deg]"
				/>
			</div>
		</>
	);
}

export default ContactButton;
