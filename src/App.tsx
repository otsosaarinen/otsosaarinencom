import "./App.css";

import ContactButton from "./components/ContactButton";
import ExperienceButton from "./components/ExperienceButton";
import Highlight from "./components/Highlight";
import SkillButton from "./components/SkillButton";

import { useScramble } from "use-scramble";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

function App() {
	const nameScramble = useScramble({
		text: "OTSO SAARINEN",
		speed: 0.8,
		tick: 1,
		step: 2,
		scramble: 12,
		seed: 3,
		chance: 1,
		range: [33, 125],
	});

	const titleScramble = useScramble({
		text: "INTEGRATION ANALYST",
		speed: 0.8,
		tick: 1,
		step: 2,
		scramble: 12,
		seed: 3,
		chance: 1,
		range: [33, 125],
	});

	return (
		<>
			{/* Loading animation */}

			{/* Main content*/}
			<div className="font-inter h-screen w-screen justify-center overflow-x-hidden bg-blue-700">
				<div className="relative flex h-80 w-full flex-col items-center justify-center text-white">
					<h1
						className="z-20 text-2xl font-bold tracking-wide"
						ref={nameScramble.ref}
						onMouseEnter={nameScramble.replay}
					></h1>
					<h2
						className="absolute z-10 text-8xl font-bold tracking-wide opacity-20"
						ref={titleScramble.ref}
						onMouseEnter={titleScramble.replay}
					></h2>
				</div>
				<div className="h-full bg-neutral-900/90"></div>
			</div>
		</>
	);
}

export default App;
