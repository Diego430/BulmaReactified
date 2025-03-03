import React, { ReactNode, ElementType } from "react";

// Define the props interface
interface ColsProps {
	as?: ElementType;
	isGapless?: boolean;
	isMultiline?: boolean;
	gap?: number;
	mobileGap?: number;
	tabletGap?: number;
	desktopGap?: number;
	widescreenGap?: number;
	fullhdGap?: number;
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
	mobileGap,
	tabletGap,
	desktopGap,
	widescreenGap,
	fullhdGap,
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
	if (gap !== undefined) {
		if (gap >= 0 && gap <= 8) bulmaClasses.push(`is-${gap}`);
		else console.warn("Gap must be between 0 and 8");
	}

	// GAP RESPONSIVENESS
	if (mobileGap !== undefined) {
		if (mobileGap >= 0 && mobileGap <= 8) bulmaClasses.push(`is-${mobileGap}-mobile`);
		else console.warn("Gap in mobile must be between 0 and 8");
	}
	if (tabletGap !== undefined) {
		if (tabletGap >= 0 && tabletGap <= 8) bulmaClasses.push(`is-${tabletGap}-tablet`);
		else console.warn("Gap in tablet must be between 0 and 8");
	}
	if (desktopGap !== undefined) {
		if (desktopGap >= 0 && desktopGap <= 8) bulmaClasses.push(`is-${desktopGap}-desktop`);
		else console.warn("Gap in desktop must be between 0 and 8");
	}
	if (widescreenGap !== undefined) {
		if (widescreenGap >= 0 && widescreenGap <= 8)
			bulmaClasses.push(`is-${widescreenGap}-widescreen`);
		else console.warn("Gap in widescreen must be between 0 and 8");
	}
	if (fullhdGap !== undefined) {
		if (fullhdGap >= 0 && fullhdGap <= 8) bulmaClasses.push(`is-${fullhdGap}-fullhd`);
		else console.warn("Gap in fullhd must be between 0 and 8");
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
