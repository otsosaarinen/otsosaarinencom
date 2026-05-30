import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
	return (
		<div className="animate-fade-in min-h-screen bg-white">
			<div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
				<Hero />
				<div className="my-14 border-t border-gray-100" />
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_296px]">
					<div className="flex flex-col gap-14">
						<Experience />
						<Projects />
					</div>
					<div className="flex flex-col gap-12">
						<Education />
						<Skills />
					</div>
				</div>
				<footer className="mt-20 border-t border-gray-100 pt-6 text-center">
					<p className="text-xs text-gray-400">© 2026 Otso Saarinen</p>
				</footer>
			</div>
		</div>
	);
}
