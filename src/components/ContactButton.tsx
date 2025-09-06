function ContactButton({
	link_url,
	icon: Icon,
}: {
	link_url: string;
	icon: React.ElementType;
}) {
	return (
		<>
			<div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-full hover:cursor-pointer">
				<div
					className="flex h-13 w-13 items-center justify-center rounded-full bg-blue-600"
					onClick={() => window.open(link_url, "_blank")}
				>
					<Icon size={25} color="white" className="z-10" />
				</div>
				<div className="absolute -bottom-13 flex h-13 w-13 items-center justify-center rounded-full bg-blue-500 transition-all duration-150 ease-in group-hover:bottom-0"></div>
			</div>
		</>
	);
}

export default ContactButton;
