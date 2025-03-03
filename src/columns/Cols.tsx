import React, { ElementType, ReactNode } from "react";
import { Responsiveness } from "../types";

// Define the props interface
interface ColsProps {
	/**
	 * The element type to render
	 *
	 * @type {ElementType}
	 * @example
	 * <Cols as="section" />
	 */
	as?: ElementType;

	/**
	 * Remove the gap between columns
	 *
	 * @type {boolean}
	 * @example
	 * <Cols gapless />
	 */
	gapless?: boolean;

	/**
	 * Allow columns to wrap
	 *
	 * @type {boolean}
	 * @example
	 * <Cols isMultiline />
	 */
	multiline?: boolean;

	/**
	 * The gap between columns
	 *
	 * @type {number | Responsiveness}
	 * @example
	 * <Cols gap={4} />
	 * <Cols gap={{ mobile: 4, tablet: 6, desktop: 8 }} />
	 */
	gap?: number | Responsiveness;

	/**
	 * The vertical alignment of the columns
	 *
	 * @type {"center"}
	 * @example
	 * <Cols verticalAlign="center" />
	 */
	verticalAlign?: "center";

	/**
	 * The horizontal alignment of the columns
	 *
	 * @type {"center"}
	 * @example
	 * <Cols align="center" />
	 */
	align?: string;

	/**
	 * The class name of the component
	 *
	 * @type {string}
	 */
	className?: string;

	/**
	 * The content of the component
	 *
	 * @type {ReactNode}
	 */
	children?: ReactNode;

	/**
	 * Additional props
	 */
	[prop: string]: any;
}

// Convert the component to TypeScript
export default function Cols({
	as: Component = "div",
	gapless,
	multiline,
	gap,
	verticalAlign,
	align,
	children,
	className = "",
	...props
}: ColsProps) {
	// Define the bulma classes
	const bulmaClasses: string[] = [];

	// IS GAPLESS
	if (gapless) bulmaClasses.push("is-gapless");

	// IS MULTILINE
	if (multiline) bulmaClasses.push("is-multiline");

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
	switch (verticalAlign) {
		case "center":
			bulmaClasses.push("is-vcentered");
			break;
		default:
			break;
	}

	// ALIGN
	switch (align) {
		case "center":
			bulmaClasses.push("is-centered");
			break;
		default:
			break;
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
