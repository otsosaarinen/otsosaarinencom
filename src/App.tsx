import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { Kbd } from "./components/ui/kbd";

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div
					className="bg-background flex h-screen flex-col items-center justify-center"
					style={{ fontFamily: "var(--font-montserrat)" }}
				>
					<div className="absolute top-5 right-5">
						<ModeToggle />
					</div>

					<div className="flex flex-col items-center gap-4">
						<p className="text-muted-foreground text-sm">
							Press <Kbd>Ctrl</Kbd> to switch themes
						</p>
					</div>

					<div className="absolute bottom-3 text-xs">
						© 2025 Otso Saarinen. All rights reserved.
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
