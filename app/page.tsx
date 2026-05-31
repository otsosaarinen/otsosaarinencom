import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<div className="mx-auto max-w-2xl px-8 py-16 sm:py-20">
				<FadeIn><Hero /></FadeIn>
				<Experience />
				<Education />
				<Projects />
				<Skills />
				<FadeIn>
					<footer className="mt-16 border-t border-gray-100 pt-6 text-center">
						<p className="text-xs text-gray-400">© 2026 Otso Saarinen</p>
					</footer>
				</FadeIn>
			</div>
		</div>
	);
}
