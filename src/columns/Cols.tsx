import React, { ElementType, ReactNode } from "react";
import { Responsiveness } from "../types";

// Define the props interface
interface ColsProps {
	/** The element type to render */
	as?: ElementType;
	/** Remove the gap between columns */
	isGapless?: boolean;
	/** Allow columns to wrap */
	isMultiline?: boolean;
	/** The gap between columns */
	gap?: number | Responsiveness;
	verticalAlign?: "center";
	align?: "center";
	children?: ReactNode;
	className?: string;
	[prop: string]: any;
}

// Convert the component to TypeScript
export default function Cols({
	as: Component = "div",
	isGapless,
	isMultiline,
	gap,
	verticalAlign,
	align,
	children,
	className = "",
	...props
}: ColsProps) {
	const bulmaClasses: string[] = [];

	// IS GAPLESS
	if (isGapless) bulmaClasses.push("is-gapless");

	// IS MULTILINE
	if (isMultiline) bulmaClasses.push("is-multiline");

	// GAP
	if (typeof gap === "number") {
		if (gap >= 0 && gap <= 8) bulmaClasses.push(`is-${gap}`);
		else console.warn("Gap must be between 0 and 8");
	} else if (typeof gap === "object") {
		Object.entries(gap).forEach(([key, value]: [string, number]) => {
			if (value >= 0 && value <= 8) bulmaClasses.push(`is-${key}-${value}`);
			else console.warn("Gap must be between 0 and 8");
		});
	}

	// VERTICAL ALIGN
	if (verticalAlign === "center") {
		bulmaClasses.push("is-vcentered");
	}

	// ALIGN
	if (align === "center") {
		bulmaClasses.push("is-centered");
	}

	return (
		<Component
			className={`columns ${bulmaClasses.join(" ")} ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
}
