"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`opacity-0 ${visible ? "animate-fade-in" : ""}`}>
			{children}
		</div>
	);
}
