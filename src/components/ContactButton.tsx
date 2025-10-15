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
				className="flex items-center justify-center gap-1 text-sm italic"
				onClick={() => window.open(url, "_blank")}
			>
				<Icon size={15} color="#a684ff" />
				{text}
			</div>
		</>
	);
}

export default ContactButton;
