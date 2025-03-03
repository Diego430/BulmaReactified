import React, { ElementType, ReactNode } from "react";

interface ColProps {
	as?: ElementType;
	size?: number;
	mobile?: number;
	tablet?: number;
	desktop?: number;
	widescreen?: number;
	fullhd?: number;
	offset?: number;
	mobileOffset?: number;
	tabletOffset?: number;
	desktopOffset?: number;
	widescreenOffset?: number;
	fullhdOffset?: number;
	isNarrow?: boolean;
	children?: ReactNode;
	className?: string;
	[prop: string]: any; // Allow additional props
}

const Col: React.FC<ColProps> = ({
	as: Component = "div",
	size,
	mobile,
	tablet,
	desktop,
	widescreen,
	fullhd,
	offset,
	mobileOffset,
	tabletOffset,
	desktopOffset,
	widescreenOffset,
	fullhdOffset,
	isNarrow,
	children,
	className = "",
	...props
}) => {
	const bulmaClasses: string[] = [];

	//* SIZE
	if (size !== undefined) {
		if (size >= 0 && size <= 12) bulmaClasses.push(`is-${size}`);
		else console.warn("Size must be between 0 and 12");
	}

	//* RESPONSIVENESS
	if (mobile !== undefined) {
		if (mobile >= 0 && mobile <= 12) bulmaClasses.push(`is-${mobile}-mobile`);
		else console.warn("Column in mobile must be between 0 and 12");
	}
	if (tablet !== undefined) {
		if (tablet >= 0 && tablet <= 12) bulmaClasses.push(`is-${tablet}-tablet`);
		else console.warn("Column in tablet must be between 0 and 12");
	}
	if (desktop !== undefined) {
		if (desktop >= 0 && desktop <= 12) bulmaClasses.push(`is-${desktop}-desktop`);
		else console.warn("Column in desktop must be between 0 and 12");
	}
	if (widescreen !== undefined) {
		if (widescreen >= 0 && widescreen <= 12) bulmaClasses.push(`is-${widescreen}-widescreen`);
		else console.warn("Column in widescreen must be between 0 and 12");
	}
	if (fullhd !== undefined) {
		if (fullhd >= 0 && fullhd <= 12) bulmaClasses.push(`is-${fullhd}-fullhd`);
		else console.warn("Column in fullhd must be between 0 and 12");
	}

	//* OFFSET
	if (offset !== undefined) {
		if (offset >= 0 && offset <= 12) bulmaClasses.push(`is-offset-${offset}`);
		else console.warn("Offset must be between 0 and 12");
	}

	//* OFFSET RESPONSIVENESS
	if (mobileOffset !== undefined) {
		if (mobileOffset >= 0 && mobileOffset <= 12)
			bulmaClasses.push(`is-offset-${mobileOffset}-mobile`);
		else console.warn("Offset in mobile must be between 0 and 12");
	}
	if (tabletOffset !== undefined) {
		if (tabletOffset >= 0 && tabletOffset <= 12)
			bulmaClasses.push(`is-offset-${tabletOffset}-tablet`);
		else console.warn("Offset in tablet must be between 0 and 12");
	}
	if (desktopOffset !== undefined) {
		if (desktopOffset >= 0 && desktopOffset <= 12)
			bulmaClasses.push(`is-offset-${desktopOffset}-desktop`);
		else console.warn("Offset in desktop must be between 0 and 12");
	}
	if (widescreenOffset !== undefined) {
		if (widescreenOffset >= 0 && widescreenOffset <= 12)
			bulmaClasses.push(`is-offset-${widescreenOffset}-widescreen`);
		else console.warn("Offset in widescreen must be between 0 and 12");
	}
	if (fullhdOffset !== undefined) {
		if (fullhdOffset >= 0 && fullhdOffset <= 12)
			bulmaClasses.push(`is-offset-${fullhdOffset}-fullhd`);
		else console.warn("Offset in fullhd must be between 0 and 12");
	}

	//* IS NARROW
	if (isNarrow) bulmaClasses.push("is-narrow");

	return (
		<Component
			className={`column ${bulmaClasses.join(" ")} ${className}`}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Col;
